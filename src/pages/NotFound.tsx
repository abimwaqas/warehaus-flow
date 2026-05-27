import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found | Fulflit";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [k, v] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(k, v);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute(attr, prev);
      };
    };

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      const created = !el;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("href");
      el.setAttribute("href", href);
      return () => {
        if (created) el?.remove();
        else if (prev !== null) el?.setAttribute("href", prev);
      };
    };

    const desc = "The page you're looking for doesn't exist. Return to Fulflit to continue exploring our cross-border fulfillment platform.";
    const restorers = [
      setMeta('meta[name="description"]', "content", desc),
      setMeta('meta[property="og:title"]', "content", "Page Not Found | Fulflit"),
      setMeta('meta[property="og:description"]', "content", desc),
      setLink("canonical", window.location.origin + location.pathname),
    ];

    return () => {
      document.title = prevTitle;
      restorers.forEach((r) => r());
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <main className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </main>
    </div>
  );
};

export default NotFound;

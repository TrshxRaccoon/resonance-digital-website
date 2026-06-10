import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Resonance Digital</title>
            </Helmet>

            <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
                <span className="text-8xl md:text-9xl font-display font-bold text-primary/20">404</span>
                <h1 className="mt-4 font-display text-2xl md:text-4xl text-foreground">Page Not Found</h1>
                <p className="mt-4 text-muted-foreground text-center max-w-md">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="mt-8 btn-primary">
                    Return Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;

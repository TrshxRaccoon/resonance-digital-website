import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default PageLayout;

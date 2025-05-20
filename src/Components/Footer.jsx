import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()} Ammar Brakat. All rights reserved.
            </p>
            <Link
                to='hero' // إزالة الـ #
                smooth={true}
                duration={500}
                spy='true'
                offset={-70}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp size={20} />
            </Link>
        </footer>
    );
};
import { Heart, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="handwritten text-xl font-bold text-primary">upsettertattoo</span>
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">
              Tattoo with love, art, and care by Rafaela Castro in Lisbon.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="handwritten text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Rafaela</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/flash-shop" className="text-muted-foreground hover:text-primary transition-colors">Flash Shop</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Book Session</Link></li>
            </ul>
          </div>

          {/* Studio Info */}
          <div className="space-y-4">
            <h3 className="handwritten text-lg font-semibold text-primary">Studio</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>@straypepperoni studio, Lisbon</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@upsettertattoo.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="handwritten text-lg font-semibold text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/upsettertattoo"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/straypepperoni"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 upsettertattoo by Rafaela Castro. Made with <Heart className="inline h-4 w-4 text-primary" /> in Lisbon.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <Input placeholder="Your Name" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Phone (optional)" />
      <Textarea placeholder="Tell me about your tattoo ideas..." rows={4} />
      <Button className="w-full btn-handwritten">
        Send Message <Heart className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;

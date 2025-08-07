import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-handwritten text-primary mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tattoo journey? Let's chat about your ideas!
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="tape-effect">
            <CardContent className="p-8">
              <h2 className="font-handwritten text-2xl text-primary mb-6">Book Your Session</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone (optional)" />
                <Textarea placeholder="Tell me about your tattoo ideas..." rows={4} />
                <Button className="w-full btn-handwritten">
                  Send Message <Heart className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">@straypepperoni studio</p>
                    <p className="text-muted-foreground">Lisbon, Portugal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@upsettertattoo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>By appointment only</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
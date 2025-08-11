import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const items = [
  { id: 1, title: "Fine Line Flower", price: "€60" },
  { id: 2, title: "Minimal Heart", price: "€45" },
  { id: 3, title: "Tiny Script", price: "€50" },
  { id: 4, title: "Geometric Star", price: "€55" },
  { id: 5, title: "Delicate Rose", price: "€70" },
  { id: 6, title: "Little Bird", price: "€65" },
];

const FlashPreview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="tape-effect">
          <CardContent className="p-0">
            <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-10 w-10 text-primary mx-auto mb-2" />
                <h3 className="font-handwritten text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlashPreview;

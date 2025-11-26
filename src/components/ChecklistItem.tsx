import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: "high" | "medium" | "low";
  checked: boolean;
  onToggle: (id: string) => void;
}

export const ChecklistItem = ({
  id,
  title,
  description,
  category,
  priority,
  checked,
  onToggle,
}: ChecklistItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const priorityColors = {
    high: "bg-destructive text-destructive-foreground",
    medium: "bg-warning text-background",
    low: "bg-muted text-muted-foreground",
  };

  return (
    <Card
      className={cn(
        "p-6 transition-all duration-300 cursor-pointer",
        "hover:scale-[1.02] hover:glow-primary",
        checked && "opacity-60 border-success"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onToggle(id)}
    >
      <div className="flex items-start gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={() => onToggle(id)}
          className="mt-1"
        />
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3
              className={cn(
                "text-lg font-semibold transition-colors",
                checked && "line-through text-muted-foreground"
              )}
            >
              {title}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <Badge className={priorityColors[priority]}>
                {priority}
              </Badge>
            </div>
          </div>
          <p
            className={cn(
              "text-sm text-muted-foreground transition-colors",
              checked && "line-through"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

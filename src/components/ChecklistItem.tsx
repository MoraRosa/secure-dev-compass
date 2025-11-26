import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Zap, AlertTriangle, Info } from "lucide-react";

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

  const priorityConfig = {
    high: {
      bg: "bg-destructive/20 border-destructive/50",
      text: "text-destructive",
      icon: AlertTriangle,
      glow: "hover:shadow-[0_0_30px_hsl(0,84%,60%,0.3)]",
    },
    medium: {
      bg: "bg-warning/20 border-warning/50",
      text: "text-warning",
      icon: Zap,
      glow: "hover:shadow-[0_0_30px_hsl(38,92%,50%,0.3)]",
    },
    low: {
      bg: "bg-accent/20 border-accent/50",
      text: "text-accent",
      icon: Info,
      glow: "hover:shadow-[0_0_30px_hsl(199,89%,48%,0.3)]",
    },
  };

  const config = priorityConfig[priority];
  const PriorityIcon = config.icon;

  return (
    <Card
      className={cn(
        "relative p-5 md:p-6 transition-all duration-300 cursor-pointer border-2",
        "gradient-card hover:gradient-card-hover",
        config.glow,
        checked && "opacity-50 border-success/50 shadow-[0_0_20px_hsl(142,76%,50%,0.2)]",
        !checked && "border-primary/20 hover:border-primary/40",
        isHovered && !checked && "scale-[1.02] shadow-card"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onToggle(id)}
    >
      {/* Corner accent */}
      <div className={cn(
        "absolute top-0 right-0 w-20 h-20 opacity-20 transition-opacity duration-300",
        isHovered && "opacity-40"
      )}>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-transparent rounded-bl-full"></div>
      </div>

      <div className="flex items-start gap-4 relative z-10">
        <div className={cn(
          "mt-1 transition-all duration-300",
          checked && "scale-110"
        )}>
          <Checkbox
            checked={checked}
            onCheckedChange={() => onToggle(id)}
            className={cn(
              "w-5 h-5 md:w-6 md:h-6 border-2",
              checked && "border-success bg-success"
            )}
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h3
              className={cn(
                "text-base md:text-lg font-bold transition-all duration-300",
                checked && "line-through text-muted-foreground",
                !checked && "text-foreground"
              )}
            >
              {title}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              <Badge 
                variant="outline" 
                className="text-xs border-primary/30 text-primary bg-primary/10"
              >
                {category}
              </Badge>
              <Badge className={cn(
                "text-xs font-bold uppercase tracking-wide flex items-center gap-1",
                config.bg,
                config.text
              )}>
                <PriorityIcon className="w-3 h-3" />
                {priority}
              </Badge>
            </div>
          </div>
          
          <p
            className={cn(
              "text-sm md:text-base text-muted-foreground transition-all duration-300",
              checked && "line-through opacity-60"
            )}
          >
            {description}
          </p>

          {/* Progress indicator */}
          {checked && (
            <div className="flex items-center gap-2 text-xs text-success animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="font-semibold">COMPLETED</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

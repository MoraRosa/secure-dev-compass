import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Target, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProgressStatsProps {
  total: number;
  completed: number;
  categories: {
    name: string;
    total: number;
    completed: number;
  }[];
}

export const ProgressStats = ({ total, completed, categories }: ProgressStatsProps) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const getRank = (percentage: number) => {
    if (percentage === 100) return { name: "LEGENDARY", color: "from-yellow-400 to-orange-500", icon: Trophy };
    if (percentage >= 75) return { name: "HERO", color: "from-primary to-secondary", icon: Zap };
    if (percentage >= 50) return { name: "CHAMPION", color: "from-accent to-primary", icon: Target };
    if (percentage >= 25) return { name: "WARRIOR", color: "from-secondary to-accent", icon: CheckCircle2 };
    return { name: "ROOKIE", color: "from-muted to-muted-foreground", icon: Circle };
  };

  const rank = getRank(percentage);
  const RankIcon = rank.icon;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Main Progress Card */}
      <Card className="relative p-5 md:p-6 gradient-card border-2 border-primary/30 overflow-hidden shadow-card">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-glow-pulse"></div>
        
        <div className="relative z-10 space-y-4 md:space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 md:p-3 rounded-lg gradient-primary glow-primary">
                <RankIcon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Overall Progress</h3>
                <Badge className={cn("text-xs font-bold bg-gradient-to-r", rank.color)}>
                  {rank.name}
                </Badge>
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
              {percentage}%
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={percentage} className="h-3 md:h-4" />
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div className="flex items-center gap-2 text-success font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{completed} SECURED</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-semibold">
                <Circle className="w-4 h-4" />
                <span>{total - completed} REMAINING</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Category Progress Card */}
      <Card className="p-5 md:p-6 gradient-card border-2 border-primary/20 shadow-card">
        <div className="space-y-4">
          <h3 className="text-base md:text-lg font-bold flex items-center gap-2">
            <Target className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Mission Progress
          </h3>
          <div className="space-y-3 md:space-y-4">
            {categories.map((cat) => {
              const catPercentage = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
              const isComplete = catPercentage === 100;
              
              return (
                <div 
                  key={cat.name} 
                  className={cn(
                    "space-y-2 p-3 rounded-lg border transition-all duration-300",
                    isComplete 
                      ? "bg-success/10 border-success/50 shadow-[0_0_15px_hsl(142,76%,50%,0.2)]" 
                      : "bg-card/50 border-border hover:border-primary/40"
                  )}
                >
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className={cn(
                      "font-bold",
                      isComplete && "text-success"
                    )}>
                      {cat.name}
                    </span>
                    <div className="flex items-center gap-2">
                      {isComplete && <CheckCircle2 className="w-4 h-4 text-success" />}
                      <span className={cn(
                        "font-mono font-bold",
                        isComplete ? "text-success" : "text-muted-foreground"
                      )}>
                        {cat.completed}/{cat.total}
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={catPercentage} 
                    className={cn(
                      "h-2",
                      isComplete && "bg-success/20"
                    )} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

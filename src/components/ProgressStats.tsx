import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Target } from "lucide-react";

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

  return (
    <div className="space-y-6">
      <Card className="p-6 gradient-card">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Overall Progress</h3>
            <div className="text-3xl font-bold text-primary">{percentage}%</div>
          </div>
          <Progress value={percentage} className="h-3" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>{completed} completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4" />
              <span>{total - completed} remaining</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Category Progress
          </h3>
          <div className="space-y-3">
            {categories.map((cat) => {
              const catPercentage = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
              return (
                <div key={cat.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{cat.name}</span>
                    <span className="text-muted-foreground">
                      {cat.completed}/{cat.total}
                    </span>
                  </div>
                  <Progress value={catPercentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

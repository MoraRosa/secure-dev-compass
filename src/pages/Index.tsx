import { useState, useEffect } from "react";
import { ChecklistItem } from "@/components/ChecklistItem";
import { ProgressStats } from "@/components/ProgressStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { checklistData, categories } from "@/data/checklistData";
import { Shield, Search, Filter, Github, FileText, Target, CheckCircle2 } from "lucide-react";

const Index = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("securedev-checklist");
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save checked items to localStorage
  useEffect(() => {
    localStorage.setItem("securedev-checklist", JSON.stringify([...checkedItems]));
  }, [checkedItems]);

  const handleToggle = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const filteredData = checklistData.filter((item) => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryStats = categories.map((cat) => {
    const categoryItems = checklistData.filter((item) => item.category === cat.name);
    const completed = categoryItems.filter((item) => checkedItems.has(item.id)).length;
    return {
      name: cat.name,
      total: categoryItems.length,
      completed,
    };
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 sticky top-0 bg-gradient-to-r from-background via-primary/5 to-background backdrop-blur-md z-10 glow-primary">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-primary glow-primary animate-pulse">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  SecureDev Checklist
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                  Enterprise security & compliance guide
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="text-xs md:text-sm border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">View on GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative border-b border-primary/20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-slide-up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
                Build Secure, Compliant
              </span>
              <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Enterprise Applications
              </span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An <span className="text-primary font-semibold">enterprise-grade</span> checklist covering security, compliance, privacy, and architecture best practices for building production-ready full-stack applications.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center pt-4">
              <Badge variant="outline" className="border-primary/50 text-primary text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
                <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                Security First
              </Badge>
              <Badge variant="outline" className="border-secondary/50 text-secondary text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
                <Target className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                Compliance Ready
              </Badge>
              <Badge variant="outline" className="border-accent/50 text-accent text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                Battle Tested
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <ProgressStats
              total={checklistData.length}
              completed={checkedItems.size}
              categories={categoryStats}
            />

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter by Category
              </h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.name}
                    variant={selectedCategory === cat.name ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          {/* Checklist */}
          <main className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search checklist items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Items */}
            <div className="space-y-4">
              {filteredData.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No items found matching your search.
                </div>
              ) : (
                filteredData.map((item) => (
                  <ChecklistItem
                    key={item.id}
                    {...item}
                    checked={checkedItems.has(item.id)}
                    onToggle={handleToggle}
                  />
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;

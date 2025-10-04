import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Future of IoT in Business Operations",
    excerpt: "Discover how Internet of Things technology is transforming modern business processes and creating new opportunities for efficiency.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "IoT",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt: "Learn the best practices and architectural patterns for creating web applications that can grow with your business.",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "Development",
  },
  {
    id: 3,
    title: "Custom Software vs. Off-the-Shelf Solutions",
    excerpt: "Understanding when to invest in custom software development and when pre-built solutions make more sense for your business.",
    date: "March 5, 2025",
    readTime: "6 min read",
    category: "Consulting",
  },
  {
    id: 4,
    title: "Digital Transformation: A Practical Guide",
    excerpt: "Step-by-step guidance on modernizing your business technology infrastructure without disrupting operations.",
    date: "February 28, 2025",
    readTime: "8 min read",
    category: "Strategy",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Insights & <span className="text-primary">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on technology, development, and digital transformation
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-lg transition-all hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-primary hover:text-primary group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;

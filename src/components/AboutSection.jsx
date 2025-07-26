import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Engineering Student & Passionate Builder
            </h3>

            <p className="text-muted-foreground">
             I’m Züleyha Akbaş, a Computer Engineering student focused on solving real-world
              problems through mobile, AI, and embedded systems projects. I enjoy using technology
               for social good, learning by doing, and building meaningful solutions.
            </p>

            <p className="text-muted-foreground">
              With the help of trainings and hands-on projects, I’ve gained experience in mobile
              development and testing. I’m a curious developer who thrives in teamwork and
              is passionate about creating things that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mobile Development</h4>
                  <p className="text-muted-foreground">
                    Building cross-platform mobile apps to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Exploration</h4>
                  <p className="text-muted-foreground">
                     Continuing my learning journey to develop impactful projects in the field of AI.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project & Collaboration</h4>
                  <p className="text-muted-foreground">
                   Improving teamwork and planning skills by actively contributing to real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
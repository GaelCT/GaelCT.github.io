import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate developer and designer who believes in the power of 
                simplicity. With over 5 years of experience, I specialize in creating 
                digital products that are both beautiful and functional.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design, 
                ensuring every project delivers an exceptional user experience while 
                maintaining clean, efficient code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                photography, or enjoying a good cup of coffee while sketching ideas 
                for the next project.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["React", "TypeScript", "Node.js", "Figma", "Tailwind CSS", "Motion"].map((skill) => (
                <span
                  key={skill}
                  className="bg-background border border-border px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745910020846-3d4d0088d24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3RvcHxlbnwxfHx8fDE3NTc4MzAyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Minimal workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
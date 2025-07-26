import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-8 text-center">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-center space-x-4 justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:zuleyhakbas04@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                 zuleyhakbas04@gmail.com
                </a>
              </div>
            </div>


            <div className="flex items-center space-x-4 justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">Düzce , Türkiye</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/z%C3%BCleyha-akba%C5%9F-b90026253/" target="_blank">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/ahyel__/" target="_blank">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

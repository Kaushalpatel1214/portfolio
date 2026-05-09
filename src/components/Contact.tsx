"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";
import data from "@/data/portfolio.json";
import { fadeIn } from "@/lib/motion";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "015e140f-c89d-4ea1-8977-4b27892020f2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
              LET'S BUILD <br /> SOMETHING <br />
              <span className="text-primary">AWESOME</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Email me at</p>
                  <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{data.personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Location</p>
                  <p className="text-lg font-bold text-white">{data.personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 p-10 rounded-[40px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/20"
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/20"
                    />
                  </div>
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/20"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none placeholder:text-white/20"
                  />
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary/80 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Message Sent!</h3>
                  <p className="text-white/50 max-w-[280px]">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

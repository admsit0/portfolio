import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import adamPortrait from '@/assets/adam-profile-cutout.webp';
import { useSectionNavigation } from '@/hooks/useSectionNavigation';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/admsit0', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/adam-maltoni', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com/@admsito17', icon: Youtube },
  { label: 'Email', href: 'mailto:adam.maltoni@gmail.com', icon: Mail },
];

const Hero = () => {
  const scrollToSection = useSectionNavigation();
  const reducedMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.09 } } }}
      >
        <motion.div className="hero-portrait" variants={reveal}>
          <img
            src={adamPortrait}
            alt="Adam Maltoni"
            width={640}
            height={671}
            fetchPriority="high"
            className="h-full w-full object-contain object-bottom"
          />
        </motion.div>

        <motion.h1
          className="hero-name text-4xl font-bold text-foreground md:text-6xl"
          variants={reveal}
        >
          Adam Maltoni
        </motion.h1>
        <motion.p
          className="hero-title text-xl font-semibold text-muted-foreground md:text-2xl"
          variants={reveal}
        >
          Data Scientist & AI Engineer
        </motion.p>
        <motion.p className="hero-summary" variants={reveal}>
          I build machine learning systems and cloud-native LLM applications.
          Based in Madrid, with experience at Accenture and GMV. I lead GDG on Campus UAM.
        </motion.p>

        <motion.div className="hero-social-pill" variants={reveal}>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Tooltip key={label} delayDuration={200}>
              <TooltipTrigger asChild>
                <motion.a
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="hero-social-link"
                  whileHover={reducedMotion ? undefined : { y: -3, scale: 1.08 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent side="top">{label}</TooltipContent>
            </Tooltip>
          ))}
        </motion.div>

        <motion.div className="hero-actions" variants={reveal}>
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary hero-action"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hero-action hero-action-secondary"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div className="hero-scroll" variants={reveal}>
          <button
            onClick={() => scrollToSection('about')}
            className="hero-scroll-arrow"
            aria-label="Scroll to About Me"
          >
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

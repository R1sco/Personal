// Re-export dengan named exports untuk menghindari "export *" di client boundary
import { 
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  Variants
} from 'framer-motion';

// Re-export values
export {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform
};

// Re-export types dengan 'export type'
export type { Variants };

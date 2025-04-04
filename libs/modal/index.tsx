import { ReactNode, use, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import Typography from '../Typography';
import { motion } from 'framer-motion';
import { useWindowSize } from '@/hooks/useWindowSize';
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  fullScreen?: boolean;
  className?: string;
  classNameChildren?: string;
  classNameContainer?: string;
  classNameTitle?: string;
  classNameHeader?: string;
  onKeyDown?: (e: KeyboardEvent) => void;
};

export default function Modal({
  open,
  onClose,
  children,
  className = '',
  classNameChildren = '',
  classNameTitle = '',
  classNameHeader = '',
  title,
  fullScreen,
  classNameContainer = '',
  onKeyDown,
}: ModalProps) {
  const { isBelowSm } = useWindowSize();
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      onKeyDown && onKeyDown(event);
    };

    open && window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [open]);

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [isBelowSm]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflowY = 'auto'; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflowY = 'auto'; // Cleanup on unmount
    };
  }, [open]);

  if (!open) return null;
  return (
    <motion.div
      autoFocus={open}
      className={`fixed z-[999] inset-0 flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.125, type: 'spring' }}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`bg-white rounded-lg z-10 relative ${fullScreen ? `w-dvh h-dvh` : ''
          } ${classNameContainer}`}
      >
        <div className={`relative flex justify-center ${classNameHeader}`}>
          {title && (
            <Typography
              variant="desc"
              className={`font-semibold !text-2xl ${classNameTitle} font-playfair`}
            >
              {title}
            </Typography>
          )}
          <button
            onClick={onClose}
            className={`absolute right-2 top-2 rounded-full  ${title
              ? 'bg-none text-white hover:bg-gray-100 hover:text-black'
              : 'bg-white text-black hover:bg-gray-300'
              } z-50`}
          >
            <BsX className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`md:px-16 xs:px-4 md:py-10 pb-5 ${title ? 'xs:pt-2' : 'xs:pt-7'
            } ${classNameChildren} h-full`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

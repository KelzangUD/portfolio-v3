import { motion, AnimatePresence } from "motion/react";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { X } from "../animate-ui/icons/x";

// Alert Dialog Component
const AlertDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between">
                <h6 className="text-secondary">Message Sent Successfully!</h6>
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="hover:cursor-pointer border border-gray-400 rounded-md"
                >
                  <X animateOnHover />
                </button>
              </div>
              <div className="my-6 md:my-10">
                <p className="font-bold">Awesome! Thanks for reaching out.</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="group/btn relative block px-6 py-2 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AlertDialog;

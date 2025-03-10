import React, { useState, useRef, useEffect, forwardRef } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { Smile } from 'lucide-react';

interface EmojiInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  error?: string;
  rows?: number;
}

const EmojiInput = forwardRef<HTMLTextAreaElement, EmojiInputProps>(
  (
    {
      value,
      onChange,
      onBlur,
      className = '',
      placeholder = 'Type a message...',
      name,
      id,
      error,
      rows = 3,
      ...rest
    },
    ref,
  ) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const emojiPickerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Merge the forwarded ref with our internal ref
    const handleRef = (element: HTMLTextAreaElement) => {
      // Update our internal ref
      (textareaRef as React.RefObject<HTMLTextAreaElement | null>).current =
        element;

      // Forward the ref if it exists
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        (ref as React.RefObject<HTMLTextAreaElement | null>).current = element;
      }
    };

    const handleEmojiSelect = (emojiData: EmojiClickData) => {
      onChange(value + emojiData.emoji);
      setShowEmojiPicker(false);

      // Focus the textarea after selecting an emoji
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    };

    const toggleEmojiPicker = (e: React.MouseEvent) => {
      e.preventDefault(); // Prevent form submission if inside a form
      setShowEmojiPicker(!showEmojiPicker);
    };

    // Close emoji picker when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          emojiPickerRef.current &&
          buttonRef.current &&
          !emojiPickerRef.current.contains(event.target as Node) &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setShowEmojiPicker(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    const [focus, setFocus] = useState(false);

    return (
      <div className="relative w-full">
        <div
          className={`flex ${
            focus ? 'border-khaki border-2' : ''
          } flex-col overflow-hidden border bg-white`}
        >
          <textarea
            ref={handleRef}
            value={value}
            onFocus={() => setFocus(true)}
            onBlurCapture={() => setFocus(false)}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full p-3 outline-none caret-khaki border-none resize-none ${className} `}
            placeholder={placeholder}
            name={name}
            id={id || name}
            onBlur={onBlur}
            rows={rows}
            {...rest}
          />
          <div className="flex justify-end border-none border-gray-100">
            <button
              ref={buttonRef}
              type="button"
              onClick={toggleEmojiPicker}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Smile size={20} />
            </button>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}

        {showEmojiPicker && (
          <div
            ref={emojiPickerRef}
            className="absolute right-0 mt-1 z-10 shadow-lg"
          >
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}
      </div>
    );
  },
);

EmojiInput.displayName = 'EmojiInput';

export default EmojiInput;

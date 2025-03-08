import React, { useState, useRef, ChangeEvent } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface EmojiInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (
    e:
      | ChangeEvent<HTMLTextAreaElement>
      | { target: { name: string; value: string } },
  ) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
}

interface EmojiObject {
  native: string;
  id: string;
  unified: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const EmojiInput: React.FC<EmojiInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder = 'Type your message...',
  rows = 3,
  className = '',
  disabled = false,
  required = false,
  maxLength,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleEmojiSelect = (emoji: EmojiObject) => {
    if (!inputRef.current) return;

    // Get current cursor position
    const startPos = inputRef.current.selectionStart || 0;
    const endPos = inputRef.current.selectionEnd || 0;

    // Check if adding the emoji would exceed maxLength
    if (
      maxLength &&
      value.length - (endPos - startPos) + emoji.native.length > maxLength
    ) {
      return;
    }

    // Insert emoji at cursor position
    const newValue =
      value.substring(0, startPos) +
      emoji.native +
      value.substring(endPos, value.length);

    // Create synthetic event with the correct structure
    const syntheticEvent = {
      target: {
        name,
        value: newValue,
      },
    };

    // Call the onChange handler with our synthetic event
    onChange(syntheticEvent);

    // Focus back on textarea after emoji insertion
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(
          startPos + emoji.native.length,
          startPos + emoji.native.length,
        );
      }
    }, 10);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // Close emoji picker when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (
      showEmojiPicker &&
      pickerRef.current &&
      !pickerRef.current.contains(e.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(e.target as Node)
    ) {
      setShowEmojiPicker(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showEmojiPicker]);

  return (
    <div className="relative">
      <textarea
        ref={inputRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full p-3 rounded-md ${
          disabled ? 'bg-gray-100' : ''
        } ${className}`}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
      />

      {!disabled && (
        <div className="absolute right-3 bottom-3 flex items-center">
          <button
            type="button"
            onClick={toggleEmojiPicker}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Insert emoji"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </button>
        </div>
      )}

      {showEmojiPicker && (
        <div ref={pickerRef} className="absolute right-0 bottom-12 z-10">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Picker
              data={data}
              onEmojiSelect={(emoji: EmojiObject) => {
                handleEmojiSelect(emoji);
                setShowEmojiPicker(false);
              }}
              theme="light"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiInput;

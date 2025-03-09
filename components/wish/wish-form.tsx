import { postComment } from '@/services/api';
import { Button } from '@/libs/Button';
import Typography from '@/libs/Typography';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import EmojiInput from '@/libs/Input/emoji-input';

const originalIcon = (
  <FaPaperPlane
    className="text-xs opacity-80 transition-all 
group-hover:translate-x-1 group-hover:-translate-y-1"
  />
);

const loadingIcon = (
  <FaSpinner className="text-xs opacity-80 transition-all animate-spin" />
);

interface FormState {
  author: string;
  message: string;
}

export default function WishForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const initialFormState: FormState = {
    author: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormState>(initialFormState);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await postComment(formData.author, formData.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsSubmitted(!isSubmitted);
      setFormData(initialFormState);
      toast.success('Thanks for give us wishes!', {
        hideProgressBar: true,
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  const handleChangeAuthorInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, author: event.target.value });
  };

  const handleChangeMessageInput = (value: string) => {
    setFormData({ ...formData, message: value });
  };
  return (
    <div
      className="flex items-center bg-white text-center flex-col mt-2 md:mt-10  w-full
    border-dashed border-[2px] border-secondary-cl p-4 rounded-md md:h-[480px] xs:h-[400px]"
    >
      <Typography className="font-semibold" variant="desc">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc tốt đẹp nhất đến đám cưới
        của chúng mình!
      </Typography>
      <Typography className="font-normal italic text-[14px]" variant="desc">
        -- Điền đầy đủ tên hoặc ghi chú để chúng mình biết rằng bạn là ai nhé!
        --
      </Typography>
      <form
        className="flex flex-col md:mt-10 xs:mt-2 w-full p-6 gap-3"
        onSubmit={submitForm}
      >
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChangeAuthorInput}
          placeholder="Nhập tên của bạn *"
          className="md:h-[3.5rem] xs:h-[3rem] border px-3 bg-white text-khaki focus:outline-none rounded-none"
          required
        />
        <EmojiInput
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChangeMessageInput}
          placeholder="Nhập lời nhắn của bạn..."
          className="border bg-white focus:outline-none rounded-none text-khaki caret-khaki"
        />
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            endIcon={isLoading ? loadingIcon : originalIcon}
          >
            Gửi lời chúc
          </Button>
        </div>
      </form>
    </div>
  );
}

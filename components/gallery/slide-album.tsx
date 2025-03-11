'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface InjectedProps {
  isBelowSm?: boolean;
  isBelowMd?: boolean;
  isBelowLg?: boolean;
}

interface Props extends InjectedProps {
  items: string[] | StaticImport[];
  selected: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (item: number, ...arg: any[]) => any;
}

class SlideAlbum extends React.Component<Props> {
  nextImage: NodeJS.Timeout | null;
  constructor(props: Props) {
    super(props);
    this.nextImage = null;
  }

  selectImage = (index: number) => {
    this.props.onSelect(index);
  };

  componentDidMount(): void {
    this.nextImage = setInterval(() => {
      const nextIndex = (this.props.selected + 1) % this.props.items.length;
      this.props.onSelect(nextIndex);
    }, 10000);
  }

  componentDidUpdate(): void {
    const element = document.getElementById(`item-${this.props.selected}`);
    const elementStart = element?.offsetLeft ?? 0;
    const elementWidth = element?.offsetWidth ?? 0;
    const wrapper = document.getElementById('album-wrapper');
    // const wrapperWidth = wrapper?.clientWidth ?? 0;
    wrapper?.scrollTo({
      top: 0,
      left: elementStart - elementWidth * (this.props.isBelowMd ? 2 : 6),
      behavior: 'smooth',
    });
  }

  componentWillUnmount(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.nextImage && clearInterval(this.nextImage);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    if (this.props.selected !== nextProps.selected) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.nextImage && clearInterval(this.nextImage);

      // reset next image interval
      this.nextImage = setInterval(() => {
        const nextIndex = (nextProps.selected + 1) % this.props.items.length;
        this.props.onSelect(nextIndex);
      }, 10000);

      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    return (
      <div className="group overflow-hidden relative rounded-md lg:rounded-2xl bg-white min-h-fit">
        <div
          id="album-wrapper"
          autoFocus
          className={`flex flex-row transition-all duration-200 overflow-x-auto overflow-y-hidden snap-x min-h-fit`}
        >
          {this.props.items.map((s, index) => (
            <div
              id={`item-${index}`}
              key={index}
              className={`snap-center min-w-[20%] md:max-w-[8%] md:min-w-[8%] lg:px-3 px-1 flex justify-center items-center py-2 gap-5`}
            >
              <Image
                onClick={() => {
                  this.selectImage(index);
                }}
                src={s}
                alt=""
                quality={25}
                className={`h-full w-fit object-center object-cover rounded-md lg:rounded-2xl
                            transition-all duration-500 ${index === this.props.selected
                    ? 'opacity-100 scale-105'
                    : 'opacity-50'
                  } 
                            cursor-pointer hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// HOC
function withHook<T extends Props>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: Omit<T, keyof InjectedProps>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { windowSize, ...value } = useWindowSize();
    return <Component {...(props as T)} {...value} />;
  };
}

export default withHook(SlideAlbum);

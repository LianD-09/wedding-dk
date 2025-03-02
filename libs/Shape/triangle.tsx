import { ShapeProps } from '@/types/props.types';
import React from 'react';

interface TriangleProps extends ShapeProps {
  type: 'ltb' | 'rtb' | 'ltt' | 'rtt';
}
export const Triangle = ({
  className,
  children,
  type
}: TriangleProps) => {
  switch (type) {
    case 'ltb':
      return (
        <div className={`border-solid border-transparent border-b-[10vw] border-r-[100vw] border-b-white ${className}`} />
      );
    case 'ltt':
      return (
        <div className={`border-solid border-transparent border-t-[10vw] border-r-[100vw] border-t-white ${className}`} />
      );
    case 'rtb':
      return (
        <div className={`border-solid border-transparent border-b-[10vw] border-l-[100vw] border-b-white ${className}`} />
      );
    case 'rtt':
      return (
        <div className={`border-solid border-transparent border-t-[10vw] border-l-[100vw] border-t-white ${className}`} />
      );
    default:
      return null;
  }
};
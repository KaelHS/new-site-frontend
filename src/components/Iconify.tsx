// icons
import { Icon, IconifyIcon } from '@iconify/react';
import { twMerge } from 'tailwind-merge'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconifyIcon | string;
}

export default function Iconify({ icon, ...other }: Props) {
  return <div {...other}>
    <Icon icon={icon} />
  </div>;
}
import Image from 'next/image';
import './style.scss'

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src="/logo.svg"
        alt="Logo TribuZen"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

// app/modulo1/page.tsx
import dynamic from 'next/dynamic';

const Modulo1 = dynamic(() => import('../../../modules/modulo1/src/app/page')); 

export default function Modulo1Page() {
  return <Modulo1 />;
}

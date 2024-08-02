// app/modulo1/page.tsx
import dynamic from 'next/dynamic';

const Modulo2= dynamic(() => import('../../../modules/modulo2/src/app/page')); 

export default function Modulo1Page() {
  return <Modulo2 />;
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';


export default function NotFound() {
    const searchParams = useSearchParams();

    const search = searchParams.get('search');
  
    return (
      <div className='h-screen text-4xl text-center py-7'>
        <p>Aucun navire trouvé sous ce nom.</p>
      </div>
    );
}

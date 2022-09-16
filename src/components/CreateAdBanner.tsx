import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='flex justify-between items-center bg-[#2A2634] px-8 py-6'>
        <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou seu dou?</strong>
          <span className='text-zinc-400'>Publique  um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='py-3 px-4 hover:bg-violet-600 bg-violet-500 text-white rounded flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}

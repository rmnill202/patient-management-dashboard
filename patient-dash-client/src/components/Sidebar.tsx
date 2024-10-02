import { Drawer } from 'vaul';

const Sidebar = () => {
  return (
    <div>Sidebar</div>
    // <Drawer.Root direction="right">
    //   <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
    //     Open Drawer
    //   </Drawer.Trigger>
    //   <Drawer.Portal>
    //     <Drawer.Overlay className="fixed inset-0 bg-black/40" />
    //     <Drawer.Content className="right-0 top-0 bottom-0 fixed z-10 flex outline-none">
    //       <div className="bg-zinc-50 rounded-[16px] w-[310px] grow mt-2 mr-2 mb-2 p-5 flex flex-col">
    //         <div className="max-w-md mx-auto">
    //           <Drawer.Title className="font-medium mb-2 text-zinc-900">It supports all directions.</Drawer.Title>
    //           <Drawer.Description className="text-zinc-600 mb-2">
    //             This one specifically is not touching the edge of the screen, but that&apos;s not required for a side drawer.
    //           </Drawer.Description>
    //         </div>
    //       </div>
    //     </Drawer.Content>
    //   </Drawer.Portal>
    // </Drawer.Root>
  );
}

export default Sidebar;
"use client"
import * as Tabs from "@radix-ui/react-tabs"
import { Button } from "@headlessui/react"
import { useState } from "react"
import Modal from "@/components/tailwind-ui/Modal"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="p-8">
      <h2 className="text-4xl mb-4">Modal</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 border border-slate-300 p-4 rounded">
          <h3 className="text-2xl mb-4">Interactive component</h3>
          <hr />
          <Button
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Deactivate account
          </Button>
        </div>
        <div className="col-span-2 border border-slate-300 p-4 rounded">
          <h3 className="text-2xl mb-4">Accessibility tree</h3>
          <hr />
          <Tabs.Root
            className="flex flex-col"
            defaultValue="tab1"
          >
            <Tabs.List
              className="flex shrink-0 border-b border-mauve6"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
                value="tab1"
              >
                Modal closed
              </Tabs.Trigger>
              <Tabs.Trigger
                className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
                value="tab2"
              >
                Modal open
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow rounded-b-md p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab1"
            >
              <img className="h-[50vh]" src="https://mermaid.ink/svg/pako:eNp9UTFuwzAM_IrA2RnqUUOGwkCnTu1UKwMjsbZRizQUqUAQ5O-RLcR2l2rh3elwJMgbWHEEGrqAU68-G8Mqv0Zs8sRRHQ5H9SruWuQZLdJbkDS9FLHgTa53cl0CUozChv9mt09w2sLb0kEFGUkrFqbTvkm7lPW_m9neUP9jKEO0payO80IrxegzawhtHH4xkkJrJXGslBsueB7JafWN42WeByrwFDwOLu_tNqcbiD15MqAzdBh-DBi-Zx-mKB9XtqBjSFRBnqfrQS9JFaTJ5VbNgHn5flUn5C-RjZMbooT3cqblWvcHRJKQVg
" />
            </Tabs.Content>
            <Tabs.Content
              className="grow rounded-b-md p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab2"
            >
              <img src="https://mermaid.ink/svg/pako:eNqVVclu2zAQ_ZUBz3aA5qhDiyRGkxwKBK1PrXoYkxOLCMURKCqpEeTfy0WWZEduXF04y-Ms5BvqVUhWJAqxddhUsF6VFsK3YtnVZP2vUuzFUvzOvmtWu2CPCyzBsaECLFsaALeOu-ZTgCRhwGyjNkbpvGcbUVkaYJukLsBiHbQVofT6GT0BSsmd9QtQusWNIVXAI5p2zPvAzqP5zhzLzgpEbQB8Da20tx069Y-86DQuK60U2QK868b4K42Gt_FIkjDsVEntd9as0OSNp3s4CnmN8kk5bmJRvXhwsh8XdcPW5-vqpfmbyeAHtGTiEcV1Hngv2QZEXOYBd4RK23gYvTTAqqyf0zy10unG65RrTX_8Udcy91LAlSPYcQdt1wsvGFr0DGqMHsxun-ILXBkD_JiNCj3Ciw6WDUFDrg59W2924KjmZ1IXsK50CzFSaFeitewjtLMqlHExqXefLFPnfO4OIW7QSjLnbc_YGfJe_i95D2calsvPaYjHcU6mPLbTEc7IPKhH4HHWjmcvuSeTNuvPRJyScmLez8AJd8_wGfpPQInb70ifAJHU856eyvPOCVtPAQ7pMY-aMuCDo7ssrViIOhJWq_BEv0Z8KXxFdbjXIogK3VMpSvsWcNh5_rGzUhTp7RHhBreVKNITuRBdE6aAQjHhna_3kAbtT-Z6AJHSnt23_ENI_4W3v774Cp8" />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
    </main>
  )
}




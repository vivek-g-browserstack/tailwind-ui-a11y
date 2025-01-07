"use client"
import * as Tabs from "@radix-ui/react-tabs"
import { Button } from "@headlessui/react"
import { useEffect, useState } from "react"
import Modal from "@/components/tailwind-ui/Modal"
import mermaid from "mermaid"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleClick() {
    mermaid.contentLoaded()
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <main className="p-8">
      <p className="mb-8 mx-auto text-center rounded-full bg-slate-200 w-fit px-4 py-2">Each node in the accessibility tree typically has four aspects: Name | Role | State | Value</p>
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
              <div className="mermaid">
                {`
                graph TD
    Document["Document | Role=document"]
    Body["Body | Role=none"]
    Group1["Group | Role=group"]
    Button1["Button | Role=button | Name=Deactivate account | Disabled=false"]

    Document --> Body
    Body --> Group1
    Group1 --> Button1
`}
              </div>
            </Tabs.Content>
            <Tabs.Content
              className="grow rounded-b-md p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab2"
            >
              <div className="mermaid">
                {`
                graph TD
    Document["Document | Role=document"]
    Body["Body | Role=none"]
    Group1["Group | Role=group"]
    Button1["Button | Role=button | Name=Deactivate account | Disabled=false"]
    PortalRoot["Portal Root | Role=none"]
    FocusGuard1["Focus Guard | Role=button | Aria-hidden=true"]
    Dialog["Dialog | Role=dialog | Name=Deactivate account | Aria-modal=true"]
    DialogBackdrop["Backdrop | Role=none | Aria-hidden=true"]
    DialogContent["Content | Role=none"]
    DialogPanel["Panel | Role=none"]
    Icon["Icon | Role=none"]
    Heading["Heading | Role=heading | Name=Deactivate account"]
    Description["Description | Role=none | Content=Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."]
    DeactivateButton["Button | Role=button | Name=Deactivate"]
    CancelButton["Button | Role=button | Name=Cancel"]
    FocusGuard2["Focus Guard | Role=button | Aria-hidden=true"]

    Document --> Body
    Body --> Group1
    Group1 --> Button1
    Body --> PortalRoot
    PortalRoot --> FocusGuard1
    PortalRoot --> Dialog
    Dialog --> DialogBackdrop
    Dialog --> DialogContent
    DialogContent --> DialogPanel
    DialogPanel --> Icon
    DialogPanel --> Heading
    DialogPanel --> Description
    DialogPanel --> DeactivateButton
    DialogPanel --> CancelButton
    PortalRoot --> FocusGuard2

`}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
    </main>
  )
}




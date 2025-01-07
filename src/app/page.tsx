"use client"
import * as Tabs from "@radix-ui/react-tabs"
import { Button } from "@headlessui/react"
import { useState } from "react"
import Modal from "@/components/tailwind-ui/Modal"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="p-8">
      <p className="mb-8 mx-auto text-center rounded-full bg-slate-200 w-fit px-4 py-2">Each node in the accessibility tree has four aspects: Name | Role | State | Value</p>
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
              <img className="h-[50vh]" src="https://mermaid.ink/svg/pako:eNpVkbFuxCAMhl8Fec4NXSOlwwmpUzu0nVo6-MBNUAOOODjpdL13L4FyaVnwbz7ZP_YFNBuCHsaAyyRepfIiH8k6OfLxXUELxbd45pkG86sVfFR2z-acufVqjGdPt_eHwGm5y0QJGjKuYquRYmS_QjVq1KGpJ3Q0SEId7QkjCdSaUzEl7REPM5nhE-dj7fr_D2K3uy8mN7slVX399VjJakV56MBRcGhNHs9l5RTEiVzu0efQYPhSoPw1c5giv5y9hj6GRB3kauMEfXHUQVpMtiwt5hm7W3ZB_8a8aTI2cnis2yhLuf4ALOCJmg" />
            </Tabs.Content>
            <Tabs.Content
              className="grow rounded-b-md p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab2"
            >
              <img src="https://mermaid.ink/svg/pako:eNqdVU1v2zAM_SuCzkmB9RjAG9IG7XbYUHQ9bd6BkdhYqCwastQi6Prfpw87dlMFLZaLSPGFIqn3rGcuSCJf8Z2FrmF3m9qw8NuQ8C0a97vmo8n-slvSWMnBr_mfjL0guQ-4uIwYQwYP8WtLvvsUEMkYIbvoTDm8c2QiKFsjajt6P6DFaoMgnHoEhwyEIJ-K2qgethpldQ-6n069IetA3xLFHrLDolcs8Sr01F97sDKWkDyW3Dd1rK2CZaOkRFM566cUGwWadnFeyThMa_RON5BStiRBlzJegHiQlro4msGct_B-SZdkXL7JwSpOIGNvwKCO84prEfdNkAmAuBTjXxGkMnEOgzWimoN7YhJTKdgLqzqn0kkz76jvoZ1qbZHtybPeD8YThCYdMTmdEbbteNAXttaa0X3elOCAPamws0XWoW1D68bpPbPY0iPKM3bXqJ7FTKECAcYEDgWoNzKUcTarejwsM_jDVD5kuAQjUH_o3xlaoO_5_9D3teTZcvk5aXpSd9rKMp5LOiOzco_Ak_qO1ZjCM70V45mNc2bOtkcZnAgPtChIYAZKBH_D_ASI1C5HBkaXgzOengK8JkgZNSfBO6M7rw1f8DZSVsnwBX-O-Jq7Bttwr6tgSrAPNa_NS8CBd_RzbwRfxXtf8HCDu4av0kdzwX0XdIChmPAMtIfdDswvoslHqRzZ7_nBSO_Gyz_tlx5J" />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
    </main>
  )
}




import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { MouseEventHandler } from "react"
  
  type Props = {
    onMenuClick: (type: "bio" | "experience" | "about") => void
  }
  
  export function CustomMenubar({ onMenuClick }: Props) {
    return (
      <Menubar className="relative flex justify-center space-x-6 bg-black p-4 shadow-lg">
        {/* BIO */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <button
              onClick={() => onMenuClick("bio")}
              className="
                cursor-pointer px-6 py-3 text-xl font-bold text-white 
                transition-colors hover:bg-neutral-800 hover:text-gray-300 
                rounded-md
              "
            >
              Bio
            </button>
          </MenubarTrigger>
        </MenubarMenu>
  
        {/* EXPERIENCE */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <button
              onClick={() => onMenuClick("experience")}
              className="
                cursor-pointer px-6 py-3 text-xl font-bold text-white 
                transition-colors hover:bg-neutral-800 hover:text-gray-300
                rounded-md
              "
            >
              Experience
            </button>
          </MenubarTrigger>
        </MenubarMenu>
  
        {/* ABOUT ME */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <button
              onClick={() => onMenuClick("about")}
              className="
                cursor-pointer px-6 py-3 text-xl font-bold text-white 
                transition-colors hover:bg-neutral-800 hover:text-gray-300
                rounded-md
              "
            >
              About Me
            </button>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
  }
  
"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Import the shadcn dialog components:
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type BioCardsProps = {
  openDialog: "bio" | "experience" | "about" | null
  setOpenDialog: React.Dispatch<
    React.SetStateAction<"bio" | "experience" | "about" | null>
  >
}

// Absolute URL to your GitHub Pages site with /personal-project
const BASE_URL = "https://mohamadref.github.io/personal-project"

function ProfilePhoto() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 overflow-hidden rounded-full shadow-md ring-4 ring-neutral-800">
      <img
        src={`${BASE_URL}/pfp.jpg`}
        alt="Profile"
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  )
}

export function BioCards({ openDialog, setOpenDialog }: BioCardsProps) {
  return (
    <section
      id="bio"
      className="min-h-screen w-full bg-transparent py-10 px-4 text-neutral-100"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title / Introduction */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-sm">
            About Me
          </h1>
          <p className="mt-2 text-lg text-neutral-400 tracking-wide">
            A quick glance into who I am and what I do.
          </p>
        </div>

        {/* Profile / Personal Info */}
        <div className="mb-12 flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
          <ProfilePhoto />
          <div className="mt-6 sm:mt-0 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-wide drop-shadow-sm">
              Mohamad Refaai
            </h2>
            <p className="mt-2 max-w-md text-lg text-neutral-300 tracking-wide">
              I’m a passionate developer who loves crafting elegant solutions.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Personal Info */}
          <Card
            className="
              w-full bg-black/50 backdrop-blur-md text-neutral-200 shadow-md
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
            "
          >
            <CardHeader className="border-b border-neutral-800 p-4">
              <CardTitle className="text-lg font-bold tracking-wide">
                Personal Info
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base leading-relaxed">
              I&apos;m a passionate developer with a love for crafting elegant
              solutions. I come from a diverse background—Russian, Syrian, and
              raised in Saudi Arabia.
            </CardContent>
          </Card>

          {/* Card 2: Background */}
          <Card
            className="
              w-full bg-black/50 backdrop-blur-md text-neutral-200 shadow-md
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
            "
          >
            <CardHeader className="border-b border-neutral-800 p-4">
              <CardTitle className="text-lg font-bold tracking-wide">
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base leading-relaxed">
              I’ve been fascinated by computer science since I was 11. Hours
              spent exploring websites sparked my curiosity, leading me to dive
              into HTML, web development, and robotics. This blend of digital
              creation and hands-on engineering has shaped my exciting journey
              in tech.
            </CardContent>
          </Card>

          {/* Card 3: Interests */}
          <Card
            className="
              w-full bg-black/50 backdrop-blur-md text-neutral-200 shadow-md
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
            "
          >
            <CardHeader className="border-b border-neutral-800 p-4">
              <CardTitle className="text-lg font-bold tracking-wide">
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base leading-relaxed">
              I enjoy exploring new technologies, tackling challenging
              problems, and continuously learning. Whether it&apos;s web
              development or robotics, I&apos;m always eager to expand my skill
              set.
            </CardContent>
          </Card>
        </div>

        {/* Additional Section: Projects, Skills, etc. */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Projects & Skills */}
          <Card
            className="
              bg-black/50 backdrop-blur-md text-neutral-200 shadow-md
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
            "
          >
            <CardHeader className="border-b border-neutral-800 p-4">
              <CardTitle className="text-lg font-bold tracking-wide">
                Projects &amp; Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base leading-relaxed">
              <p>
                <strong>Languages &amp; Frameworks:</strong> C, C++, JavaScript,
                TypeScript, React, Next.js, Node.js, Tailwind CSS, Express.js.
              </p>
              <p className="mt-3">
                <strong>Recent Projects:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  <a
                    href="https://github.com/MohamadRef/CoinSorter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Coin Sorter
                  </a>
                  : A simulation of a coin sorting machine.
                </li>
                <li>
                  <a
                    href="https://github.com/MohamadRef/Dynamic-Data-Processing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Dynamic Data Processing
                  </a>
                  : Implements various algorithms and data structures for
                  efficient data analysis.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact & Links */}
          <Card
            className="
              bg-black/50 backdrop-blur-md text-neutral-200 shadow-md
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
            "
          >
            <CardHeader className="border-b border-neutral-800 p-4">
              <CardTitle className="text-lg font-bold tracking-wide">
                Contact &amp; Links
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base leading-relaxed">
              <p className="mb-2">Connect with me on:</p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohamadrefaai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    <img
                      src={`${BASE_URL}/Linkedin.webp`}
                      alt="LinkedIn Icon"
                      className="w-5 h-5"
                    />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MohamadRef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    <img
                      src={`${BASE_URL}/Github.png`}
                      alt="GitHub Icon"
                      className="w-5 h-5"
                    />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
              <p className="mt-4">
                <a
                  href={`${BASE_URL}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Download My Resume
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 
        Dark-themed dialogs using shadcn. 
        Their semi-transparent, blurred background now reflects the page’s transparency.
      */}
      <Dialog
        open={openDialog === "bio"}
        onOpenChange={(open) => !open && setOpenDialog(null)}
      >
        <DialogContent className="bg-black/50 backdrop-blur-md text-neutral-100 border border-neutral-800 shadow-xl sm:max-w-md sm:rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-wide">
              Bio
            </DialogTitle>
            <DialogDescription className="mt-4 text-base leading-relaxed">
              I’m a passionate developer with a love for crafting elegant
              solutions. I come from a diverse background—Russian, Syrian, and
              raised in Saudi Arabia.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialog === "experience"}
        onOpenChange={(open) => !open && setOpenDialog(null)}
      >
        <DialogContent className="bg-black/50 backdrop-blur-md text-neutral-100 border border-neutral-800 shadow-xl sm:max-w-md sm:rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-wide">
              Experience
            </DialogTitle>
            <DialogDescription className="mt-4 text-base leading-relaxed">
              Languages &amp; Frameworks: C, C++, JavaScript, TypeScript, React,
              Next.js, Node.js, Tailwind CSS, Express.js.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialog === "about"}
        onOpenChange={(open) => !open && setOpenDialog(null)}
      >
        <DialogContent className="bg-black/50 backdrop-blur-md text-neutral-100 border border-neutral-800 shadow-xl sm:max-w-md sm:rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-wide">
              About Me
            </DialogTitle>
            <DialogDescription className="mt-4 text-base leading-relaxed">
              I enjoy exploring new technologies, tackling challenging
              problems, and continuously learning. Whether it’s web development
              or robotics, I’m always eager to expand my skill set.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
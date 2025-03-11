"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function ImageCarousel() {
  // Array of image paths
  const images = [
    "/pfp.jpg",
    "/IMG_1272.jpg",
    "/IMG_1799.jpg"
  ]

  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
} 
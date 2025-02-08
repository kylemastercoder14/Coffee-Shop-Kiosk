"use client";

import Heading from "@/components/globals/heading";
import StatCard from "@/components/globals/stat-card";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import React from "react";

const Dashboard = () => {
  const user = "Kyle Andre Lim";
  return (
    <div>
      <Heading userName={user} />
      <div className="grid grid-cols-3 gap-3 mt-2">
        <StatCard title="Total Menus" data="42" />
        <StatCard title="Total Sales" data="₱12.8K" />
        <StatCard title="Customers" data="₱2.2K" />
      </div>
      <Carousel
        className="w-full mt-5"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square rounded-lg items-center relative w-full h-full justify-center p-0">
                  <Image
                    src="/banners/banner1.jfif"
                    alt="Banner1"
                    fill
                    className="w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square rounded-lg items-center relative w-full h-full justify-center p-0">
                  <Image
                    src="/banners/banner2.jfif"
                    alt="Banner2"
                    fill
                    className="w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square rounded-lg items-center relative w-full h-full justify-center p-0">
                  <Image
                    src="/banners/banner3.jfif"
                    alt="Banner3"
                    fill
                    className="w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square rounded-lg items-center relative w-full h-full justify-center p-0">
                  <Image
                    src="/banners/banner4.jfif"
                    alt="Banner4"
                    fill
                    className="w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square rounded-lg items-center relative w-full h-full justify-center p-0">
                  <Image
                    src="/banners/banner5.jfif"
                    alt="Banner5"
                    fill
                    className="w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Dashboard;

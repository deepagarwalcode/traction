"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";
import {
  IconBrandCodepen,
  IconBrandZapier,
  IconChartDots3,
  IconProgress,
  IconWebhook,
} from "@tabler/icons-react";
import React, { ReactNode } from "react";

interface IService {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: IService[] = [
  {
    icon: <IconBrandZapier className="h-10 w-10" />,
    title: "Implementation of enterprise-grade sending IPs",
    description:
      "We install our own email infrastructure into your campaigns so you can maximise deliverability, we use multiple vendors to ensure we are always inboxing.",
  },
  {
    icon: <IconBrandCodepen className="h-10 w-10" />,
    title: "AI-Driven Prospecting",
    description:
      "We use the latest AI models to nail our prospecting model ensuring every lead is on-target and we maximise the necessary knowledge on each prospect, integrating triggers and hiring signals.",
  },
  {
    icon: <IconChartDots3 className="h-10 w-10" />,
    title: "Scaled Email Sending",
    description:
      "We use the most advanced sending tools which gives us full control over our sending cadence. We send up to 4k emails per day and average a 0.8% positive response rate.",
  },
];

const ServiceCard = ({ service }: { service: IService }) => (
  <CardSpotlight className="bg-dark_secondary/40 border-gray-800 pr-8">
    <div className="flex flex-col gap-8">
      <div className="z-[20] bg-gradient-to-r from-primary to-dark_primary text-white h-20 w-20 flex items-center justify-center rounded-full">
        {service.icon}
      </div>
      <p className="text-4xl font-bold z-20">{service.title}</p>
      <p className="z-20 text-xl font-medium">{service.description}</p>
    </div>
  </CardSpotlight>
);

export function Services() {
  return (
    <div className="py-[10vh]" id="services">
      <div className="flex items-center gap-3 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-3 px-8 rounded-sm mx-auto mb-4">
        {/* <div className="h-3 w-3 bg-primary rounded-full "></div> */}
        <p className="text-base font-semibold">PROBLEMS WE SOLVE</p>
      </div>
      <h2 className=" text-center mb-8 lg:mb-12 text-4xl lg:text-8xl font-extrabold">
        Our Service
        {/* <div className="absolute h-2 lg:h-[10px] right-0 bg-primary w-full rounded-sm"></div> */}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[92vw] md:w-[80vw] gap-4 md:gap-8 mx-auto">
        {services.map((service, i) => (
          <ServiceCard service={service} key={i} />
        ))}
      </div>
    </div>
  );
}

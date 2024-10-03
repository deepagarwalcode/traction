"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";
import {
  IconBrandZapier,
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
    title: "Manual Tasks are reducing my team's efficiency",
    description:
      "We implement the latest and best outreach tech stack so that your team can focus on generating revenue.",
  },
  {
    icon: <IconWebhook className="h-10 w-10" />,
    title: "None of our GTM channels talk to each other",
    description:
      "We synchronize your outreach channels with custom automations to improve your go to market performance.",
  },
  {
    icon: <IconProgress className="h-10 w-10" />,
    title: "Leads flow into our CRM just to collect dust",
    description:
      "The leads sitting in your CRM need to be re-targeted and segmented. It's not outbound vs inbound, it should be a combination of both. ",
  },
];

const ServiceCard = ({ service }: { service: IService }) => (
  <CardSpotlight className="bg-dark_secondary/40 border-gray-800">
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
        Services
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

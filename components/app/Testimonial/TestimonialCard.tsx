import Image from "next/image";
import React from "react";

const TestimonialCard = ({ data }: { data: any }) => {
  return (
    <div className="p-8 pb-10 w-[32vw] bg-dark_secondary border-[1px] border-gray-700 rounded-md mr-[2vw]">
        <div className="flex items-center gap-4">
            <Image 
                width={500}
                height={500}
                src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="founder"
                className="h-20 w-20 rounded-full object-cover"
            />
            <div>
                <p className="text-xl font-bold">Aaron Reid</p>
                <p className="text-gray-400 font-semibold mt-1">Founder & CEO, Traction</p>
            </div>
        </div>
        <p className="text-lg mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt maxime ducimus, amet inventore culpa ad cum repudiandae fugit itaque.</p>
    </div>
  );
};

export default TestimonialCard;

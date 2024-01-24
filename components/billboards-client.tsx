"use client"

import { Heading } from "./ui/heading";

const BillboardsClient = () => {
    return (
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <Heading
            title="Billboard"
            description="This here is a billboard" />
        </div>
      </div>
    );
  }
  
  export default BillboardsClient
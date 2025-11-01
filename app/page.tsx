import Image from "next/image";
import Header from "@/component/header";
import Forwardandbeyond from "@/component/forward&beyond";
import ConditionalLogic from "@/component/conditionalLogic";
import WorkflowLogic from "@/component/workflowLogic";
import Integrations from "@/component/Integrations";

export default function Home() {
  return (
   <div>
    <Header />
    <Forwardandbeyond />
    <ConditionalLogic />
    <WorkflowLogic />
    <Integrations />
  
   </div>
  );
}

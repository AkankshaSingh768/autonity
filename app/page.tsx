import Image from "next/image";
import Header from "@/component/header";
import Forwardandbeyond from "@/component/forward&beyond";
import ConditionalLogic from "@/component/conditionalLogic";
import WorkflowLogic from "@/component/workflowLogic";
import Integrations from "@/component/Integrations";
import RealImpact from "@/component/realImpact";
import Movefaster from "@/component/movefaster";
import Footer from "@/component/footer";

export default function Home() {
  return (
   <div>
    <Header />
    <Forwardandbeyond />
    <ConditionalLogic />
    <WorkflowLogic />
    <Integrations />
    <RealImpact />
    <Movefaster />
    <Footer />
  
   </div>
  );
}

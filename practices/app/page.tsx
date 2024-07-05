
import Link from "next/link";
import { Button } from "./_components/buttons/button";
import { ETheme } from "./enum/enumdata";

export default function Home() {
  return (
    <>
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/inputs'}>Go to inputs page<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/buttons'}>Go to buttons page<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/'}>Go to dropdown search page<br/>(On progress, coming soon)</Link></Button>
     
      
    </>
    
    
  );
}

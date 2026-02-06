
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

type MainTemplateProps = {
    children: React.ReactNode;
};

export function MainTemplate({children}: MainTemplateProps){
    return(
    <>
    
    <div className='bg-foreground dark:bg-background'>
    <Container>
      <Logo></Logo>
    </Container>

    <Container>
      <Menu></Menu>
    </Container>

         {children}
   <Container>
    <Footer></Footer>
   </Container>
    

    </div>
   
    </>
    )
};
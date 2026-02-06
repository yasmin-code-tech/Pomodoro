import { CountDown } from "../../components/CountDown.tsx";
import { MainTemplate } from "../../components/MainTemplate.tsx";
import {MainForm} from "../../components/MainForm.tsx"
import { Container } from "../../components/Container.tsx";
import { DefaultButton } from "../../components/DefaultButton.tsx";
import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../components/Cycles.tsx";
export function Home(){
    return(
        <>
            <MainTemplate>
                <Container>
                    <CountDown></CountDown>
                </Container>

                <Container>
                    <MainForm></MainForm>
                </Container>

                <Container>
                    <Cycles></Cycles>
                </Container>

                <Container>
                    <DefaultButton className="text-background" variant="blue" icon={<PlayCircleIcon/>}>
                    </DefaultButton>
                </Container>
                
            </MainTemplate>
            
        </>
    )
}
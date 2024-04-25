"use client"
import { useRouter } from "next/navigation";
interface LoginButtonProps{
    children:React.ReactNode;
    mode?:"modal"|"redirected";
    asChild?:boolean;
};

export const LoginButton=({
    children,
    mode="redirected",
    asChild,
}:LoginButtonProps)=>{
    const router=useRouter();
    const onClick=()=>{
        router.push("/auth/login")
        console.log("LOGIN BUTTON CLICKED")
    }

    if(mode==="modal"){
        return(
            <span>
                TO DO:IMPLEMENT MODAL
            </span>
        )
    }
    return (
        <span onClick={onClick} >
            {children}
        </span>
    )
}
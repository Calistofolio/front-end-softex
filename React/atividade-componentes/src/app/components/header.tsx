"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Header(){
    const[liContent, setliContent] = useState("https://i.pinimg.com/564x/31/4a/06/314a066ca571535e580e7649b8f25e65.jpg")

    const liChangeHandler = () =>{    
        const inputText = document.querySelector("#liContent")  as HTMLInputElement
        if(!inputText) return;
        const imageValue: string = inputText.value.toString();
        setliContent(imageValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(liChangeHandler, 'Enter');
    return(
        <div className="w-[100%]">
            <header title="cabeça" className="bg-blue-400 h-24 flex gap-5">
                <img className="w-11 h-11 m-6"  src="https://i.pinimg.com/originals/5a/9b/9d/5a9b9d580cef8ecfe154ae5a0e789949.png" alt="" />
                <h1 className="mt-6 text-3xl">Site</h1>
                <h1 className="text-2xl z-20">Sobre nós</h1>
            </header>
            <form>
                <input type="text" className="border border-black rounded m-2" name="" id="" />
                <br />
                <button type="button" id="change-header-content" className="bg-purple-500 p-3 rounded m-2">Mudar conteúdo da header</button>
            </form>
        </div>
    );
}
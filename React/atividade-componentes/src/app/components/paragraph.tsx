"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Paragraph(){

    const[paragraphContent, setParagraphContent] = useState("Parágrafo")

    const paragraphChangeHandler = () =>{    
        const inputText = document.querySelector("#paragraphContent") as HTMLInputElement
        if(!inputText) return;
        const paragraphValue: string = inputText.value.toString();
        setParagraphContent(paragraphValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(paragraphChangeHandler, 'Enter');

    return(
        <div>
            <p>{paragraphContent}</p>
            <form onSubmit={submitHandler}> 
                <input type="text" className="border border-black rounded m-2" name="" id="paragraphContent" />
                <br></br>
                <button type="button" id="change-paragraph-content" onClick={paragraphChangeHandler} className="bg-purple-500 p-3 rounded m-2">Mudar parágrafo</button>
            </form>
        </div>
    );
}
"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Image(){
    const[imageContent, setimageContent] = useState("https://i.pinimg.com/564x/31/4a/06/314a066ca571535e580e7649b8f25e65.jpg")

    const imageChangeHandler = () =>{    
        const inputText = document.querySelector("#imageContent")  as HTMLInputElement
        if(!inputText) return;
        const imageValue: string = inputText.value.toString();
        setimageContent(imageValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(imageChangeHandler, 'Enter');
    return(
        <div>
            <img src={imageContent} alt="Lusamine a mamãe do ano" />
            <form onSubmit={submitHandler}>
                <input type="text" className="border border-black rounded m-2" name="" id="imageContent" />
                <br></br>
                <button type="button" onClick={imageChangeHandler} id="change-image-url" className="bg-purple-500 p-3 rounded m-2">Mudar imagem</button>
            </form>
        </div>
    );
}
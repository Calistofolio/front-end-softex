"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function ItemList(){
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
        <div>
            <ul>
                <li>
                    Mamão
                </li>
                <li>
                    Melão
                </li>
                <li>
                    Joaquim
                </li>
            </ul>
            <form action="">
                <input type="text" className="border border-black rounded m-2" name="" id="" />
                <br />
                <button type="button" id="change-li-content" className="bg-purple-500 p-3 rounded m-2">Mudar lista</button>
            </form>
        </div>
    );
}
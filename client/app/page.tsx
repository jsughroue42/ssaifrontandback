
"use client"
import {useEffect, useState} from 'react';
import { Button } from "@/components/ui/button";

export default function NewPage() {

  const [message, setMessage] = useState("Loading")
  const [people, setPeople] = useState([]);

  useEffect (() => {
      fetch("http://localhost:8000/api/home").then( 
      response => response.json()
  ).then(
    data => {
      console.log(data)
      setMessage(data.message)
      setPeople(data.people)
    }
  )
  }, [])
  

   return (

    <div >
      <div> {message} </div>


      {
      people.map((person, index) => (
        <div key={index}>
          {person}
          </div>
      ))
      }


    </div>
    

    )
  }
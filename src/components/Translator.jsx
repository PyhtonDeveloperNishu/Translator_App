import { useState } from "react";

import LangDropDown from "./LangDropDown";
import { selectOptions } from "./language";
import axios from "axios";
import style from './Translator.module.css'


const Translator = () => {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async()=>{
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apiKey = "4c22b22ea5mshad8042ea161777ap1f82dcjsn3ca6fadbaa2d";
    const headers = {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      "content-type": "application/x-www-form-urlencoded",
    };
    const data = {
      source_language: sourceLang,
      target_language: targetLang,
      text: text,
    };

    try {
      let response = await axios.post(url, data, { headers });
      const result = response.data;
      if (result.status === "success") {
        let translatedText = result.data.translatedText;
        setTranslatedText(translatedText);
      } else {
        alert("Error in translation!");
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while translating", error);
    }
  };

  

  return (
    <><h1>Language Translator</h1>
    <div className={style.container}>
       
      <div className={style.con1}>
      <LangDropDown
        id="source"
        languages={selectOptions}
        onChange={(e) => setSourceLang(e.target.value)}
        value={sourceLang}
      />
      <textarea style={style.textarea}
        value={text} placeholder="Enter text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      </div>

      <button onClick={handleTranslate}>Translate</button>


      <div className={style.con2}>
      <LangDropDown
        id="target"
        languages={selectOptions}
        onChange={(e) => setTargetLang(e.target.value)}
        value={targetLang}
      />
      <textarea
        
        value={translatedText}
        readOnly
        onChange={(e) => {
          setTranslatedText(e.target.value);
        }}
      />
      </div>
      
    </div>
    </>
  );
};

export default Translator;

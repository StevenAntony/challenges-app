'use client'
import Button from "@/components/buttons/Button";
import InputRangeApp from "@/components/generate-password/InputRangeApp";
import ItemSetting from "@/components/generate-password/ItemSetting";
import LabelApp from "@/components/generate-password/LabelApp";
import CopyIcon from "@/components/icons/CopyIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";
import { useState } from "react";

export default function GeneratePasswordPage() {

  const [result, setResult] = useState<string>('')
  const [formGenerate, setFormGenerate] = useState({
    characterLength: 8,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false
  })

  const [lastFormGenerate, setLastFormGenerate] = useState({
    characterLength: 8,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false
  })

  const updateForm = (name: string, value: boolean|number) => {
    setFormGenerate({
      ...formGenerate,
      [name]: value
    })
  }

  function generatePassword(length : number, includeUppercase: boolean, includeLowercase: boolean, includeNumbers:  boolean, includeSymbols: boolean) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars = '';
    let password = '';

    if (includeUppercase) {
      allChars += uppercaseChars;
    }
    if (includeLowercase) {
      allChars += lowercaseChars;
    }
    if (includeNumbers) {
      allChars += numberChars;
    }
    if (includeSymbols) {
      allChars += symbolChars;
    }

    if (allChars === '') {
      throw new Error('At least one character type must be selected');
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    return password;
  }

  const refreshGenerate = () => {
    const password = generatePassword(lastFormGenerate.characterLength, lastFormGenerate.includeUppercase, lastFormGenerate.includeLowercase, lastFormGenerate.includeNumbers, lastFormGenerate.includeSymbols)
    setResult(password)
  }

  const handleGenerate = () => {
    setLastFormGenerate({...formGenerate})
    const password = generatePassword(formGenerate.characterLength, formGenerate.includeUppercase, formGenerate.includeLowercase, formGenerate.includeNumbers, formGenerate.includeSymbols)
    setResult(password)
  }

  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password).then(() => {
      // alert('Password copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="bg-[#e4d5eb] w-screen h-screen flex items-center justify-center">
      <div className="w-[450px] bg-[#090212] px-5 py-10 rounded-md">
        <p className="font-semibold text-lg mb-5">Generar Contraseña</p>
        <div className="mb-5">
          <LabelApp title="Generar Contraseña" />
          <div className="w-full h-[50px] bg-[#26173c] flex items-center rounded-2xl mt-1 px-3 relative">
            <span>{result}</span>
            <span className="absolute right-9 top-4 cursor-pointer" onClick={() => copyToClipboard(result)}><CopyIcon color="#bf5eed" size={18} /></span>
            <span className="absolute right-2 top-4 cursor-pointer" onClick={refreshGenerate}><RefreshIcon color="#bf5eed" size={20} /></span>
          </div>
        </div>
        <div className="mb-5">
          <LabelApp
            title="Cantidad de caracteres"
            extraRight={<span className="text-[#bf5eed] text-base font-semibold uppercase">{formGenerate.characterLength}</span>}
          />
          <InputRangeApp
            characterLength={formGenerate.characterLength}
            setCharacterLength={(value) => updateForm("characterLength", value)}
          />
        </div>
        <div className="mb-5">
          <LabelApp
            title="Configuraciones"
          />
          <ItemSetting title="Incluir letreas en mayusculas" setInclude={(value) => updateForm("includeUppercase", value)} include={formGenerate.includeUppercase} />
          <ItemSetting title="Incluir letreas en minuscula" setInclude={(value) => updateForm("includeLowercase", value)} include={formGenerate.includeLowercase} />
          <ItemSetting title="Incluir números" setInclude={(value) => updateForm("includeNumbers", value)} include={formGenerate.includeNumbers} />
          <ItemSetting title="Incluir simbolos" setInclude={(value) => updateForm("includeSymbols", value)} include={formGenerate.includeSymbols} />
        </div>
        <div>
          <Button className="bg-[#bf5eed]" onClick={handleGenerate}>Generar Contraseña</Button>
        </div>
      </div>
    </div>
  )
}

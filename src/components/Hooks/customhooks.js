import { useState, useEffect } from "react";

//useContador

export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        if (contador < valorMaximo) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > valorInicial){
            setContador(contador - 1);
        }
    }

    return {contador, incrementar, decrementar};
}

//useFetch

export const useFetch = (url) => {
    const[data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(jsonData => setData(jsonData))
            .catch(error=>console.log(error))
    }, [url])

    return data;
}

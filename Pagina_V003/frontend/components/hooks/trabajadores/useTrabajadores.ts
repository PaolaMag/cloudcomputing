import { useState, useEffect, useCallback } from "react";

import { Trabajadores } from "../../../interfaces";

import { UrlEndpoint } from "../../variables";

export default function useTrabajadores() {
  const [currentTrabajadores, setCurrentTrabajadores] = useState<Trabajadores | null>(null);
  const [refetch, setRefetch] = useState(false);
  const [trabajadoresList, setTrabajadoresList] = useState<Array<Trabajadores>>([]);

  const refetchTrabajadoresList = async () => {
    try {
      const response = await fetch(`${UrlEndpoint}/trabajadores/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setTrabajadoresList(result);
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    refetchTrabajadoresList()
  }, []);

  useEffect(() => {
    if(refetch){
      refetchTrabajadoresList()
      setRefetch(false)
    }
  }, [refetch])

  const getTrabajadores = useCallback(async (id: number) => {
    try {
      const response = await fetch(`${UrlEndpoint}/trabajadores/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      const result = await response.json();
      console.log("Success:", result);
      setCurrentTrabajadores(result[0])
      // setRefetch(true)
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  const createTrabajadores = useCallback(async (trabajadores: Trabajadores) => {
    console.log(trabajadores);
    try {
      const response = await fetch(`${UrlEndpoint}/trabajadores/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trabajadores),
      });

      const result = await response.json();
      console.log("Success:", result);
      setRefetch(true)
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  const updateTrabajadores = useCallback(async (trabajadores: Trabajadores) => {
    try {
      const response = await fetch(`${UrlEndpoint}/trabajadores/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trabajadores),
      });
      const result = await response.json();
      console.log("Success:", result);
      setRefetch(true)
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  const deleteTrabajadores = useCallback(async (id: number) => {
    try {
      const response = await fetch(`${UrlEndpoint}/trabajadores/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const result = await response.json();
      console.log("Success:", result);
      setRefetch(true)
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return {
    currentTrabajadores,
    trabajadoresList,
    getTrabajadores,
    createTrabajadores,
    updateTrabajadores,
    deleteTrabajadores,
  };
}

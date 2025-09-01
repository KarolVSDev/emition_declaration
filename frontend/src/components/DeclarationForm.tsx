"use client";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { Input } from "../components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type FormData = {
  frequency: string;
  description: string;
};

export default function DeclarationForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data: FormData) => {
    setError("");
    setSuccess("");

    try {
      // Verifica duplicidade
      const q = query(
        collection(db, "declarations"),
        where("frequency", "==", data.frequency),
        where("description", "==", data.description)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("Já existe uma declaração com esses dados.");
        return;
      }

      await addDoc(collection(db, "declarations"), {
        ...data,
        createdAt: new Date(),
      });
      setSuccess("Declaração enviada com sucesso!");
      reset();
    } catch {
      setError("Erro ao enviar declaração.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md w-full bg-white dark:bg-gray-900 p-6 rounded shadow"
    >
      <h2 className="text-lg font-semibold mb-2">Nova Declaração de Frequência</h2>
      <div>
        <label htmlFor="frequency" className="block text-sm font-medium mb-1">
          Frequência
        </label>
        <Input
          id="frequency"
          {...register("frequency", { required: true })}
          placeholder="Digite a frequência"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Descrição
        </label>
        <Textarea
          id="description"
          {...register("description", { required: true })}
          placeholder="Digite a descrição"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <Button type="submit" className="mt-4">
        Enviar Declaração
      </Button>
    </form>
  );
}
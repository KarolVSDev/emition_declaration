"use client";
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const DeclarationForm = () => {
  const [frequency, setFrequency] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!frequency || !description) {
      setError('Preencha todos os campos.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('');

    try {
      // Verifica se já existe uma declaração igual
      const q = query(
        collection(db, "declarations"),
        where("frequency", "==", frequency),
        where("description", "==", description)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('Já existe uma declaração com esses dados.');
        return;
      }

      await addDoc(collection(db, "declarations"), {
        frequency,
        description,
        createdAt: new Date()
      });
      setSuccess('Declaração enviada com sucesso!');
      setFrequency('');
      setDescription('');
    } catch (err) {
      setError('Erro ao enviar declaração.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Nova Declaração de Frequência</h2>
      <div>
        <label htmlFor="frequency" className="block text-sm font-medium mb-1">
          Frequência
        </label>
        <input
          type="text"
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Descrição
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 font-semibold">
        Enviar Declaração
      </button>
    </form>
  );
};

export default DeclarationForm;
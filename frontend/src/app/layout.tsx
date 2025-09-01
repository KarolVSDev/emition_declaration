import React from 'react';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl">Sistema de Declaração de Frequência</h1>
          </header>
          <main className="flex-grow p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Sistema de Declaração de Frequência</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
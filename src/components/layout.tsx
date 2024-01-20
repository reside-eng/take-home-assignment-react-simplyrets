import React from 'react';

export function Layout({
  children,
  pageName,
}: {
  children: React.ReactElement;
  pageName: string;
}) {
  return (
    <div>
      <header className="h-103 bg-gray-100 flex items-center px-6 md:px-10">
        <h1 className="text-md md:text-3xl font-semibold">{pageName}</h1>
      </header>
      {children}
    </div>
  );
}

import React from 'react';
import { redirect } from 'react-router';
export function Root() {
  return (
    <div>
      This page should automatically redirect to '/property-listings' route.
    </div>
  );
}

export async function loader() {
  return redirect('/property-listings');
}

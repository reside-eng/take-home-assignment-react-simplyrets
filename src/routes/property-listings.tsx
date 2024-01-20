import React from 'react';
import { Layout } from '../components/layout';
import { PropertyCards } from '../features/property-cards';
export function PropertyListings() {
  return (
    <Layout pageName="Property Listings">
      <PropertyCards />
    </Layout>
  );
}

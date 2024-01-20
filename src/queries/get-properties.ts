export async function getProperties() {
  const response = await fetch('https://api.simplyrets.com/properties', {
    headers: {
      Authorization: `Basic ${btoa('simplyrets:simplyrets')}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('There was an error fetching properties');
  }
  return response.json();
}

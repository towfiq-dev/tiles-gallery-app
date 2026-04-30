export const getFeaturesTiles = async () => {
  const res = await fetch('https://assignment-json-server.onrender.com/allTiles', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) return [];
  return res.json();
}
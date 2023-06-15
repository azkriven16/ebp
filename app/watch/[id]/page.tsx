async function getData({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/watch/${params.id}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Watch({ params }: { params: { id: string } }) {
  const data = getData({ params });
  console.log(data);
  return <div>Watch</div>;
}

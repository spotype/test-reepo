export default async function getPost(slug) {
  const data = await fetch(`https://dummyjson.com/products/${slug}`);
  return data.json();
}

export default async function getPromotionsById(id:string) {
  try {
    const url =`/api/rnb/pvt/calculatorconfiguration/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    // waits until the request completes...
    const json = await response.json();
    console.log('API',url)
    return json;

  } catch (error) {
    return { success: false, data: error };
  }
}

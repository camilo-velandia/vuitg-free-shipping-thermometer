export default async function getPromotions() {
  try {
    const url =`/api/rnb/pvt/benefits/calculatorconfiguration`;

    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    // waits until the request completes...
    const json = await response.json();
    return json;

  } catch (error) {
    return { success: false, data: error };
  }
}

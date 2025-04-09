const source = 'https://acc01.titanos.tv/v1/genres/14/contents?market=es&device=tv&locale=es&page=1&per_page=50';

export const getFilms = async () => {
    const films = await fetchData(source);
    return films.collection;
}

async function fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error in the request: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
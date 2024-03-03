export class API {
  constructor(url) {
    this.url = url;
  }

  async fetch() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error(
          `Erreur lors de la requête : ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();

      return data;
    } catch (e) {
      throw new Error(`Erreur lors de la requête : ${e.message}`);
    }
  }
}

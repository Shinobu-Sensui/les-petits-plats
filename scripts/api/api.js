export default class Api {
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
      return await response.json();
    } catch (e) {
      throw new Error(`Erreur lors de la requête : ${e.message}`);
    }
  }
}

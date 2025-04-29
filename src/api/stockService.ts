import { api } from "./api";

export async function getStockItens() {
  try {
    const response = await api.get("/stock");
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

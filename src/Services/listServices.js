import api from "../Config/api"

// Returns all list items from the server
export async function getList() {
    const response = await api.get("/list")
    return response.data
}

// Add the item
export async function addItem(item) {
    const response = await api.post("/list", item)
    // return the item that gets created.
    return response.data
}

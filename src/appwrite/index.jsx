import { Client, Databases, ID, Query } from 'appwrite';

const APPWRITE_URL = import.meta.env.VITE_APPWRITE_API;
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint(APPWRITE_URL)
    .setProject(APPWRITE_PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (search, movie) => {
    try {
        const result = await database.listDocuments(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, [Query.equal("searchTerm", search)])
        if (result.documents.length > 0) {
            const movieEntry = result.documents[0];
            await database.updateDocument(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, movieEntry.$id, { count: movieEntry.count + 1 })
        } else {
            await database.createDocument(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, ID.unique(), {
                searchTerm: search,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])
        return result.documents
    } catch {
        console.log("Error getting trending movies")
    }
} 
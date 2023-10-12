/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        DB_URI: "mongodb+srv://sandeepneupane05:apple12345@cluster0.j8gfvta.mongodb.net/?retryWrites=true&w=majority"
    }
}

module.exports = nextConfig

// this token must be obtained from the login and stored in storage
const API_TOKEN = '357e797245266769e6003e35907b06686159ee4e'

interface RequestOptions {
    method: string
    headers?: Record<string, string>
    body?: string
}

async function fetchData<T>(url: string, options: RequestOptions): Promise<T> {
    try {
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json() as T
        return data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
        throw error
    }
}

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`
}

async function get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const options: RequestOptions = {
        method: 'GET',
        headers: headers || DEFAULT_HEADERS,
    }

    return await fetchData<T>(url, options)
}

async function post<T>(url: string, body?: any, headers?: Record<string, string>): Promise<T> {
    const options: RequestOptions = {
        method: 'POST',
        headers: headers || DEFAULT_HEADERS,
        body: JSON.stringify(body),
    }

    return await fetchData<T>(url, options)
}

async function put<T>(url: string, body?: any, headers?: Record<string, string>): Promise<T> {
    const options: RequestOptions = {
        method: 'PUT',
        headers: headers || DEFAULT_HEADERS,
        body: JSON.stringify(body),
    }

    return await fetchData<T>(url, options)
}

async function del<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const options: RequestOptions = {
        method: 'DELETE',
        headers: headers || DEFAULT_HEADERS,
    }

    return await fetchData<T>(url, options)
}

export { get, post, put, del }

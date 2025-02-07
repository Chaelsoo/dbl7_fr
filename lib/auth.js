const TOKEN_KEY = "auth_token"

export async function login(email, password){
  const response = await fetch("http://localhost:3000/api/auth/signin", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  console.log(response);

  if (!response.ok) {
    throw new Error("Login failed")
  }
  const data = await response.json()
  localStorage.setItem(TOKEN_KEY, data.token)
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
}

export function getToken(){
  return localStorage.getItem(TOKEN_KEY)
}

export function isAuthenticated(){
  return !!getToken()
}


export async function fetchWithAuth(url, options) {
    const token = getToken()
  
    if (!token) {
      throw new Error("No authentication token found")
    }
  
    const headers = new Headers(options.headers || {})
  
    headers.set("Authorization", `Bearer ${token}`)
  
    return fetch(url, {
      ...options,
      headers,
    })
  }
interface PropServices {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: {};
}

const PORT = "http://127.0.0.1:8000";

export const commonservices = async (method: PropServices) => {
  try {
    const response = await fetch(`${PORT}${method.url}`, {
      method: method.method,
      headers: {
        "Content-Type": "application/json",
        accessKey: "123456758abcs",
      },
      ...(method.body ? { body: JSON.stringify(method.body) } : {}),
    });
    return response.json();
  } catch (error) {
    console.error("Error in common services:", error);
  }
};

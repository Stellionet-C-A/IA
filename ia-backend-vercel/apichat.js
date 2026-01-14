export default async function handler(req, res) {
  const API_KEY = "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"; // Tu clave privada de OpenAI
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://vercel.com/stellionets-projects/ia/7vYsyxcfmNSuQLHGvvJMUjx48amU", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Error al conectar con OpenAI" });
  }
}

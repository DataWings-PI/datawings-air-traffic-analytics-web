export async function cadastrarUsuario({ nome, email, senha, codigoEmpresa }: any) {
  try {
    const response = await fetch("http://localhost:8080/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
        codigoEmpresa
      })
    });

    if (!response.ok) {
      const erro = await response.text();
      throw new Error(erro || "Erro desconhecido no cadastro");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}

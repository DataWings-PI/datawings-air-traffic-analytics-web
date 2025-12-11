export async function cadastrarUsuario({
  nome,
  email,
  senha,
  codigoEmpresa,
}: {
  nome: string;
  email: string;
  senha: string;
  codigoEmpresa: string;
}) {
  const response = await fetch("http://localhost:8080/usuarios/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha, codigoEmpresa }),
  });

  if (!response.ok) throw new Error(await response.text());

  return response.json();
}

export async function autenticar(email: string, senha: string) {
  const response = await fetch("http://localhost:8080/usuarios/autenticar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) throw new Error(await response.text());

  return response.json();
}

export async function atualizarUsuario({
  id,
  nome,
  email,
  senhaAntiga,
  senhaNova,
}: {
  id: number;
  nome: string;
  email: string;
  senhaAntiga: string;
  senhaNova: string;
}) {
  const response = await fetch(`http://localhost:8080/usuarios/atualizar/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome,
      email,
      senhaAntiga,
      senhaNova,
    }),
  });

  if (!response.ok) throw new Error(await response.text());

  return response.text();
}

export async function excluirUsuario(id: number) {
  const response = await fetch(`http://localhost:8080/usuarios/deletar/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error(await response.text());

  return true;
}
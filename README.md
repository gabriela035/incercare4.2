type Role = "intern" | "mentor" | "admin";

export type User = {
  id: string;
  email: string;
  role: Role;
};

export type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

/**
 * [1] & [3] Implementare parseUserConfig
 */
export function parseUserConfig(input: string): Result<User> {
  let data: any;

  // 1. Validare JSON de bază
  try {
    data = JSON.parse(input);
  } catch (e) {
    return { ok: false, error: "Invalid JSON" };
  }

  // 2. Verificăm dacă este un obiect (și nu null sau array)
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return { ok: false, error: "Invalid User shape" };
  }

  // 3. Validări specifice pentru fiecare câmp (fără casting la Record)
  
  // Verificare ID
  if (!data.hasOwnProperty('id')) return { ok: false, error: "Missing field: id" };
  if (typeof data.id !== "string") return { ok: false, error: "Invalid type for id (expected string)" };

  // Verificare Email
  if (!data.hasOwnProperty('email')) return { ok: false, error: "Missing field: email" };
  if (typeof data.email !== "string") return { ok: false, error: "Invalid type for email (expected string)" };

  // Verificare Role
  if (!data.hasOwnProperty('role')) return { ok: false, error: "Missing field: role" };
  const r = data.role;
  if (r !== "intern" && r !== "mentor" && r !== "admin") {
    return { ok: false, error: "Invalid role (expected intern|mentor|admin)" };
  }

  // 4. Construcția obiectului final
  // Deoarece am verificat totul manual, TypeScript ne permite returnarea sigură
  return {
    ok: true,
    value: {
      id: data.id,
      email: data.email,
      role: data.role
    }
  };
}

/**
 * [2] Implementare parseUsersConfig
 */
export function parseUsersConfig(input: string): Result<User[]> {
  let data: any;

  try {
    data = JSON.parse(input);
  } catch (e) {
    return { ok: false, error: "Invalid JSON" };
  }

  if (!Array.isArray(data)) {
    return { ok: false, error: "Invalid Users shape" };
  }

  const validatedUsers: User[] = [];

  for (const item of data) {
    // Validăm fiecare element folosind logica de mai sus
    // (Pentru simplitate, refolosim funcția transformând obiectul înapoi în string)
    const res = parseUserConfig(JSON.stringify(item));
    if (!res.ok) {
      return { ok: false, error: "Invalid Users shape" };
    }
    validatedUsers.push(res.value);
  }

  return { ok: true, value: validatedUsers };
}

// --- Demo Output ---
const testInputs = [
  '{"id":"u1","email":"a@b.com","role":"intern"}',
  '{"id":"u2","email":"a@b.com","role":"boss"}',
  '{"id":123,"email":"a@b.com","role":"intern"}'
];

testInputs.forEach(input => {
  console.log(parseUserConfig(input));
});

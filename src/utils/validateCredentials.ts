export function validateCredentials({
  name,
  email,
  phone,
  address,
}: Credentials) {
  if (!name.trim() || !email.trim() || !phone.trim() || !address.trim())
    return false;

  return true;
}

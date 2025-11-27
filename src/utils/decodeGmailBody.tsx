import DOMPurify from "dompurify";

export const safeHTML = (htmlBody:string):string => {
    const decodedText = decodeGmailBody(htmlBody);
    return DOMPurify.sanitize(decodedText);
}



function decodeGmailBody(encoded:string):string {
  if (!encoded) return "";

  let decoded = "";

  // Try Base64URL → UTF-8
  try {
    decoded = decodeURIComponent(
      atob(encoded.replace(/-/g, '+').replace(/_/g, '/'))
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  } catch (e) {
    // Not Base64 → treat as raw quoted-printable
    decoded = encoded;
  }

  // Decode quoted-printable values (=3D, =20, etc.)
  decoded = decoded.replace(/=([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

  return decoded;
}
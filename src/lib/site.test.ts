import { describe, expect, it } from "vitest";
import { INSTAGRAM_URL, WHATSAPP_URL, whatsappLink } from "./site";

describe("contato oficial", () => {
  it("reservas apontam para o WhatsApp +55 14 99181-0154", () => {
    expect(WHATSAPP_URL).toBe("https://wa.me/5514991810154");
    expect(whatsappLink("Olá")).toBe("https://wa.me/5514991810154?text=Ol%C3%A1");
  });

  it("Instagram aponta para @terrazzocucina", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/terrazzocucina/");
  });
});

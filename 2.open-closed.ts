//@ts-nocheck
//#region Example 1
//BAD
class Button {
  text: string;
  style: string;

  constructor(text: string, style: string) {
    this.text = text;
    this.style = style;
  }

  render(): void {
    if (this.style === "primary") {
      // Lógica para renderizar un botón de estilo primario
    } else if (this.style === "secondary") {
      // Lógica para renderizar un botón de estilo secundario
    } else {
      throw new Error("Estilo de botón no soportado");
    }
  }
}

// Uso de la clase Button
const primaryButton = new Button("Enviar", "primary");
primaryButton.render();

const secondaryButton = new Button("Cancelar", "secondary");
secondaryButton.render();

//BETTER

interface ButtonStyle {
  render(text: string): void;
}

class PrimaryButtonStyle implements ButtonStyle {
  render(text: string): void {
    // ...logic
  }
}

class SecondaryButtonStyle implements ButtonStyle {
  render(text: string): void {
    // ...logic
  }
}

class Button {
  text: string;
  style: string;

  constructor(text: string, style: ButtonStyle) {
    this.text = text;
    this.style = style;
  }

  render(): void {
    this.style.render(this.text);
  }
}

//#endregion

//#region Example 2
//BAD
class GreetingService {
  language: string;

  constructor(language: string) {
    this.language = language;
  }

  execute(): string {
    switch (this.language) {
      case "en": {
        return "Hello";
      }

      case "es": {
        return "Hola";
      }

      case "fr": {
        return "Bonjour";
      }

      default:
        return "";
    }
  }
}

//BETTER

interface LanguageProvider {
  greet(): string;
}

class ENLanguageProvider implements LanguageProvider {
  greet(): string {
    return "Hello";
  }
}

class FRLanguageProvider implements LanguageProvider {
  // Returns a greeting in french
  greet(): string {
    return "Bonjour";
  }
}

class ESLanguageProvider implements LanguageProvider {
  // Returns a greeting in french
  greet(): string {
    return "Hola";
  }
}

class GreetingService {
  languageProvider: LanguageProvider;

  constructor(languageProvider: LanguageProvider) {
    this.languageProvider = languageProvider;
  }

  execute(): string {
    return this.languageProvider.greet();
  }
}

const provider = new ESLanguageProvider();
const greetingService = new GreetingService(provider);
greetingService.execute();
//#region

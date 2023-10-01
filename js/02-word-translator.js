// Prompts the user for a language code
let languageCode = prompt('Enter a language code ("es", "de", "en", or "fr")')

// Display the translated version of "Hello World" for the given language within the console window. 
if (languageCode == 'es')
    document.write('Hello World translated in Spanish is: Hola Mundo')
else if (languageCode == 'de')
    document.write('Hello World translated in German is: Hallo Welt')
else if (languageCode == 'fr')
    document.write('Hello World translated in French is: Bonjour le monde')
else 
    // If the user enters anything but those four language codes, the application should default to English. 
    document.write('Hello World translated in English is: Hello World')
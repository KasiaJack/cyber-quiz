# Cyber Quiz

Interaktywny quiz sprawdzający wiedzę z zakresu cyberbezpieczeństwa.
Projekt zaliczeniowy z przedmiotu "Programowanie stron internetowych".

##Live demo

[Wypróbuj quiz online →](https://kasiajack.github.io/cyber-quiz/)

##O projekcie

Aplikacja składa się z 10 pytań z zakresu cyberbezpieczeństwa, obejmujących:
- Phishing i ataki socjotechniczne
- Bezpieczne hasła i menedżery haseł
- Uwierzytelnianie dwuskładnikowe (2FA)
- Malware i ransomware
- Bezpieczeństwo sieci (WiFi, VPN)
- Ochrona danych osobowych

Każde pytanie posiada wyjaśnienie poprawnej odpowiedzi, oparte na materiałach edukacyjnych CERT Polska, OWASP i NIST.

##Technologie

- HTML5 - semantyczna struktura
- CSS3 - Custom Properties, Flexbox, RWD (Responsive Web Design)
- JavaScript (ES6+) - vanilla JS, bez frameworków
- Git + GitHub - kontrola wersji
- GitHub Pages - hosting

##Funkcjonalności

- 10 pytań jednokrotnego wyboru
- Natychmiastowa informacja zwrotna z wyjaśnieniem
- Pasek postępu w czasie rzeczywistym
- Ekran wyników z oceną słowną
- Restart quizu z losową kolejnością pytań
- Responsywny design (działa na mobile i desktop)

##Uruchomienie lokalne

\`\`\`bash
git clone https://github.com/KasiaJack/cyber-quiz.git
cd cyber-quiz
\`\`\`

Otwórz `index.html` przez rozszerzenie **Live Server** w VS Code.

##Struktura projektu

\`\`\`
cyber-quiz/
├── index.html          # Struktura strony
├── style.css           # Stylowanie (motyw cyber dark)
├── script.js           # Logika quizu
├── data/
│   └── questions.json  # Baza pytań
└── assets/             # Zasoby graficzne
\`\`\`

##Autor

Katarzyna Jackowska - [@KasiaJack](https://github.com/KasiaJack)
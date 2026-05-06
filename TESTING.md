#Raport z testów manualnych — Cyber Quiz

Data wykonania: 6 maja 2026  
Tester: Katarzyna Jackowska  
Środowisko testowe: macOS, Chrome (najnowsza wersja)  
URL aplikacji: https://kasiajack.github.io/cyber-quiz/

Wszystkie scenariusze testowe zakończyły się powodzeniem.** Aplikacja jest gotowa do użytkowania.

##Szczegółowe wyniki testów

##Test 1 — Start quizu

- Akcja: Kliknięcie przycisku "Rozpocznij quiz" na ekranie startowym
- Oczekiwany wynik: Wyświetla się pierwsze pytanie z 4 odpowiedziami i paskiem postępu
- Wynik: PASS

##Test 2 - Wybór poprawnej odpowiedzi

- Akcja: Kliknięcie poprawnej odpowiedzi
- Oczekiwany wynik: Przycisk podświetla się na zielono, wyświetla się wyjaśnienie
- Wynik: PASS

##Test 3 - Wybór błędnej odpowiedzi

- Akcja: Kliknięcie błędnej odpowiedzi
- Oczekiwany wynik: Wybrany przycisk czerwony, poprawna odpowiedź podświetlona zielono
- Wynik: PASS

##Test 4 - Liczenie punktów

- Akcja: Przejście całego quizu i zliczanie poprawnych odpowiedzi
- Oczekiwany wynik: Wynik końcowy zgadza się z liczbą poprawnych odpowiedzi
- Wynik: PASS

##Test 5 - Pasek postępu

- Akcja: Obserwacja paska postępu podczas quizu
- Oczekiwany wynik: Aktualizuje się po każdym pytaniu (1/10, 2/10, ..., 10/10)
- Wynik: PASS

##Test 6 - Ekran wyników

- Akcja: Dokończenie 10 pytań
- Oczekiwany wynik: Wyświetla się ekran "Quiz zakończony!" z wynikiem i oceną słowną
- Wynik: PASS

##Test 7 - Restart quizu

- Akcja: Kliknięcie "Spróbuj ponownie" na ekranie wyniku
- Oczekiwany wynik: Quiz startuje od nowa, pytania w innej kolejności
- Wynik: PASS

##Test 8 - Responsywność (RWD)

- Akcja: Otwarcie aplikacji na urządzeniu mobilnym
- Oczekiwany wynik: Aplikacja działa poprawnie na ekranach 320px - 1920px
- Wynik: PASS

##Test 9 - Walidacja kliknięć

- Akcja: Próba kliknięcia drugiej odpowiedzi po wybraniu pierwszej
- Oczekiwany wynik: Druga odpowiedź nie reaguje - można wybrać tylko raz
- Wynik: PASS
- Uwaga: Logika "jeden klik = ostateczna decyzja" zgodna ze standardami quizów edukacyjnych

##Test 10 - Test w innej przeglądarce

- Akcja: Otwarcie aplikacji w Safari
- Oczekiwany wynik: Aplikacja działa identycznie jak w Chrome
- Wynik: PASS

##Wnioski

Aplikacja Cyber Quiz spełnia wszystkie założenia funkcjonalne. Logika quizu działa zgodnie z planem, interfejs jest responsywny, a aplikacja działa poprawnie w głównych przeglądarkach. Brak błędów krytycznych ani drobnych usterek wpływających na doświadczenie użytkownika.

##Środowisko testowe

- System operacyjny: macOS
- Przeglądarki testowe: Chrome, Safari
- Hosting: GitHub Pages
- Repozytorium: https://github.com/KasiaJack/cyber-quiz
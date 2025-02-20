> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s4e01-next-introduction` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` Next.js: Wprowadzenie

Zdefiniuj komponent `<Menu />`, który tworzy linki do wcześniej utworzonych podstron. Wykorzystaj go w nagłówku oraz stopce strony. 

Ten komponent powinien przyjmować przez `props`-y informacje o elementach menu. 

Idealnie będzie jeśli ten komponent będzie przygotowany na renderowanie menu wielopoziomowego czyli jeśli przez `props` przekażę np. taką strukturę danych jak poniżej, to wyrenderowania zostanie lista zagnieżona tj. `ul > li > ul`.

```
[
    {
        text: 'strona główna',
        url: '/'
        children: [
            { 
                text: 'o mnie', 
                url: '/about-me'
            }
        ]
    },
    { 
        text: 'kontakt', 
        url: '/contact'
    }
]
```


PS. Możesz wykorzystać w tym zadaniu [rekurencję](https://devmentor.pl/b/rekurencja-alternatywa-dla-petli-w-javascript).



&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-next-introduction)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:

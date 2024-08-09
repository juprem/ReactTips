# Je vous donne des tips et outils pour une stack React propre et complète

Bonjour, je me présente Olivier ABDELNOUR et je vous remercie d'avoir suivi ma conférence.

Vous avez dans ce repository tout le code que j'ai utilisé comme support.

Je vous donne comme promis des ressources supplémentaires sur pour renforcer et améliorer votre expérience dans le développement d'une application React.

## Les librairies

### Le début d'un projet

Faire un projet en Vanilla React : [Vite](https://vitejs.dev/guide/)

```shell
npm create vite@latest my-react-app -- --template react-ts
```

En utilisant un framework
- [Next.JS](https://nextjs.org/docs/getting-started/installation)
- [Astro](https://docs.astro.build/fr/guides/integrations-guide/react/)
- [Gastby](https://www.gatsbyjs.com/docs/tutorial/getting-started/)

### Typescript

[Matt Pocock](https://www.totaltypescript.com/), un excellent blog sur typescript avec de nombreuses ressources et tutoriels (gratuit) à votre disposition. Cela vous permettra d'acquérir une base solide pour développer et progresser !

### Le fetch de données

Wrapper de fetch :
- [axios](https://axios-http.com/fr/docs/intro)
- [superagent](https://github.com/ladjs/superagent)

Store des data :
- [tanstack-query](https://tanstack.com/query/latest), je vous ajoute ici un ensemble d'article, fait par l'un des maintainers, pour avoir tous les tips concernant cette librairie : [TKdodo](https://tkdodo.eu/blog/practical-react-query)
- [apollo](https://www.apollographql.com/docs/react/get-started)

### Les tests
- Pour votre logique : [vitest](https://vitest.dev/guide/)
- Pour vos composants : [testing-librairy](https://testing-library.com/docs/react-testing-library/intro/), et l'implémentation avec vitest [guide](https://www.robinwieruch.de/vitest-react-testing-library/)
- End-to-end : [Playwright](https://playwright.dev/)

### La gestion d'état globalisé (autre que les data des requêtes !)

- [Zustand](https://zustand-demo.pmnd.rs/)
- [XState](https://stately.ai/docs/quick-start)
- [Jotai](https://jotai.org/)

### Immutabilité

Probablement dans les points les plus importants à respecter dans l'univers React, les ressources sont immutables (sauf à l'endroit où on les créer) et pour cela on peut passaer par cette librairie [immer](https://immerjs.github.io/immer/)

### Les composants UI

Je vous mets 2 super intéressantes

- [Shadcn](https://ui.shadcn.com/docs/installation)
- [MUI](https://mui.com/material-ui/getting-started/installation/)
- [Antd](https://ant.design/docs/react/getting-started)
- [rewind](https://rewind-ui.dev/introduction)
- [NextUI](https://nextui.org/docs/guide/installation)

### Styling

- [tailwind](https://tailwindcss.com/docs/installation)
- [panda-css](https://panda-css.com/docs/overview/getting-started)
- Ou un bon vieux sass si vous n'aimez pas le css-in-js [sass](https://sass-lang.com/install/)

Je vous conseille fortement d'utiliser [storybook](https://storybook.js.org/docs) si vous avez de nombreux composants homemade, cela permet de faire une doc mutualiser entre vos projets et de linéariser le style et la forme de vos composants.

### Cartographie

- [React-leaflet](https://react-leaflet.js.org/docs/start-introduction/) (Vous pouvez utilisez OpenStreetMap !)

### Drag-&-Drop

- [Dndkit](https://docs.dndkit.com/introduction/installation)

### Animation

- [framer-motion](https://www.framer.com/motion/introduction/)

### Charts

- [Rechart](https://recharts.org/en-US/guide), Si vous n'utilisez pas Shadcn ou que vous ne trouvez pas votre bonheur !


Je tiens à remercier toutes l'équipe de Takima pour m'avoir aider à réaliser cette conférence, je pars de loin et je suis content du résultat !!
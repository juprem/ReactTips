const proverbes = [
    "À l'âge où le coeur s'emballe l'amour flambe la vie",
    'Dans la sagesse, il y a le sage, dans le sage, il y a l’âge.',
    "Ce n'est pas mon âge qui me dérange, mais les effets secondaires.",
    "La fleur de l'âge prend racine dans le coeur.",
    "j'ai passé l'âge de me venger, mais les accidents, ça arrive.",
    "La sagesse de l'homme grandit avec son âge.",
    'Mon âge, même si je le savais, je ne le croirais pas.',
    "L'homme arrive novice à chaque âge de sa vie.",
];

export function CheesyAgeSayingComponent() {
    const random = Math.floor(Math.random() * proverbes.length);

    return <div className="italic text-center text-xs">{proverbes[random]}</div>;
}

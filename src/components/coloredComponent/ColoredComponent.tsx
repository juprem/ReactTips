export function ColoredComponent() {
    const rand = '#' + Math.random().toString(16).slice(2, 8);

    return (
        <div
            style={{
                backgroundColor: rand,
            }}
            className="w-full h-3 rounded"
        />
    );
}
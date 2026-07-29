export function ION_CORE(hub){
    return {
        mode: "ion-pulse",
        pulse: hub.pulse,
        charge: (hub.pulse * 2) % 300,
        state: hub.pulse < 150 ? "low" : "high"
    };
}

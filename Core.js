export function ION_CORE(hub){
    const pulse = hub.pulse;

    return {
        mode: "ion-pulse",
        pulse,

        // Lichtgeschwindigkeitspunkte (nicht-linear)
        warp: Math.pow(pulse, 1.3) % 500,

        // Raumkrümmung (Hyperbolische Ladung)
        curvature: Math.log(pulse + 1) * 42,

        // Hyper‑Charge (Pulse in 3D)
        charge: (pulse * pulse) % 900,

        // Pulse‑State (mehrstufig)
        state:
            pulse < 100 ? "low" :
            pulse < 250 ? "mid" :
            pulse < 400 ? "high" :
            "overdrive"
    };
}

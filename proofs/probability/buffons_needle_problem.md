setup(Needle_Problem) ↔
    Plane(ℝ², Vertical_Strips) ∧
    Vertical_Lines(∀k ∈ ℤ, x = k) ∧
    Needle_Length = 1 ∧
    Angle_θ ∈ [-π/2, π/2) ∧
    Events({
        E ↔ "Needle crosses vertical line",
        Θ_θ ↔ "Needle dropped with angle θ"
    }). →

probability_analysis(Needle_Problem) ↔
    ∀θ ∈ [-π/2, π/2), 
        (Cross_Event(E, Θ_θ) ↔ 0 ≤ x_n ≤ cos(θ)) →
        Pr(E | Θ_θ) = cos(θ). →
    ∀θ, Continuous_Random_Variable(θ) →
        Pr(E) = ∫[-π/2, π/2] Pr(E | Θ_θ) Pr(Θ_θ) dθ →
        Uniform_Distribution(θ, Pr(Θ_θ) = 1/π) →
        Pr(E) = ∫[-π/2, π/2] cos(θ) (1/π) dθ. →

integration(Needle_Problem) ↔
    Pr(E) = (1/π) ∫[-π/2, π/2] cos(θ) dθ →
    Primitive(cos(θ), sin(θ)) →
    Pr(E) = (1/π) [sin(θ)]_{-π/2}^{π/2}. →

evaluation(Needle_Problem) ↔
    sin(π/2) = 1 ∧ sin(-π/2) = -1 →
    Pr(E) = (1/π) * (1 - (-1)) →
    Pr(E) = (1/π) * 2 →
    Pr(E) = 2/π. →

conclusion(Needle_Problem) ↔
    Probability(E) = 2/π.
theorem_definition(Chebyshev) ↔
    ∀X random_variable, a ∈ ℝ⁺, density(fₓ) →
    E(X²) = ∫ x²fₓ(x)dx ≥ ∫_{|x|≥a} x²fₓ(x)dx ≥ a²P(|X| ≥ a) →
    P(|X| ≥ a) ≤ 1/a² E(X²) →

[generalized_chebyshev ↔
    ∀p > 0, 
    E(|X|ᵖ) = ∫ |x|ᵖfₓ(x)dx ≥ ∫_{|x|≥a} |x|ᵖfₓ(x)dx ≥ aᵖP(|X| ≥ a) →
    P(|X| ≥ a) ≤ 1/aᵖ E(|X|ᵖ)] →

[weak_law_setup ↔
    let(X₁,X₂,...) iid_sequence ∧
    E(Xⱼ) = μ ∧ Var(Xⱼ) = σ² ∧
    Sₙ := X₁ + ... + Xₙ ∧
    S*ₙ := Sₙ/n - μ →
    E(S*ₙ) = 0 ∧ Var(S*ₙ) = σ²/n] →

[borel_cantelli ↔
    sequence(Aₙ) events ∧
    decreasing_unions ↔ ∀m, ∪_{n≥m+1} Aₙ ⊆ ∪_{n≥m} Aₙ ∧
    limsup(Aₙ) := ∩_{m=1}^∞ ∪_{n≥m} Aₙ →
    Σ P(Aₙ) < ∞ → P(limsup Aₙ) = 0] →

[strong_law ↔
    define(ℰ) ↔ {ω ∈ Ω: lim_{n→∞} Sₙ(ω)/n = μ} ∧
    conditions ↔ [
        σ² = E(X₁²) < ∞ ∧
        E(|X₁|) < ∞ ∧
        assume(μ = 0)
    ] →
    proof_strategy ↔ [
        ∀ε > 0, P(|Sₙ| > nε i.o.) = 0 →
        use_chebyshev(p = 4) ∧
        compute ↔ E(Sₙ⁴) = nE(X₁⁴) + 3n(n-1)σ⁴ ∧
        bound ↔ E(Sₙ⁴) ≤ Cn² for large n →
        series_convergence ↔ Σ P(|Sₙ| ≥ nε) ≤ Σ C/ε⁴n² < ∞
    ]] →

therefore ↔ P(ℰ) = 1
∴ Proved.
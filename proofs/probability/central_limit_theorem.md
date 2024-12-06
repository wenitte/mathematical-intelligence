theorem_definition(Central_Limit_Theorem) ↔ 
    ∀{Xᵢ: i∈ℕ}, iid(Xᵢ) ∧ E(Xᵢ) = 0 ∧ Var(Xᵢ) = σ² →
    Sₙ := Σᵢ₌₁ⁿ Xᵢ ∧
    Zₙ := Sₙ/(σ√n) →
    lim_{n→∞} P(Zₙ ≤ x) = Φ(x) →

mgf_definition(M) ↔ [
    M(t) := E(e^{tX}) ∧
    discrete_case ↔ M(t) = Σₓ e^{tx}p(x) ∧
    continuous_case ↔ M(t) = ∫_{-∞}^∞ e^{tx}f(x)dx
] →

property_A(uniqueness) ↔ 
    M₁(t) = M₂(t) in neighborhood(0) →
    distribution₁ = distribution₂ →

moment_relations(derivatives) ↔ [
    M'(0) = E(X) ∧
    M''(0) = E(X²) ∧
    M^(r)(0) = E(X^r)
] →

proof_steps ↔ [
    standardization ↔ 
        Zₙ = (Sₙ - nμ)/(σ√n) has E(Zₙ) = 0 ∧ Var(Zₙ) = 1 ∧
    
    mgf_computation ↔ [
        Mₛₙ(t) = [M(t)]ⁿ ∧
        Mzₙ(t) = [M(t/(σ√n))]ⁿ
    ] →
    
    taylor_expansion ↔ [
        M(t) = M(0) + tM'(0) + ½t²M''(0) + εₜ ∧
        M(0) = 1 ∧ M'(0) = 0 ∧ M''(0) = σ² →
        M(t/(σ√n)) = 1 + ½t²/(2n) + εₙ
    ] →
    
    limiting_behavior ↔ [
        εₙ/t² → 0 as n → ∞ →
        Mzₙ(t) = (1 + t²/(2n) + εₙ)ⁿ →
        lim_{n→∞} Mzₙ(t) = lim_{n→∞}(1 + t²/(2n))ⁿ = e^{t²/2}
    ]
] →

conclusion ↔ 
    Mzₙ(t) → e^{t²/2} = mgf_of_standard_normal ∧
    uniqueness_of_mgf →
    Zₙ →_{d} N(0,1)
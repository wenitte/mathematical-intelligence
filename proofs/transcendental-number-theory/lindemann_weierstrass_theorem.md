theorem_definition(Lindemann_Weierstrass) ↔
    ∀α₁,...,αₙ algebraic and distinct,
    ∀β₁,...,βₙ algebraic and non-zero →
    β₁eᵃ¹ + ... + βₙeᵃⁿ ≠ 0 →

[core_integration ↔
    define(I) ↔ I(t) := ∫₀ᵗ e^t-x f(x)dx ∧
    integration_by_parts ↔ [
        I(t) = (-e^(t-x)f(x))|₀ᵗ + ∫₀ᵗ e^(t-x)f'(x)dx ∧
        iterate(m times) →
        I(t) = e^t Σ_{j=0}^m f^(j)(0) - Σ_{j=0}^m f^(j)(t)
    ]] →

[bound_development ↔
    let(f(x) = Σaᵢxⁱ) →
    F(x) := Σ|aᵢ|xⁱ →
    |I(t)| ≤ ∫₀ᵗ |e^(t-x)f(x)|dx ≤ |t|e^t·F(|t|)] →

[transcendence_proof_strategy ↔
    contradict_assumption ↔ [
        assume(α algebraic) →
        exponential_form ↔ show algebraic form ∧
        define(J) ↔ J = linear_combination(I-values) ∧
        derive_bounds ↔ [
            lower_bound(J) ≥ (p-1)! ∧
            upper_bound(J) ≤ Ce^p
        ]
    ] →

    key_polynomial ↔ 
        f(x) := x^(p-1)(x-1)^p...(x-n)^p where p prime ∧
        large enough] →
        
    contradiction_argument ↔ 
        for p sufficiently large,
        (p-1)! > ce^p →
        incompatible_bounds ∧
        therefore ↔ assumption_false]

∴ Proved.
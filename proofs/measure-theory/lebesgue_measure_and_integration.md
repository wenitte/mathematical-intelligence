theorem_definition(Lebesgue_Integration) ↔
    [LInt_p ↔
        f: E → ℝ̄,
        LInt_p(f) := sup{z ∈ ℝ̄ | ∃g: E → ℝ, 
            SF(gen,g) ∧ non_neg(g) ∧ 
            (∀x, g(x) ≤ f(x)) ∧
            LInt_SFp(μ,g) = z}] →

    [BInt ↔
        f: X → E,
        BInt(bf) := lim_{n→∞} BInt_sf(μ,seq(bf,n))] →
    
    [Lebesgue_measure ↔
        measure(𝒞_L) := 
        mk_measure(𝒞_L, λ*, 
            λ*_False, λ*_ge_0, 
            Lebesgue_σ_additivity)]

theorem_definition(IVT) ↔
    ∀f: [a,b] → ℝ, continuous(f) ∧
    ∀k ∈ ℝ, ((f(a) < k ∧ k < f(b)) ∨ (f(b) < k ∧ k < f(a))) →
    ∃c ∈ (a,b), f(c) = k →

[WLOG ↔ 
    assume(f(a) < k < f(b)) ∧
    symmetric(case(f(b) < k < f(a)))] →

[supremum_construction ↔
    S := {x ∈ [a,b] | f(x) < k} ∧
    c := sup(S) ∧
    
    endpoint_exclusion ↔ [
        ∀ε > 0, ∃δ > 0, ∀x ∈ (a-δ,a+δ), |f(x) - f(a)| < ε →
        let(ε₁ := (k-f(a))/2) →
        ∃δ₁ > 0, ∀x ∈ (a, a+δ₁), f(x) < k →
        a ∉ sup(S) ∧

        similarly_at_b ↔
        ∃δ₂ > 0, ∀x ∈ (b-δ₂, b), f(x) > k →
        b ∉ sup(S)
    ] →
    
    therefore ↔ c ∈ (a,b)] →

[supremum_properties ↔
    x < c → ∃y ∈ S, x < y ∧
    x > c → ∃y ∉ S, x > y] →

[continuity_argument ↔
    ∀ε > 0, ∃δ > 0, ∀x ∈ (c-δ,c+δ), |f(x) - f(c)| < ε →
    
    left_neighborhood ↔ [
        ∃x₀ ∈ (c-δ,c), f(x₀) < k ∧
        |f(x₀) - f(c)| < ε →
        f(c) < k + ε
    ] ∧
    
    right_neighborhood ↔ [
        ∃x₁ ∈ (c,c+δ), f(x₁) ≥ k ∧
        |f(x₁) - f(c)| < ε →
        f(c) > k - ε
    ]] →

[squeeze_conclusion ↔
    ∀ε > 0, k - ε < f(c) < k + ε →
    |f(c) - k| < ε →
    f(c) = k]

∴ Proved.
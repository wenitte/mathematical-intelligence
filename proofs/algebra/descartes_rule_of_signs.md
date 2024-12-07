theorem_definition(Descartes_Rule_of_Signs) ↔ 
    ∀P ∈ Polynomial(ℝ), 
    strictly_positive_roots(P) = sign_changes(P) - 2k ∧ k ∈ ℕ₀. →

definition(sign_changes) ↔ 
    ∀P = Σ cᵢxⁱ, cᵢ ≠ 0 ∧ ∀i ∈ ℕ, 
    sign_changes(P) = |{i ∈ ℕ | cᵢcᵢ₊₁ < 0}|. →

definition(strictly_positive_roots) ↔ 
    ∀P ∈ Polynomial(ℝ), 
    strictly_positive_roots(P) = |{x ∈ ℝ⁺ | P(x) = 0}| (counting multiplicity). →

lemma_definition(Even_Odd_Roots_Parity) ↔ 
    ∀P ∈ Polynomial(ℝ), 
    leading_coefficient(P) > 0 →
        (P(∞) > 0 ∧ P(0⁺) > 0 → strictly_positive_roots(P) mod 2 = 0) ∧ 
        (P(∞) > 0 ∧ P(0⁺) < 0 → strictly_positive_roots(P) mod 2 = 1). →

proof(Even_Odd_Roots_Parity) ↔ 
    assume ∀P ∈ Polynomial(ℝ), P(x) = Σ cᵢxⁱ, 
        leading_coefficient(P) > 0 → 
        P(∞) > 0 ∧ P(0⁺) > 0 →
        ∃k ∈ ℕ₀, P crosses x-axis exactly 2k times and glances l times 
        (where l ∈ ℕ₀ is arbitrary), →
        strictly_positive_roots(P) = 2k (even). →
    ∀P(∞) > 0 ∧ P(0⁺) < 0 →
        P crosses x-axis exactly 2k+1 times, →
        strictly_positive_roots(P) = 2k+1 (odd). →

proof(Descartes_Rule_of_Signs) ↔ 
    assume ∀P ∈ Polynomial(ℝ), strictly_positive_roots(P) mod 2 = sign_changes(P) mod 2 →
    let degree(P) = n, →
    induct on n: →
        base_case: n = 0 →
            ∀P = constant, strictly_positive_roots(P) = 0, →
            sign_changes(P) = 0, →
            strictly_positive_roots(P) = sign_changes(P). →
        induction_step: assume ∀P, degree(P) = n, strictly_positive_roots(P) = sign_changes(P) - 2k →
        let Q(x) = P'(x), →
        ∀x₁, x₂ ∈ strictly_positive_roots(P), x₁ ≠ x₂ →
        Rolle's_Theorem → ∃c ∈ (x₁, x₂), Q(c) = 0, →
        strictly_positive_roots(Q) ≥ strictly_positive_roots(P) - 1 →
        strictly_positive_roots(P) = sign_changes(P) - 2k. →
    conclude ∀P ∈ Polynomial(ℝ), strictly_positive_roots(P) = sign_changes(P) - 2k, k ∈ ℕ₀. ∎
theorem(cauchy_schwarz_inequality) ↔
    ∀a, b ∈ ℝⁿ →
    ((∑(i, 1, n, aᵢ²))(∑(i, 1, n, bᵢ²)) ≥ (∑(i, 1, n, aᵢbᵢ))² ∧
    equality ⇔ ∃λ ∈ ℝ → ∀i ∈ {1, ..., n}, aᵢ = λbᵢ) →

proof(cauchy_schwarz_inequality) ↔
    assume(a, b ∈ ℝⁿ) ∧

    section(expansion_and_setup) ↔
        let(z(t) = ∑(i, 1, n, (aᵢ - t bᵢ)²)) ∧
        z(t) ≥ 0 ∀t ∈ ℝ ∧
        z(t) = ∑(i, 1, n, aᵢ²) - 2t∑(i, 1, n, aᵢbᵢ) + t²∑(i, 1, n, bᵢ²) ∧
        let(A = ∑(i, 1, n, aᵢ²) ∧ B = ∑(i, 1, n, bᵢ²) ∧ C = ∑(i, 1, n, aᵢbᵢ)) →
        z(t) = Bt² - 2Ct + A ∧

    section(discriminant_analysis) ↔
        discriminant(Δ = (-2C)² - 4(B)(A)) ≤ 0 ∧
        4C² - 4AB ≤ 0 ↔
        C² ≤ AB ∧

    section(final_result) ↔
        rewrite(C = ∑(i, 1, n, aᵢbᵢ) ∧ A = ∑(i, 1, n, aᵢ²) ∧ B = ∑(i, 1, n, bᵢ²)) →
        (∑(i, 1, n, aᵢbᵢ))² ≤ (∑(i, 1, n, aᵢ²))(∑(i, 1, n, bᵢ²)) ∧

    section(equality_condition) ↔
        equality ⇔ z(t) = 0 for some t ∈ ℝ ∧
        z(t) = 0 ↔ ∃λ ∈ ℝ → ∀i ∈ {1, ..., n}, aᵢ = λbᵢ →

    qed.
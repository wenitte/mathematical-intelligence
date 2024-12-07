theorem_definition(geometric_partial_sum) ↔
    Sₙ = ∑_{i=1}^n a_i = a(1 - rⁿ) / (1 - r) for r ≠ 1 →

proof(geometric_partial_sum) ↔
    let Sₙ = a + ar + ar² + ... + arⁿ⁻² + arⁿ⁻¹ →
    reverse_terms ↔ Sₙ = arⁿ⁻¹ + arⁿ⁻² + ... + ar² + ar + a →
    factor_out_a ↔ Sₙ = a(rⁿ⁻¹ + rⁿ⁻² + ... + r² + r + 1) →
    property_of_polynomials ↔
        ∑_{k=0}^{n-1} r^k = (rⁿ - 1) / (r - 1) for r ≠ 1 →
    substitute_into_Sₙ ↔
        Sₙ = a[(rⁿ - 1) / (r - 1)] →
    simplify_fraction ↔
        Sₙ = a(1 - rⁿ) / (1 - r) →

conclusion ↔ Sₙ = a(1 - rⁿ) / (1 - r) for r ≠ 1 ∴ Proved.
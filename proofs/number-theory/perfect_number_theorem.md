theorem_definition(perfect_number) ↔
    ∀k ∈ ℕ, k > 1 →
    (2ᵏ - 1 ∈ prime_numbers →
    n := 2ᵏ⁻¹(2ᵏ - 1) →
    perfect(n) ∧
    (∀n ∈ even_perfect_numbers →
    n = 2ᵏ⁻¹(2ᵏ - 1)))

proof(perfect_number) ↔
    assume(k ∈ ℕ ∧ k > 1 ∧ p = 2ᵏ - 1 ∧ p ∈ prime_numbers ∧ n := 2ᵏ⁻¹p) →
    [
        σ(n) = σ(2ᵏ⁻¹)σ(p) ∧
        σ(p) = p + 1 = 2ᵏ →
        σ(n) = (2ᵏ⁻¹)2ᵏ →
        σ(n) = 2n →
        perfect(n)
    ] ∧
    assume(n ∈ even_perfect_numbers ∧ n = 2ᵏ⁻¹m ∧ m ∈ odd_numbers ∧ k > 2) →
    [
        σ(2ᵏ⁻¹m) = σ(2ᵏ⁻¹)σ(m) ∧
        σ(2ᵏ⁻¹) = 2ᵏ - 1 →
        σ(n) = 2n →
        2ᵏm = (2ᵏ⁻¹)σ(m) →
        2ᵏ⁻¹ | 2ᵏm →
        2ᵏ⁻¹ | m →
        m = (2ᵏ⁻¹)M →
        substitute_into(2ᵏm = (2ᵏ⁻¹)σ(m)) →
        divide_by(2ᵏ⁻¹) →
        2ᵏM = σ(m) ∧
        σ(m) > m + M →
        σ(m) = m + M →
        m ∈ prime_numbers ∧ M = 1 →
        m = 2ᵏ⁻¹ ∧
        n = 2ᵏ⁻¹(2ᵏ - 1)
    ] ∧
    ∴ Proved
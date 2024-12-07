theorem(sum_of_powers) ↔ 
    ∀n ∈ ℕ, 
    S₁ = ∑ᵢ=1ⁿ i = n(n + 1) / 2 ∧ 
    S₂ = ∑ᵢ=1ⁿ i² = n(n + 1)(2n + 1) / 6 ∧ 
    S₃ = ∑ᵢ=1ⁿ i³ = [n(n + 1) / 2]² 

proof(sum_of_powers) ↔ 
    assume(n ∈ ℕ) →

    define_S₁ ↔ 
        ∑ᵢ=1ⁿ i = 1 + 2 + 3 + ... + n →
        rearrange(as telescoping series) →
        express(as closed form n(n + 1) / 2) →
        prove(by induction):

            base_case: n = 1 → ∑ᵢ=1ⁿ i = 1 = 1(1 + 1) / 2 →
            inductive_step: 
                assume(∑ᵢ=1ᵏ i = k(k + 1) / 2) →
                show(∑ᵢ=1ᵏ⁺¹ i = (k + 1)(k + 2) / 2) →
                use(expansion: (k(k + 1) / 2) + (k + 1)) →
                simplify → S₁ is valid ∧ proven ∧

    define_S₂ ↔ 
        ∑ᵢ=1ⁿ i² = 1² + 2² + ... + n² →
        express(as closed form n(n + 1)(2n + 1) / 6) →
        prove(by induction):

            base_case: n = 1 → ∑ᵢ=1ⁿ i² = 1² = 1(1 + 1)(2(1) + 1) / 6 →
            inductive_step: 
                assume(∑ᵢ=1ᵏ i² = k(k + 1)(2k + 1) / 6) →
                show(∑ᵢ=1ᵏ⁺¹ i² = (k + 1)(k + 2)(2(k + 1) + 1) / 6) →
                use(expansion: (k(k + 1)(2k + 1) / 6) + (k + 1)²) →
                simplify → S₂ is valid ∧ proven ∧

    define_S₃ ↔ 
        ∑ᵢ=1ⁿ i³ = 1³ + 2³ + ... + n³ →
        express(as closed form [n(n + 1) / 2]²) →
        prove(by induction):

            base_case: n = 1 → ∑ᵢ=1ⁿ i³ = 1³ = [1(1 + 1) / 2]² →
            inductive_step: 
                assume(∑ᵢ=1ᵏ i³ = [k(k + 1) / 2]²) →
                show(∑ᵢ=1ᵏ⁺¹ i³ = [(k + 1)(k + 2) / 2]²) →
                use(expansion: ([k(k + 1) / 2]² + (k + 1)³)) →
                simplify → S₃ is valid ∧ proven.

theorem_definition(FTA) ↔
    ∀n ∈ ℤ⁺, n > 1 →
    ∃!{pᵢ ∈ ℙ, nᵢ ∈ ℕ⁺}ᵏᵢ₌₁, n = ∏ᵏᵢ₌₁ pᵢⁿⁱ →

[lemma_1(gcd_property) ↔
    m|pq ∧ gcd(m,p) = 1 →
    m|q] →

[lemma_2(Euclid) ↔
    ∀p ∈ ℙ, ∀{aᵢ}ⁿᵢ₌₁ ⊆ ℕ,
    p|∏ⁿᵢ₌₁aᵢ →
    ∃k ∈ {1,...,n}, p|aₖ] →

[existence_proof ↔
    base_case ↔ n = 2 ∧
    inductive_step ↔ [
        assume(∀k < n, k = product_of_primes) ∧
        n composite →
        ∃a,b ∈ ℕ, 1 < a,b < n ∧ n = ab →
        induction → n = product_of_primes
    ]] →

[uniqueness_proof ↔
    assume ↔ p₁ᵐ¹...pₖᵐᵏ = q₁ⁿ¹...qₖⁿᵏ ∧
    
    prime_analysis ↔ [
        p₁|LHS → p₁|RHS →
        by_lemma_2 ↔ ∃i, p₁ = qᵢ ∧
        cancel_equal_powers →
        induction_on_remaining_factors
    ] →

    exponent_match ↔ [
        m₁ > n₁ impossible ∧
        m₁ < n₁ impossible →
        m₁ = n₁ ∧
        continue_process
    ]] →

[lcm_application ↔
    [a,b] := min{n ∈ ℕ⁺ | a|n ∧ b|n} ∧
    by_FTA ↔ [a,b] = q₁...qₘp₁...pₗr₁...rₙ ∧
    therefore ↔ [a,b](a,b) = ab]

∴ Proved.
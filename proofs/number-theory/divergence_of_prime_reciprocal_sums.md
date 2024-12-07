theorem_definition(Prime_Reciprocal_Divergence) ↔
    ¬(Σᵢ₌₁^∞ 1/pᵢ converges) where pᵢ is ith prime →

[contradiction_setup ↔
    assume ↔ Σᵢ₌₁^∞ 1/pᵢ converges →
    ∃k minimal, Σᵢ₌ₖ₊₁^∞ 1/pᵢ < 1/2 ∧
    
    define_set ↔ 
        Mₓ := {n ∈ {1,...,x} | ∀i > k, pᵢ ∤ n} ∧
        Nᵢ,ₓ := {n ∈ {1,...,x} | pᵢ | n}] →

[upper_bound ↔
    ∀n ∈ Mₓ, ∃m,r ∈ ℕ⁺, [
        n = m²r ∧
        square_free(r) ∧
        prime_factors(r) ⊆ {p₁,...,pₖ}
    ] →
    |possibilities(r)| ≤ 2ᵏ ∧
    |possibilities(m)| ≤ √x →
    |Mₓ| ≤ 2ᵏ√x] →

[lower_bound ↔
    set_complement ↔ 
        {1,...,x} \ Mₓ = ∪ᵢ₌ₖ₊₁^∞ Nᵢ,ₓ ∧
    counting_argument ↔ [
        |Nᵢ,ₓ| ≤ ⌊x/pᵢ⌋ →
        x - |Mₓ| ≤ Σᵢ₌ₖ₊₁^∞ |Nᵢ,ₓ| < Σᵢ₌ₖ₊₁^∞ x/pᵢ < x/2
    ] →
    |Mₓ| > x/2] →

[contradiction ↔
    let(x ≥ 2^(2k+2)) →
    x/2 > 2ᵏ√x →
    |Mₓ| > x/2 > 2ᵏ√x ≥ |Mₓ| →
    contradiction]

∴ Proved by contradiction.
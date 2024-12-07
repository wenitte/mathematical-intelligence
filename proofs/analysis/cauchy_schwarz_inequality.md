theorem(cauchy_schwarz_inequality) ↔ 
    ∀(a₁, a₂, ..., aₙ) ∈ ℝⁿ ∧ (b₁, b₂, ..., bₙ) ∈ ℝⁿ →
    [ (∑ᵢ=1ⁿ aᵢ²)(∑ᵢ=1ⁿ bᵢ²) ≥ (∑ᵢ=1ⁿ aᵢbᵢ)² ] ∧ 
    equality(iff: proportional(aₖ = λbₖ for all k ∈ {1, 2, ..., n}))

proof(cauchy_schwarz_inequality) ↔ 
    assume(a₁, a₂, ..., aₙ ∈ ℝⁿ ∧ b₁, b₂, ..., bₙ ∈ ℝⁿ) →
    let S = ∑ᵢ=1ⁿ (aᵢbⱼ - aⱼbᵢ)² →
    expand(S) ↔ 
        S = ∑ᵢ=1ⁿ ∑ⱼ=1ⁿ (aᵢ²bⱼ² + aⱼ²bᵢ² - 2aᵢbⱼaⱼbᵢ) →
        group_terms →
        S = 2(∑ᵢ=1ⁿ aᵢ²)(∑ᵢ=1ⁿ bᵢ²) - 2(∑ᵢ=1ⁿ aᵢbᵢ)² →
    S ≥ 0 →
    conclude( (∑ᵢ=1ⁿ aᵢ²)(∑ᵢ=1ⁿ bᵢ²) ≥ (∑ᵢ=1ⁿ aᵢbᵢ)² ).

proof(equality_condition) ↔ 
    assume(S = 0) →
    infer(∀i, j ∈ {1, 2, ..., n}, (aᵢbⱼ - aⱼbᵢ) = 0) →
    rearrange(aᵢ / bᵢ = aⱼ / bⱼ = λ) →
    conclude(proportional(aₖ = λbₖ ∀k ∈ {1, 2, ..., n}))
manifold_definition(M) ↔
    X Hausdorff space
    ∀x ∈ X, ∃U open, x ∈ U
    ∃φ: U → φ(U) ⊆ ℝⁿ homeomorphism
    φ(U) open in ℝⁿ
→

[atlas_definition(A) ↔
    𝓐 = {(Uᵢ,φᵢ)}_{i∈I}
    ∪{Uᵢ : i ∈ I} = X
    Uᵢ ∩ Uⱼ ≠ ∅ →
    φⱼ ∘ φᵢ⁻¹: φᵢ(Uᵢ ∩ Uⱼ) → φⱼ(Uᵢ ∩ Uⱼ)
    homeomorphism]
→

[second_countable(S) ↔
    𝓐 countable atlas
    → X second countable]
→

[dimension(D) ↔
    dim(X) = n
    ↔ ∀x ∈ X, ∃U open, x ∈ U
    U ≅ open subset of ℝⁿ
    ∄V open ⊆ X, V ≅ open subset of ℝᵐ
    m ≠ n]

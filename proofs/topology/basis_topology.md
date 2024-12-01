basis_definition(B) ↔
    𝓑 collection of subsets of X
    ∀x ∈ X, ∃B ∈ 𝓑, x ∈ B
    ∀B₁,B₂ ∈ 𝓑, ∀x ∈ B₁ ∩ B₂
    ∃B₃ ∈ 𝓑, x ∈ B₃ ⊆ B₁ ∩ B₂
→

[topology_generation(T) ↔
    U ⊆ X open
    ↔ ∀x ∈ U, ∃B ∈ 𝓑
    x ∈ B ⊆ U]
→

[basis_intersection(I) ↔
    𝓑₁,𝓑₂ bases
    ∀B₁ ∈ 𝓑₁, ∀B₂ ∈ 𝓑₂
    B₁ ∩ B₂ = ∪{B ∈ 𝓑₁ : B ⊆ B₁ ∩ B₂}]

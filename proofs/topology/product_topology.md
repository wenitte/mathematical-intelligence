product_definition(P) ↔
    {(Xᵢ,τᵢ)}_{i∈I} family of spaces
    X = ∏{Xᵢ : i ∈ I}
    πⱼ: X → Xⱼ, πⱼ((xᵢ)_{i∈I}) = xⱼ
→

[basis_sets(B) ↔
    𝓑 = {∏{Uᵢ : i ∈ I} : Uᵢ ∈ τᵢ
         F ⊆ I finite
         Uᵢ = Xᵢ, ∀i ∉ F}]
→

[universal_property(U) ↔
    f: (Y,σ) → X
    f continuous ↔ ∀i ∈ I
    πᵢ ∘ f continuous]
→

[compactness(C) ↔
    ∏{Xᵢ : i ∈ I} compact
    ↔ ∀i ∈ I, Xᵢ compact
    ∧ |I| < ℵ₀]

filter_definition(F) ↔
    𝓕 ⊆ P(X)
    ∅ ∉ 𝓕
    A,B ∈ 𝓕 → A ∩ B ∈ 𝓕
    A ∈ 𝓕, A ⊆ B → B ∈ 𝓕
→

[convergence(C) ↔
    𝓕 filter on X
    x ∈ X
    𝓕 → x ↔ ∀U open, x ∈ U
    → U ∈ 𝓕]
→

[ultrafilter(U) ↔
    𝓕 maximal filter
    ∀A ⊆ X
    A ∈ 𝓕 ∨ (X\A) ∈ 𝓕]
→

[compactness_filters(K) ↔
    X compact
    ↔ ∀𝓕 filter on X
    ∃x ∈ X, 𝓕 → x]

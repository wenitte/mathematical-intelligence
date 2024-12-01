continuity_definition(C) ↔
    f: X → Y metric spaces
    x₀ ∈ X
    f continuous at x₀ ↔ ∀ε > 0, ∃δ > 0
    d(x,x₀) < δ → d(f(x),f(x₀)) < ε
→

[open_preimage(O) ↔
    f continuous ↔ ∀U ⊆ Y open
    f⁻¹(U) ⊆ X open]
→

[sequential_criterion(S) ↔
    f continuous at x₀
    ↔ ∀{xₙ} ⊆ X, xₙ → x₀
    → f(xₙ) → f(x₀)]
→

[composition_continuous(K) ↔
    f: X → Y, g: Y → Z continuous
    → g ∘ f continuous]

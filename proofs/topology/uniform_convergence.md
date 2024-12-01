uniform_definition(U) ↔
    {fₙ} sequence of functions X → Y
    f: X → Y
    d metric on Y
    fₙ ⇒ f ↔ ∀ε > 0, ∃N ∈ ℕ
    n ≥ N → ∀x ∈ X, d(fₙ(x),f(x)) < ε
→

[pointwise_weaker(P) ↔
    fₙ ⇒ f → ∀x ∈ X, fₙ(x) → f(x)
    ∃{fₙ}, ∀x ∈ X, fₙ(x) → f(x) ∧ fₙ ⇏ f]
→

[continuity_preservation(C) ↔
    fₙ continuous ∀n ∈ ℕ
    fₙ ⇒ f
    X compact
    → f continuous]
→

[composition_uniform(K) ↔
    fₙ ⇒ f, X → Y
    g continuous, Y → Z
    → g ∘ fₙ ⇒ g ∘ f]

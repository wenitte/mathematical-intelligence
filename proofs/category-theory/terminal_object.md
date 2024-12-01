terminal_definition(T) ↔
    t ∈ Ob(C)
    ∀x ∈ Ob(C), |Mor(x,t)| = 1
→

[uniqueness_proof(U) ↔
    t₁,t₂ ∈ Ob(C)
    |Mor(x,t₁)| = |Mor(x,t₂)| = 1, ∀x ∈ Ob(C)
    f ∈ Mor(t₁,t₂), g ∈ Mor(t₂,t₁)
    g ∘ f = id_{t₁} ∧ f ∘ g = id_{t₂}
    → t₁ ≅ t₂]
→

[singleton_terminal(S) ↔
    {∗} ∈ Ob(Set)
    ∀x ∈ Ob(Set), Mor(x,{∗}) = {f_x}
    → |Mor(x,{∗})| = 1]

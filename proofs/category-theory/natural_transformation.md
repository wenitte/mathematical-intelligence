transformation_definition(T) ↔
    F,G: C → D functors
    α_x ∈ Mor(F(x),G(x)), ∀x ∈ Ob(C)
→

[naturality_square(N) ↔
    ∀f ∈ Mor(x,y)
    G(f) ∘ α_x = α_y ∘ F(f)]
→

[vertical_composition(V) ↔
    α: F ⇒ G, β: G ⇒ H
    (β ∘ α)_x = β_x ∘ α_x
    → β ∘ α: F ⇒ H]
→

[horizontal_composition(H) ↔
    F,G: C → D, H,K: D → E
    α: F ⇒ G, β: H ⇒ K
    (β ∗ α)_x = β_{G(x)} ∘ H(α_x)
    = K(α_x) ∘ β_{F(x)}]

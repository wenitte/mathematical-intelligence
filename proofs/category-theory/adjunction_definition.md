adjunction_definition(A) ↔
    F: C → D, G: D → C functors
    ∀x ∈ Ob(C), ∀y ∈ Ob(D)
    Mor(F(x),y) ≅ Mor(x,G(y))
→

[unit_counit(U) ↔
    η: 1_C ⇒ G∘F
    ε: F∘G ⇒ 1_D
    (G(ε_x) ∘ η_{G(x)} = id_{G(x)})
    (ε_{F(x)} ∘ F(η_x) = id_{F(x)})]
→

[uniqueness_proof(Q) ↔
    f ∈ Mor(F(x),y)
    g ∈ Mor(x,G(y))
    f ↦ G(f) ∘ η_x
    F(g) ∘ ε_y ↤ g
    → f ≅ g]

unit_counit_definition(U) ↔
    F: C → D, G: D → C
    η: 1_C ⇒ G∘F
    ε: F∘G ⇒ 1_D
→

[hom_set_bijection(H) ↔
    φ_{x,y}: Mor(F(x),y) → Mor(x,G(y))
    φ_{x,y}(f) = G(f) ∘ η_x
    φ⁻¹_{x,y}(g) = ε_y ∘ F(g)]
→

[triangular_identities(T) ↔
    G(ε_x) ∘ η_{G(x)} = id_{G(x)}
    ε_{F(x)} ∘ F(η_x) = id_{F(x)}]
→

[natural_isomorphism(N) ↔
    Mor(F(x),y) ≅ Mor(x,G(y))
    → φ_{x,y} is iso
    → (H ↔ T)]

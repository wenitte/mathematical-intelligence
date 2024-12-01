zero_definition(Z) ↔
    z ∈ Ob(C)
    |Mor(z,x)| = |Mor(x,z)| = 1, ∀x ∈ Ob(C)
→

[zero_morphism(M) ↔
    ∀a,b ∈ Ob(C)
    0_{a,b} = i_b ∘ p_a
    p_a ∈ Mor(a,z), i_b ∈ Mor(z,b)]
→

[uniqueness_proof(U) ↔
    z₁,z₂ ∈ Ob(C)
    |Mor(z₁,x)| = |Mor(z₂,x)| = 1
    |Mor(x,z₁)| = |Mor(x,z₂)| = 1
    f ∈ Mor(z₁,z₂), g ∈ Mor(z₂,z₁)
    g ∘ f = id_{z₁} ∧ f ∘ g = id_{z₂}
    → z₁ ≅ z₂]

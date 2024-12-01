coproduct_definition(C) ↔
    a,b ∈ Ob(C)
    s ∈ Ob(C)
    i₁ ∈ Mor(a,s), i₂ ∈ Mor(b,s)
→

[universal_property(U) ↔
    ∀x ∈ Ob(C), ∀f ∈ Mor(a,x), ∀g ∈ Mor(b,x)
    ∃!h ∈ Mor(s,x)
    h ∘ i₁ = f ∧ h ∘ i₂ = g]
→

[uniqueness_proof(Q) ↔
    s,t ∈ Ob(C)
    i₁ˢ ∈ Mor(a,s), i₂ˢ ∈ Mor(b,s)
    i₁ᵗ ∈ Mor(a,t), i₂ᵗ ∈ Mor(b,t)
    ∃!f ∈ Mor(s,t), ∃!g ∈ Mor(t,s)
    g ∘ f = id_s ∧ f ∘ g = id_t
    → s ≅ t]

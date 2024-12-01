pushout_definition(P) ↔
    f ∈ Mor(a,b), g ∈ Mor(a,c)
    p ∈ Ob(C)
    i₁ ∈ Mor(b,p), i₂ ∈ Mor(c,p)
    i₁ ∘ f = i₂ ∘ g
→

[universal_property(U) ↔
    ∀x ∈ Ob(C), ∀h₁ ∈ Mor(b,x), ∀h₂ ∈ Mor(c,x)
    h₁ ∘ f = h₂ ∘ g
    → ∃!u ∈ Mor(p,x)
    u ∘ i₁ = h₁ ∧ u ∘ i₂ = h₂]
→

[uniqueness_proof(Q) ↔
    p,q ∈ Ob(C)
    i₁ᵖ ∈ Mor(b,p), i₂ᵖ ∈ Mor(c,p)
    i₁ᵍ ∈ Mor(b,q), i₂ᵍ ∈ Mor(c,q)
    ∃!v ∈ Mor(p,q), ∃!w ∈ Mor(q,p)
    w ∘ v = id_p ∧ v ∘ w = id_q
    → p ≅ q]

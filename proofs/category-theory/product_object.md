product_definition(P) ↔
    a,b ∈ Ob(C)
    p ∈ Ob(C)
    π₁ ∈ Mor(p,a), π₂ ∈ Mor(p,b)
→

[universal_property(U) ↔
    ∀x ∈ Ob(C), ∀f ∈ Mor(x,a), ∀g ∈ Mor(x,b)
    ∃!h ∈ Mor(x,p)
    π₁ ∘ h = f ∧ π₂ ∘ h = g]
→

[uniqueness_proof(Q) ↔
    p,q ∈ Ob(C)
    π₁ᵖ ∈ Mor(p,a), π₂ᵖ ∈ Mor(p,b)
    π₁ᵍ ∈ Mor(q,a), π₂ᵍ ∈ Mor(q,b)
    ∃!f ∈ Mor(p,q), ∃!g ∈ Mor(q,p)
    g ∘ f = id_p ∧ f ∘ g = id_q
    → p ≅ q]

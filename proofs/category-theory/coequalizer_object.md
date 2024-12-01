coequalizer_definition(C) ↔
    f,g ∈ Mor(a,b)
    q ∈ Ob(C)
    p ∈ Mor(b,q)
    p ∘ f = p ∘ g
→

[universal_property(U) ↔
    ∀x ∈ Ob(C), ∀h ∈ Mor(b,x)
    h ∘ f = h ∘ g
    → ∃!u ∈ Mor(q,x)
    u ∘ p = h]
→

[uniqueness_proof(Q) ↔
    q₁,q₂ ∈ Ob(C)
    p₁ ∈ Mor(b,q₁), p₂ ∈ Mor(b,q₂)
    p₁ ∘ f = p₁ ∘ g ∧ p₂ ∘ f = p₂ ∘ g
    ∃!v ∈ Mor(q₁,q₂), ∃!w ∈ Mor(q₂,q₁)
    w ∘ v = id_{q₁} ∧ v ∘ w = id_{q₂}
    → q₁ ≅ q₂]

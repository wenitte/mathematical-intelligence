equalizer_definition(E) ↔
    f,g ∈ Mor(a,b)
    e ∈ Ob(C)
    i ∈ Mor(e,a)
    f ∘ i = g ∘ i
→

[universal_property(U) ↔
    ∀x ∈ Ob(C), ∀h ∈ Mor(x,a)
    f ∘ h = g ∘ h
    → ∃!u ∈ Mor(x,e)
    i ∘ u = h]
→

[uniqueness_proof(Q) ↔
    e₁,e₂ ∈ Ob(C)
    i₁ ∈ Mor(e₁,a), i₂ ∈ Mor(e₂,a)
    f ∘ i₁ = g ∘ i₁ ∧ f ∘ i₂ = g ∘ i₂
    ∃!v ∈ Mor(e₁,e₂), ∃!w ∈ Mor(e₂,e₁)
    w ∘ v = id_{e₁} ∧ v ∘ w = id_{e₂}
    → e₁ ≅ e₂]

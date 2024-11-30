
epi_definition(E) ↔
    e ∈ Mor(a,b)
    ∀x ∈ Ob(C), ∀f,g ∈ Mor(b,x)
    f ∘ e = g ∘ e → f = g
→

[right_cancellation(R) ↔
    e ∈ Mor(a,b) is epi
    ↔ ∀f,g ∈ Mor(b,x), f ∘ e = g ∘ e → f = g]
→

[composition_epi(C) ↔
    e₁ ∈ Mor(a,b), e₂ ∈ Mor(b,c)
    e₁,e₂ are epi
    → e₂ ∘ e₁ is epi]
→

[iso_is_epi(I) ↔
    f ∈ Mor(a,b) is iso
    → f is epi
    proof: g₁ ∘ f = g₂ ∘ f
    → (g₁ ∘ f) ∘ f⁻¹ = (g₂ ∘ f) ∘ f⁻¹
    → g₁ = g₂]

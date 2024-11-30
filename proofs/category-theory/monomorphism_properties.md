mono_definition(M) ↔
    m ∈ Mor(b,c)
    ∀x ∈ Ob(C), ∀f,g ∈ Mor(x,b)
    m ∘ f = m ∘ g → f = g
→

[left_cancellation(L) ↔
    m ∈ Mor(b,c) is mono
    ↔ ∀f,g ∈ Mor(x,b), m ∘ f = m ∘ g → f = g]
→

[composition_mono(C) ↔
    m₁ ∈ Mor(a,b), m₂ ∈ Mor(b,c)
    m₁,m₂ are mono
    → m₂ ∘ m₁ is mono]
→

[iso_is_mono(I) ↔
    f ∈ Mor(a,b) is iso
    → f is mono
    proof: f ∘ g₁ = f ∘ g₂
    → f⁻¹ ∘ (f ∘ g₁) = f⁻¹ ∘ (f ∘ g₂)
    → g₁ = g₂]

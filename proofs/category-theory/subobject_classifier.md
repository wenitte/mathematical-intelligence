classifier_definition(C) ↔
    Ω ∈ Ob(C)
    true ∈ Mor(1,Ω)
    1 = terminal object
→

[pullback_property(P) ↔
    ∀m ∈ Mor(a,b), m mono
    ∃!χ_m ∈ Mor(b,Ω)
    {1 --true→ Ω, a --m→ b --χ_m→ Ω} is pullback]
→

[uniqueness_proof(U) ↔
    m₁,m₂ ∈ Mor(a,b) mono
    χ_m₁,χ_m₂ ∈ Mor(b,Ω)
    χ_m₁ = χ_m₂
    → ∃!i ∈ Mor(a,a)
    i is iso
    m₁ = m₂ ∘ i]

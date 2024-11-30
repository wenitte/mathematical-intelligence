pullback_definition(P) ↔
    f ∈ Mor(b,d), g ∈ Mor(c,d)
    p₁ ∈ Mor(a,b), p₂ ∈ Mor(a,c)
    f ∘ p₁ = g ∘ p₂
→

[universal_property(U) ↔
    ∀x ∈ Ob(C), ∀h₁ ∈ Mor(x,b), ∀h₂ ∈ Mor(x,c)
    f ∘ h₁ = g ∘ h₂
    → ∃!u ∈ Mor(x,a),
       p₁ ∘ u = h₁ ∧ p₂ ∘ u = h₂]
→

[uniqueness_proof(Q) ↔
    v ∈ Mor(x,a)
    p₁ ∘ v = h₁ ∧ p₂ ∘ v = h₂
    → v = u]

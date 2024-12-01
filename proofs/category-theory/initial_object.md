initial_definition(I) ↔
    i ∈ Ob(C)
    ∀x ∈ Ob(C), |Mor(i,x)| = 1
→

[uniqueness_proof(U) ↔
    i₁,i₂ ∈ Ob(C)
    |Mor(i₁,x)| = |Mor(i₂,x)| = 1, ∀x ∈ Ob(C)
    f ∈ Mor(i₁,i₂), g ∈ Mor(i₂,i₁)
    g ∘ f = id_{i₁} ∧ f ∘ g = id_{i₂}
    → i₁ ≅ i₂]
→

[empty_initial(E) ↔
    ∅ ∈ Ob(Set)
    ∀x ∈ Ob(Set), Mor(∅,x) = {f_∅}
    → |Mor(∅,x)| = 1]

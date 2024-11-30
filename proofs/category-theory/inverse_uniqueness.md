inverse_definition(I) ↔
    f ∈ Mor(a,b)
    g ∈ Mor(b,a)
    g ∘ f = id_a ∧ f ∘ g = id_b
→

[uniqueness_proof(U) ↔
    h ∈ Mor(b,a)
    h ∘ f = id_a ∧ f ∘ h = id_b
→
    h = h ∘ (f ∘ g) = (h ∘ f) ∘ g = id_a ∘ g = g]

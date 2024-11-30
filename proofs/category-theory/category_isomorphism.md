isomorphism_definition(I) ↔
    f ∈ Mor(a,b)
    ∃g ∈ Mor(b,a), g ∘ f = id_a ∧ f ∘ g = id_b
→

[iso_relation(R) ↔
    a ≅ b ↔ ∃f ∈ Mor(a,b), f is isomorphism]
→

[equivalence_proof(E) ↔
    reflexive: id_a: a ≅ a
    symmetric: f: a ≅ b → f⁻¹: b ≅ a
    transitive: f: a ≅ b ∧ g: b ≅ c → g ∘ f: a ≅ c]
→

[composition_iso(C) ↔
    f ∈ Mor(a,b), g ∈ Mor(b,c)
    f,g are isomorphisms
    → (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹]

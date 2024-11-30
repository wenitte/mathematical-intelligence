functor_composition(F) ↔
    F: C → D  // Functor between categories C and D
    ∀x ∈ Ob(C), F(id_x) = id_{F(x)}

[category_axioms(A) ↔
    ∀c ∈ C, ∃ id_c: c → c
    ∀f: a → b, id_b ∘ f = f ∧ f ∘ id_a = f]
→

[functor_properties(P) ↔
    F(g ∘ f) = F(g) ∘ F(f)
    F: Mor(C) → Mor(D)]
→

[identity_preservation(I) ↔
    Let x ∈ Ob(C)
    F(id_x) ∘ F(id_x) = F(id_x ∘ id_x)  // Functor property
    = F(id_x)                            // Category axiom
    ∧ F(id_x) is an endomorphism on F(x)
    ∴ F(id_x) = id_{F(x)}]

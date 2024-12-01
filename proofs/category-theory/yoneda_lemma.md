yoneda_definition(Y) ↔
    C small category
    h_a = Mor(-,a): C → Set
    F: C → Set functor
    Nat(h_a,F) = {α: h_a ⇒ F}
→

[evaluation_map(E) ↔
    ev_a: Nat(h_a,F) → F(a)
    ev_a(α) = α_a(id_a)]
→

[bijection_proof(B) ↔
    ∀α ∈ Nat(h_a,F), ∀f ∈ Mor(x,a)
    α_x(f) = F(f)(α_a(id_a))
    → ev_a is iso]
→

[correspondence(C) ↔
    Nat(h_a,F) ≅ F(a)
    ∀a ∈ Ob(C), ∀F: C → Set]

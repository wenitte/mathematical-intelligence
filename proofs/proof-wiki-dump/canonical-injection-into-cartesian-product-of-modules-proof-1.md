theorem Canonical_Injection_Monomorphism() {
  assert(
    ∀R[Ring(R)] ∧ 
    ∀G[CartesianProduct(G, (G_n))] ∧
    ∀j ∈ [1,n] →
    isMonomorphism(inj_j: G_j → G)
  )
} ↔

proof Canonical_Injection_Monomorphism() {
  setVar(R: Ring) →
  setVar(G: CartesianProduct) →
  setVar(j: ℕ, j ∈ [1,n]) →
  
  assert(
    isMonomorphism(inj_j) ↔ (
      isInjection(inj_j) ∧
      ∀x,y ∈ G_j: inj_j(x +_j y) = inj_j(x) + inj_j(y) ∧
      ∀x_j ∈ G_j: ∀λ ∈ R: inj_j(λ ∘_j x_j) = λ ∘ inj_j(x_j)
    )
  ) →

  lemma Canonical_Injection() {
    assert(
      isInjection(inj_j) ∧
      ∀x,y ∈ G_j: inj_j(x +_j y) = inj_j(x) + inj_j(y)
    )
  } →

  setVar(x_j: G_j) →
  setVar(λ: R) →

  assert(
    inj_j(λ ∘_j x_j) = 
    (e_1, e_2, ..., λ ∘_j x_j, ..., e_n)
  ) by def_canonical_injection →

  assert(
    (e_1, e_2, ..., λ ∘_j x_j, ..., e_n) =
    λ ∘ (e_1, e_2, ..., x_j, ..., e_n)
  ) by def_cartesian_product →

  assert(
    λ ∘ (e_1, e_2, ..., x_j, ..., e_n) =
    λ ∘ inj_j(x_j)
  ) by def_canonical_injection →

  conclude(
    inj_j(λ ∘_j x_j) = λ ∘ inj_j(x_j)
  )
}
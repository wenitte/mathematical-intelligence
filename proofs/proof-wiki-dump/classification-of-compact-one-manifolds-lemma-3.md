theorem Compact_One_Manifolds_Lemma_3() {
  assert(
    ∀X[dim(X) = 1] ∧ ∀L⊆X[∃g: (a,b) → L | g is_diffeomorphism] ⇒
    |cl(L) \ L| ≤ 2
  )
}

proof Compact_One_Manifolds_Lemma_3() {
  setVar(X: Manifold, L: Set, g: Function) →
  assume(g: (a,b) → L is_diffeomorphism) →
  letVar(p ∈ cl(L) \ L) →
  
  lemma Exists_Closed_Interval() {
    assert(∃J⊆X[
      J ≅ [0,1] ∧
      ∃t∈(a,b)[
        g(t) ∈ L ∧
        map(0) = g(t) ∧
        map(1) = p
      ]
    ])
  } →
  
  apply(Exists_Closed_Interval()) →
  letVar(S = {s ∈ (a,t) | g(s) ∈ J}) →
  
  assert(S is_open ∧ S is_closed in (a,b)) →
  assert(S = (a,t) ∨ S = (t,b)) →
  
  conclude(
    ∀p∈cl(L)\L[
      g⁻¹(p) = a ∨ g⁻¹(p) = b
    ] →
    |cl(L) \ L| ≤ 2
  )
}
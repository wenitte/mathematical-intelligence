theorem Closed_Subspace_Banach() {
  assert(
    ∀X[Banach_Space(X) ∧
    ∃Y[Closed_Linear_Subspace(Y,X) ∧
    ∃norm_Y[Restriction(norm_Y, norm_X, Y)]]] →
    Banach_Space(Y)
  )
} ↔

proof Closed_Subspace_Banach() {
  setVar(X: Banach_Space) →
  setVar(Y: Closed_Linear_Subspace(X)) →
  setVar(norm_Y: Restriction(norm_X, Y)) →
  
  lemma Norm_Restriction() {
    assert(Is_Normed_Space(Y, norm_Y))
  } →
  
  assert(∀{yn}[Cauchy_Sequence({yn}, Y) → 
    ∃ε>0 ∃N∈ℕ ∀n,m≥N(
      norm_Y(yn - ym) < ε
    )]
  ) →
  
  assert(
    norm_Y(yn - ym) = norm_X(yn - ym)
  ) →
  
  assert(
    Cauchy_Sequence({yn}, X)
  ) →
  
  assert(
    ∃y∈X[{yn} → y]
  ) →
  
  assert(
    Closed(Y) → y∈Y
  ) →
  
  lemma Convergence_Norm() {
    assert(
      norm_X(yn - y) → 0 ∧
      ∀n∈ℕ[yn - y ∈ Y]
    )
  } →
  
  assert(
    norm_Y(yn - y) → 0
  ) →
  
  assert(
    ∀{yn}[Cauchy_Sequence({yn}, Y) → 
    ∃y∈Y[{yn} → y]]
  ) →
  
  assert(Complete(Y)) →
  assert(Banach_Space(Y))
}
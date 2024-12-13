theorem Arc_Connectedness_Finite_Complement() {
  let T = ⟨S, τ⟩
  assert(
    (T isTopologyOn S) ∧
    (T isFiniteComplement) ∧
    (S isUncountable) ∧
    (ContinuumHypothesis isTrue)
  ) →
  assert(
    (T isArcConnected) ∧
    (T isLocallyArcConnected)
  )
}

proof Arc_Connectedness_Finite_Complement() {
  // First prove arc-connectedness
  setVar(a, b ∈ S | a ≠ b) →
  lemma Card_Subset_Exists() {
    assert(∃X ⊆ S | (a,b ∈ X) ∧ (|X| = |[0,1]|))
  } →
  apply(Card_Subset_Exists()) →
  setVar(f: [0,1] → X | f isBijective) →
  assert(f(0) = a ∧ f(1) = b) →
  
  lemma Points_Are_Closed() {
    assert(
      (T isFiniteComplement) →
      (T isT1) →
      (∀x ∈ S | {x} isClosed)
    )
  } →
  apply(Points_Are_Closed()) →
  assert(f isContinuous) →
  assert(f isArc) →
  assert(∀a,b ∈ S ∃f: [0,1] → S | f isArc ∧ f(0)=a ∧ f(1)=b) →
  assert(T isArcConnected) →
  
  // Then prove locally arc-connected
  setVar(B ∈ basis(T)) →
  setVar(a,b ∈ B) →
  assert(B isUncountable) →
  apply(Card_Subset_Exists() to B) →
  assert(∃f: [0,1] → B | f isArc ∧ f(0)=a ∧ f(1)=b) →
  assert(T isLocallyArcConnected)
}
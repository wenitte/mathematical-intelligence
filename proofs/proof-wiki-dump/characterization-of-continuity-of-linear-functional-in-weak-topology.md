theorem Continuity_LinearFunctional_WeakStar() {
  declare(GF: {ℝ, ℂ}) ∧
  declare(X: NormedVectorSpace(GF)) ∧
  declare(X*: DualSpace(X)) ∧
  declare(w*: WeakStarTopology(X*)) ∧
  declare(X**: SecondDualSpace(X)) ∧
  declare(φ: LinearFunctional(X*, GF)) →
  assert(
    continuous(φ, w*) ↔ ∃x ∈ X: (φ = x∧) 
  ) ∧
  assert(
    (X*, w*)* = ι(X)
  )
}

proof Continuity_LinearFunctional_WeakStar() {
  lemma WeakStar_InitialTopology() {
    assert(
      w* = InitialTopology({x∧ | x ∈ X})
    )
  } →
  
  lemma LinearFunctional_InitialTopology() {
    cite("Continuity_LinearFunctionals_InitialTopology") ∧
    setVar(F: {x∧ | x ∈ X}) →
    assert(
      continuous(φ, w*) ↔ ∃x ∈ X: (φ = x∧)
    )
  } →
  
  apply(WeakStar_InitialTopology()) →
  apply(LinearFunctional_InitialTopology()) →
  assert(conclusion)
}
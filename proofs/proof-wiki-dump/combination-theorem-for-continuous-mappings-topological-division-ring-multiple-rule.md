theorem ContinuousTopologicalDivisionRingMult() {
  assert(
    ∀S(TopSpace(S) ∧
    ∀R(TopDivisionRing(R) ∧
    ∀λ∈R ∧
    ∀f(Continuous(f, S→R))) ⇒
    (Continuous(λ*f, S→R) ∧ Continuous(f*λ, S→R))
  ) where
    (λ*f)(x) := λ * f(x) ∧
    (f*λ)(x) := f(x) * λ
  )
}

proof ContinuousTopologicalDivisionRingMult() {
  setContext(
    S: TopSpace,
    R: TopDivisionRing,
    λ: R,
    f: Continuous(S→R)
  ) →
  
  lemma TopRingProperty() {
    assert(TopDivisionRing(R) → TopRing(R))
  } →
  
  apply(TopRingProperty()) →
  
  lemma TopRingMultRule() {
    assert(
      TopRing(R) ∧ Continuous(f, S→R) →
      (Continuous(λ*f, S→R) ∧ Continuous(f*λ, S→R))
    )
  } →
  
  apply(TopRingMultRule()) →
  
  assert(Continuous(λ*f, S→R) ∧ Continuous(f*λ, S→R))
}
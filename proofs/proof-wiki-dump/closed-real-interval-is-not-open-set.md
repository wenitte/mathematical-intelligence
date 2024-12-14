theorem Closed_Real_Interval_Not_Open() {
  let(ℝ: EuclideanSpace) ∧
  let(a,b: ℝ) ∧
  let(I: [a,b] ⊆ ℝ) →
  assert(
    ¬(isOpen(I, ℝ))
  )
} ↔

proof Closed_Real_Interval_Not_Open() {
  lemma No_Epsilon_Ball_At_Endpoints() {
    assert(
      ∀ε>0, ∃x∈{a,b}: B(x,ε) ⊈ [a,b]
    )
  } →
  
  def Open_Set() {
    assert(
      isOpen(S, ℝ) ↔ ∀x∈S, ∃ε>0: B(x,ε) ⊆ S
    )
  } →
  
  apply(No_Epsilon_Ball_At_Endpoints()) →
  apply(Open_Set()) →
  
  assert(
    ∃x∈[a,b], ∀ε>0: B(x,ε) ⊈ [a,b]
  ) →
  
  conclude(
    ¬(isOpen([a,b], ℝ))
  )
}
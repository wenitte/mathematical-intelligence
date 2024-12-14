theorem CompactComplement_NotUltraconnected() {
  let T = (ℝ, τ) be_topology
  assert(
    isCompactComplementTopology(T) →
    ¬isUltraconnected(T)
  )
}

proof CompactComplement_NotUltraconnected_1() {
  let T = (ℝ, τ) →
  assert(closed_sets(T) ↔ compact_sets(T)) →
  setVar(A = [0,1]) →
  setVar(B = [2,3]) →
  assert(
    isCompact(A) ∧ isCompact(B) →
    isClosed(A) ∧ isClosed(B)
  ) →
  assert(A ∩ B = ∅) →
  apply(def_ultraconnected(
    ¬(∀X,Y ∈ closed_sets(T): X ∩ Y ≠ ∅)
  )) →
  conclude(¬isUltraconnected(T))
}

proof CompactComplement_NotUltraconnected_2() {
  let T = (ℝ, τ) →
  lemma T1_Space() {
    assert(isCompactComplementTopology(T) → isT1(T))
  } →
  lemma Ultraconnected_NotT1() {
    assert(
      isUltraconnected(T) ∧ |T| > 1 →
      ¬isT1(T)
    )
  } →
  apply(T1_Space()) →
  apply(Ultraconnected_NotT1()) →
  assert(|T| > 1) →
  conclude(¬isUltraconnected(T))
}
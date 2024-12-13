theorem BijectionPruferTree() {
  assert(
    ∀n ∈ ℕ ⇒ 
    let T = {trees: labeled, order=n} ∧
    let P = {sequences: Prüfer, length=(n-2)} ∧
    ∃φ: T → P ⇒ isBijective(φ)
  )
}

proof BijectionPruferTree() {
  setVar(n: ℕ) →
  setVar(T: Set) {
    assert(T = {trees: labeled, order=n})
  } →
  setVar(P: Set) {
    assert(P = {sequences: Prüfer, length=(n-2)})
  } →
  setVar(φ: T → P) →
  
  lemma WellDefinedForward() {
    assert(
      ∀t ∈ T ⇒ ∃!p ∈ P: φ(t) = p
    )
  } →
  
  lemma WellDefinedInverse() {
    setVar(φ⁻¹: P → T) →
    assert(
      ∀p ∈ P ⇒ ∃!t ∈ T: φ⁻¹(p) = t
    )
  } →
  
  apply(WellDefinedForward()) →
  apply(WellDefinedInverse()) →
  
  assert(
    isBijective(φ) ↔ 
    (isWellDefined(φ) ∧ isWellDefined(φ⁻¹))
  )
}
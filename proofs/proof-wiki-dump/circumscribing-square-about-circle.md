theorem CircumscribingSquare() {
  assert(
    ∀c: Circle ⇒ ∃s: Square where s.circumscribes(c)
  )
}

proof CircumscribingSquare() {
  setVar(ABCD: Circle) →
  construct(AC, BD: Diameter) where {
    AC ⊥ BD
  } →
  construct(FG, GH, HK, KF: Line) where {
    FG ⊥ AC ∧
    GH ⊥ BD ∧
    HK ⊥ AC ∧
    KF ⊥ BD
  } →
  
  lemma TangentLines() {
    assert(
      FG.tangent(ABCD) ∧
      GH.tangent(ABCD) ∧
      HK.tangent(ABCD) ∧
      KF.tangent(ABCD)
    )
  } →

  assert(∠AEB = 90° → ∠EBG = 90°) →
  assert(GH ∥ AC) →
  assert(FK ∥ AC) →
  assert(GH ∥ FK) by ParallelismTransitive() →
  assert(GF ∥ BD ∧ HK ∥ BD) →
  
  lemma Parallelograms() {
    assert(
      isParallelogram(GK) ∧
      isParallelogram(GC) ∧
      isParallelogram(AK) ∧
      isParallelogram(FB) ∧
      isParallelogram(BK)
    )
  } →
  
  assert(GF = HK ∧ GH = FK) by ParallelogramProperties() →
  assert(AC = BD ∧ AC = GH ∧ AC = FK) →
  assert(BD = GF = HK) →
  assert(isEquilateral(FGHK)) →
  
  assert(isParallelogram(GBEA) → ∠AEB = 90° → ∠AGB = 90°) →
  assert(∠H = 90° ∧ ∠K = 90° ∧ ∠F = 90°) →
  assert(isSquare(FGHK))
}
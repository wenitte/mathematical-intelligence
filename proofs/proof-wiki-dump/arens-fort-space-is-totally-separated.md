theorem ArensFortisTotallySeparated() {
  assert(
    ∀T: Space where T = (S, τ) ∧ isArensForSpace(T) →
    isTotallySeparated(T)
  )
} ↔

proof ArensFortisTotallySeparated() {
  setVar(T: Space) →
  assert(isArensForSpace(T)) →
  
  lemma ZeroDimensional() {
    assert(isZeroDimensional(T))
  } →
  
  lemma T1Space() {
    assert(isT1Space(T))
  } →
  
  apply(T1Space()) →
  assert(isT0Space(T)) →
  
  lemma ZeroDimT0ImpliesTotallySep() {
    assert(
      ∀X: Space where isZeroDimensional(X) ∧ isT0Space(X) →
      isTotallySeparated(X)
    )
  } →
  
  apply(ZeroDimensional()) →
  apply(ZeroDimT0ImpliesTotallySep()) →
  assert(isTotallySeparated(T))
}
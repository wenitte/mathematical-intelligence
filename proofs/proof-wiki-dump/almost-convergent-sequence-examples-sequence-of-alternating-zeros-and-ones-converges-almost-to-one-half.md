theorem AlmostConvergentSequence() {
  define(x[n]: ℕ → ℝ) {
    x[n] := match(n mod 2) {
      case 0: 0
      case 1: 1
    }
  }
  assert(
    ∀x[n] → almostConvergesTo(x[n], 1/2)
  )
} ↔

proof AlmostConvergentSequence() {
  setVar(φ: BanachLimit) →
  setVar(S: ShiftOperator(ℓ∞ → ℝ)) →
  setVar(1: SequenceOf(1)) →
  
  lemma Decomposition() {
    assert(
      1 = {1,0,1,0,...} + {0,1,0,1,...} ↔
      1 = S(x[n]) + x[n]
    )
  } →
  
  assert(
    φ(1) = 1
  ) →
  
  assert(
    φ(1) = φ(S(x[n]) + x[n])
  ) by Decomposition() →
  
  assert(
    φ(S(x[n]) + x[n]) = φ(S(x[n])) + φ(x[n])
  ) by BanachLimitLinearity() →
  
  assert(
    φ(S(x[n])) = φ(x[n])
  ) by BanachLimitShiftInvariance() →
  
  assert(
    1 = 2φ(x[n])
  ) →
  
  conclude(
    φ(x[n]) = 1/2
  ) →
  
  conclude(
    almostConvergesTo(x[n], 1/2)
  ) by AlmostConvergenceDefinition()
}
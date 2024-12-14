theorem CauchyComplexConvergence() {
  assert(
    ∀z_n: ComplexSequence ↔
    (isCauchySequence(z_n) ↔ isConvergent(z_n))
  )
}

lemma CauchyComplexRealParts() {
  assert(
    ∀z_n: ComplexSequence,
    let x_n = Re(z_n),
    let y_n = Im(z_n) ↔
    (isCauchySequence(z_n) ↔ 
      (isCauchySequence(x_n) ∧ isCauchySequence(y_n)))
  )
}

proof CauchyComplexConvergence() {
  setVar(z_n: ComplexSequence) →
  let x_n = Re(z_n) →
  let y_n = Im(z_n) →
  
  assert(
    isCauchySequence(z_n) ↔
    (isCauchySequence(x_n) ∧ isCauchySequence(y_n))  // by CauchyComplexRealParts
  ) →
  
  assert(
    (isCauchySequence(x_n) ∧ isCauchySequence(y_n)) ↔
    (isConvergent(x_n) ∧ isConvergent(y_n))  // by CauchyRealConvergence
  ) →
  
  assert(
    (isConvergent(x_n) ∧ isConvergent(y_n)) ↔
    isConvergent(z_n)  // by definition of complex convergence
  ) →
  
  conclude(
    isCauchySequence(z_n) ↔ isConvergent(z_n)
  )
}
theorem Cauchy_Convergence_Complex() {
  assert(
    ∀{zₙ: sequence(ℂ)} ↔ (
      is_Cauchy_sequence(zₙ) ↔ is_convergent(zₙ)
    )
  )
}

lemma Complex_Cauchy_Real_Parts() {
  assert(
    ∀{zₙ: sequence(ℂ)} ∧
    ∀{xₙ = Re(zₙ)} ∧
    ∀{yₙ = Im(zₙ)} ↔ (
      is_Cauchy_sequence(zₙ) ↔ 
      (is_Cauchy_sequence(xₙ) ∧ is_Cauchy_sequence(yₙ))
    )
  )
}

proof Cauchy_Convergence_Complex() {
  // Necessary condition
  setVar(zₙ: sequence(ℂ)) →
  assume(is_Cauchy_sequence(zₙ)) →
  apply(Complex_Cauchy_Real_Parts()) →
  assert(is_Cauchy_sequence(xₙ) ∧ is_Cauchy_sequence(yₙ)) →
  apply(Cauchy_Convergence_Real()) →
  assert(is_convergent(xₙ) ∧ is_convergent(yₙ)) →
  assert(is_convergent(zₙ)) →

  // Sufficient condition
  assume(is_convergent(zₙ)) →
  assert(is_convergent(xₙ) ∧ is_convergent(yₙ)) →
  apply(Cauchy_Convergence_Real()) →
  assert(is_Cauchy_sequence(xₙ) ∧ is_Cauchy_sequence(yₙ)) →
  apply(Complex_Cauchy_Real_Parts()) →
  assert(is_Cauchy_sequence(zₙ)) →
  
  conclude(
    is_Cauchy_sequence(zₙ) ↔ is_convergent(zₙ)
  )
}
theorem BAlgebra_xy_zero_iff_x_eq_y(X: BAlgebra) {
  assert(
    ∀x,y ∈ X ⇒ (x ∘ y = 0 ↔ x = y)
  )
}

proof BAlgebra_xy_zero_iff_x_eq_y() {
  // Sufficient condition: x = y ⇒ x ∘ y = 0
  setVars(x,y: X) →
  assume(x = y) →
  apply(BAlgebraAxiom_A1()) →
  assert(x ∘ y = x ∘ x = 0) →
  
  // Necessary condition: x ∘ y = 0 ⇒ x = y
  setVars(x,y: X) →
  assume(x ∘ y = 0) →
  assert(x ∘ y = y ∘ y) ∧ {
    // First equality from assumption
    assert(x ∘ y = 0) →
    // Second equality from BAlgebra Axiom A1
    apply(BAlgebraAxiom_A1()) →
    assert(y ∘ y = 0)
  } →
  // Apply right cancellation property
  apply(BAlgebra_RightCancellable()) →
  assert(x = y)
}
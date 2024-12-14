theorem Closed_Ideal_Is_Self_Adjoint() {
  assert(
    ∀A[C*_algebra] ∧ ∀I[ideal(A)] ∧ closed(I) 
    ⇒ (∀x ∈ I ⇒ x* ∈ I)
  )
} ↔

proof Closed_Ideal_Is_Self_Adjoint() {
  setVar(x: I) →
  assert(x*x ∈ I) by ideal_property(I) →
  
  lemma Polar_Decomposition() {
    assert(∃u ∈ A: x = u((x*x)^(1/2))^(1/2))
  } →
  
  lemma Power_Properties() {
    assert(x = u(x*x)^(1/4))
  } →
  
  lemma Positive_Element() {
    assert(positive((x*x)^(1/4))) by continuous_function_property()
  } →
  
  apply(C*_algebra_axiom3) →
  assert(x* = (x*x)^(1/4)u*) →
  
  lemma Continuous_Function_In_Ideal() {
    assert((x*x)^(1/4) ∈ I) by closed_ideal_property()
  } →
  
  assert(x* = (x*x)^(1/4)u* ∈ I) by ideal_property(I) →
  assert(∀x ∈ I ⇒ x* ∈ I) →
  conclude(self_adjoint(I))
}
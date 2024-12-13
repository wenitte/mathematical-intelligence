theorem Adjoint_Of_Closure_Equals_Adjoint() {
  let H: HilbertSpace(ℂ)
  let T: LinearOperator(Dense, Closable)
  let T*: Adjoint(T)
  let T̄: Closure(T)
  let (T̄)*: Adjoint(T̄)
  
  assert(
    (D(T*), T*) = (D((T̄)*), (T̄)*)
  )
} ↔

proof Adjoint_Of_Closure_Equals_Adjoint() {
  lemma L1_Adjoint_Is_Closed() {
    assert((D(T*), T*) is Closed)
  } →
  
  lemma L2_Closed_Equals_Closure() {
    assert(
      (D(T*), T*) = (D(T̄*), T̄*)
    )
  } →
  
  lemma L3_Triple_Adjoint() {
    assert(
      (D(T̄*), T*) = (D(T***), T***)
    )
  } →
  
  setVar(T*** ≡ (T**)*) →
  
  lemma L4_Final_Equality() {
    assert(
      (D(T***), T***) = (D((T̄)*), (T̄)*)
    )
  } →
  
  apply(L1_Adjoint_Is_Closed()) ∧
  apply(L2_Closed_Equals_Closure()) ∧
  apply(L3_Triple_Adjoint()) ∧
  apply(L4_Final_Equality()) →
  
  assert(
    (D(T*), T*) = (D((T̄)*), (T̄)*)
  )
}
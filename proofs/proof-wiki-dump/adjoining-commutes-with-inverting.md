theorem Adjoint_Inverse_Commute() {
  assert(
    ∀H,K ∈ HilbertSpace ∧
    ∀A ∈ B(H,K) ∧
    ∃A⁻¹ ∈ B(K,H) ∧
    A * A⁻¹ = Iₖ ∧
    A⁻¹ * A = Iₕ 
    ⇒ 
    ((A*)⁻¹ = (A⁻¹)*)
  )
} ↔

proof Adjoint_Inverse_Commute() {
  setVar(H,K: HilbertSpace) →
  setVar(A: B(H,K)) →
  setVar(A⁻¹: B(K,H)) →
  
  assert(A * A⁻¹ = Iₖ) →
  
  lemma Adjoint_Composition() {
    assert((A * B)* = B* * A*)
  } →
  
  lemma Identity_Adjoint() {
    assert(Iₖ* = Iₖ)
  } →
  
  apply(Adjoint_Composition(), Identity_Adjoint()) →
  assert(Iₖ = Iₖ* = (A * A⁻¹)* = (A⁻¹)* * A*) →
  
  assert(Iₕ = Iₕ* = (A⁻¹ * A)* = A* * (A⁻¹)*) →
  
  assert((A⁻¹)* * A* = Iₖ ∧ A* * (A⁻¹)* = Iₕ) →
  
  lemma Inverse_Definition() {
    assert(
      ∀X,Y(X * Y = I ∧ Y * X = I ⇒ Y = X⁻¹)
    )
  } →
  
  apply(Inverse_Definition()) →
  assert((A*)⁻¹ = (A⁻¹)*) →
  assert(A* is_invertible)
}
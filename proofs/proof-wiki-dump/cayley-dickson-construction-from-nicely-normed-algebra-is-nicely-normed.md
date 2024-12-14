theorem CayleyDicksonNicelyNormed() {
  assert(
    ∀A[StarAlgebra(A) ∧ A = ⟨A_F, ⊕⟩] ∧
    ∀A'[A' = CayleyDicksonConstruct(A) ∧ A' = ⟨A_F, ⊕'⟩] ⇒
    [NicelyNormed(A') ↔ NicelyNormed(A)]
  )
} ↔

proof CayleyDicksonNicelyNormed() {
  setVar(∗: ConjugationOperator(A)) →
  setVar(a,b,c,d ∈ A) →
  setNotation(⊕(x,y) := xy) →
  setNotation(⊕'(x,y) := xy) →
  
  assume(NicelyNormed(A)) →
  
  lemma ConjugateSum() {
    assert(⟨a,b⟩ + ⟨a,b⟩* = ⟨a,b⟩ + ⟨a*,-b⟩) →
    assert(= ⟨a + a*,b - b⟩) →
    assert(= ⟨a + a*,0⟩)
  } →
  
  lemma RealProperty() {
    assert(NicelyNormed(A) ⇒ IsReal(a + a*)) →
    assert(IsReal(⟨a + a*,0⟩))
  } →
  
  lemma NormProduct() {
    assert(⟨a,b⟩⟨a,b⟩* = ⟨a,b⟩⟨a*,-b⟩) →
    assert(= ⟨aa* - (-bb*), a*b + (-a*b)⟩) →
    assert(= ⟨∥a∥² + ∥b∥²,0⟩)
  } →
  
  lemma NormReal() {
    assert(IsReal(∥a∥² + ∥b∥²)) →
    assert(IsReal(⟨∥a∥² + ∥b∥²,0⟩))
  } →
  
  assert(∀x∈A'[x + x* ∈ ℝ ∧ xx* ∈ ℝ]) →
  
  contrapositive(
    ¬NicelyNormed(A') ⇒ ¬NicelyNormed(A)
  )
}
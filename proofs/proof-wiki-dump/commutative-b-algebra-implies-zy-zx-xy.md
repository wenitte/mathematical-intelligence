theorem CommutativeB_AlgebraImplication() {
  assert(
    ∀B(isCommutativeBAlgebra(B) ⇒
      ∀x,y,z ∈ B: (z∘y)∘(z∘x) = x∘y)
  )
} ↔

proof CommutativeB_AlgebraImplication() {
  setStruct(B: CommutativeBAlgebra) →
  setVar(x,y,z: Element(B)) →
  
  assert((z∘y)∘(z∘x)) →
  
  lemma BAlgebraIdentity1() {
    assert(∀a,b,c: a∘(b∘c) = (a∘(0∘c))∘b)
  } →
  apply(BAlgebraIdentity1()) →
  assert(((z∘y)∘(0∘x))∘z) →
  
  lemma CommutativeBDef() {
    assert(∀a,b: a∘(0∘b) = 0∘(0∘(a∘b)))
  } →
  apply(CommutativeBDef()) →
  assert((x∘(0∘(z∘y)))∘z) →
  
  lemma BAlgebraAxiomA3() {
    assert(∀a,b,c: a∘(b∘c) = a∘(b∘(0∘(0∘c))))
  } →
  apply(BAlgebraAxiomA3()) →
  assert(x∘(z∘(0∘(0∘(z∘y))))) →
  
  lemma BAlgebraIdentity2() {
    assert(∀a,b: a∘b = a∘(0∘(0∘b)))
  } →
  apply(BAlgebraIdentity2()) →
  assert(x∘(z∘(z∘y))) →
  
  lemma CommutativeProperty() {
    assert(∀a,b: x∘(x∘y) = y)
  } →
  apply(CommutativeProperty()) →
  assert(x∘y)
}
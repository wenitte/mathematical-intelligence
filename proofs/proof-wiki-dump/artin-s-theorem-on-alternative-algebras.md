theorem Artin_Alternative_Algebra() {
  assert(
    ∀A (isAlgebra(A,R) ∧ ¬isBooleanAlgebra(A)) ⇒
    (isAlternative(A) ↔ 
      (∀a,b ∈ A: ((a ⊕ a) ⊕ b = a ⊕ (a ⊕ b)) ∧
       ∀a,b ∈ A: ((b ⊕ a) ⊕ a = b ⊕ (a ⊕ a))))
  )
} ↔

proof Artin_Alternative_Algebra() {
  setVar(A: Algebra, R: Ring) →
  assume(¬isBooleanAlgebra(A)) →
  
  lemma Forward_Implication() {
    assume(isAlternative(A)) →
    assert(∀a,b ∈ A: [a,a,b] = 0 ∧ [b,a,a] = 0) →
    assert(∀a,b ∈ A: ((a ⊕ a) ⊕ b = a ⊕ (a ⊕ b))) →
    assert(∀a,b ∈ A: ((b ⊕ a) ⊕ a = b ⊕ (a ⊕ a)))
  } →

  lemma Reverse_Implication() {
    assume(∀a,b ∈ A: ((a ⊕ a) ⊕ b = a ⊕ (a ⊕ b))) →
    assume(∀a,b ∈ A: ((b ⊕ a) ⊕ a = b ⊕ (a ⊕ a))) →
    
    setVar(a,b: A) →
    let(expr1 := (a - b) ⊕ ((a - b) ⊕ a)) →
    let(expr2 := ((a - b) ⊕ (a - b)) ⊕ a) →
    
    assert(expr1 = a ⊕ ((a - b) ⊕ a) - b ⊕ ((a - b) ⊕ a)) →
    assert(expr1 = a ⊕ (a ⊕ a) - a ⊕ (b ⊕ a) - b ⊕ (a ⊕ a) + b ⊕ (b ⊕ a)) →
    
    assert(expr2 = (a ⊕ a) ⊕ a - (a ⊕ b) ⊕ a - (b ⊕ a) ⊕ a + (b ⊕ b) ⊕ a) →
    assert(expr1 = expr2) →
    
    assert([a - b, a - b, a] = [a,a,a] - [a,b,a] - [b,a,a] + [b,b,a]) →
    assert([a,b,a] = 0) →
    assert(isAlternative(A))
  }
}
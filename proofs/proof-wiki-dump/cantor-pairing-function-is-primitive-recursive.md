theorem Cantor_Pairing_Primitive_Recursive() {
  assert(
    ∀m,n ∈ ℕ ⇒ π(m,n) is primitive_recursive
    where π(m,n) = ((m + n)(m + n + 1))/2 + m
  )
} ↔

proof Cantor_Pairing_Primitive_Recursive() {
  setVar(m,n: ℕ) →
  
  lemma Cantor_Well_Defined() {
    assert(
      π(m,n) = quot((m + n)(m + n + 1), 2) + m
    )
  } →
  
  lemma Component_Functions() {
    assert(
      addition(x,y) is primitive_recursive ∧
      quotient(x,y) is primitive_recursive ∧
      constant(x) is primitive_recursive
    )
  } →
  
  apply(Cantor_Well_Defined()) →
  apply(Component_Functions()) →
  
  assert(
    π(m,n) is composition of primitive_recursive functions →
    π(m,n) is primitive_recursive
  )
}
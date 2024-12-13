theorem Ring_Homomorphism_Algebra_Associative() {
  assume(
    ∃R: CommutativeRing ∧
    ∃S: RingWithUnity ∧
    ∃f: (R → S): RingHomomorphism ∧
    image(f) ⊆ center(S) ∧
    ∃S_R: Algebra := AlgebraFromHomomorphism(f)
  ) →
  assert(
    isAssociative(S_R)
  )
}

proof Ring_Homomorphism_Algebra_Associative() {
  let R, S, f, S_R satisfy assumptions →
  
  lemma Multiplication_Definition() {
    assert(
      ∀x,y ∈ S_R: x * y = ringProduct(S, x, y)
    )
  } →
  
  apply(Multiplication_Definition()) →
  
  lemma Ring_Associativity() {
    assert(
      S: RingWithUnity →
      ∀a,b,c ∈ S: (a * b) * c = a * (b * c)
    )
  } →
  
  apply(Ring_Associativity()) →
  
  assert(
    ∀a,b,c ∈ S_R: (a * b) * c = a * (b * c) →
    isAssociative(S_R)
  )
}
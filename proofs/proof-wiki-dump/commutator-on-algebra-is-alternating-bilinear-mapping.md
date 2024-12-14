theorem Commutator_Is_Alternating() {
  assert(
    ∀(A_R: Algebra, ⊕: Operation) ⇒
    ∀(a,b ∈ A_R) ⇒ [a,b] = -[b,a]
  )
}

proof Commutator_Is_Alternating() {
  setVar(A_R: Algebra, ⊕: Operation) →
  setVar(a,b ∈ A_R) →
  
  assert([a,b] = a⊕b - b⊕a) →
  
  lemma Additive_Inverse() {
    assert(x - y = -(y - x))
  } →
  
  assert([a,b] = -b⊕a + a⊕b) →
  assert([a,b] = -b⊕a - (-a⊕b)) →
  assert([a,b] = -(b⊕a - a⊕b)) →
  assert([a,b] = -[b,a]) →
  
  apply(Distributive_Law) →
  apply(Additive_Inverse) →
  
  conclude([a,b] = -[b,a])
}
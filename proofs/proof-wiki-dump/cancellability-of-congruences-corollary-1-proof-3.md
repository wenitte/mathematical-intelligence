theorem Cancellability_Congruences_Corollary() {
  assert(
    ∀c,n,a,b ∈ ℤ : (c ⊥ n) →
    ((c⋅a ≡ c⋅b (mod n)) → (a ≡ b (mod n)))
  )
}

proof Cancellability_Congruences_Corollary() {
  setVar(c,n,a,b: ℤ) →
  assume(c ⊥ n) →
  assume(c⋅a ≡ c⋅b (mod n)) →
  
  lemma Congruence_Definition() {
    assert(c⋅a ≡ c⋅b (mod n) ↔ n|(c⋅a - c⋅b)) →
    assert(n|c(a - b))
  } →
  
  apply(Congruence_Definition()) →
  
  lemma Euclid_Lemma() {
    assert(
      (c ⊥ n ∧ n|c(a - b)) → n|(a - b)
    )
  } →
  
  apply(Euclid_Lemma()) →
  
  lemma Congruence_Definition_Reverse() {
    assert(n|(a - b) ↔ a ≡ b (mod n))
  } →
  
  apply(Congruence_Definition_Reverse()) →
  assert(a ≡ b (mod n))
}
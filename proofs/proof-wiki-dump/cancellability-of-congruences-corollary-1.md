theorem Congruence_Cancellability_Coprime() {
  assert(
    ∀c,n,a,b ∈ ℤ ⇒ (
      (c ⊥ n) ∧ 
      (c⋅a ≡ c⋅b (mod n)) →
      (a ≡ b (mod n))
    )
  )
} ↔

proof Congruence_Cancellability_Coprime() {
  setVars(c,n,a,b: ℤ) →
  assume(c ⊥ n) →
  assume(c⋅a ≡ c⋅b (mod n)) →
  
  lemma Bezout_Identity() {
    assert(
      c ⊥ n → ∃x,y ∈ ℤ: c⋅x + n⋅y = 1
    )
  } →
  
  apply(Bezout_Identity()) →
  setVars(x,y: ℤ) →
  assert(c⋅x + n⋅y = 1) →
  assert(c⋅x ≡ 1 (mod n)) →
  
  assert(a ≡ a (mod n)) →
  assert(a⋅c⋅x ≡ a (mod n)) →
  
  assert(b ≡ b (mod n)) →
  assert(b⋅c⋅x ≡ b (mod n)) →
  
  assert(x⋅c⋅a ≡ x⋅c⋅b (mod n)) →
  
  assert(
    a ≡ a⋅c⋅x ≡ b⋅c⋅x ≡ b (mod n)
  ) →
  
  conclude(a ≡ b (mod n))
}
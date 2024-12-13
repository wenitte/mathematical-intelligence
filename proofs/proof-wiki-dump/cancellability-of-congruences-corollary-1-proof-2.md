theorem Congruence_Cancellation() {
  assert(
    ∀c,n,a,b ∈ ℤ ⇒
    (c ⊥ n ∧ ca ≡ cb (mod n)) →
    (a ≡ b (mod n))
  )
} ↔

proof Congruence_Cancellation() {
  setVar(c,n,a,b: ℤ) →
  assume(c ⊥ n) →
  
  lemma Bezout() {
    assert(∃x,y ∈ ℤ: cx + ny = 1)
  } →
  
  apply(Bezout()) →
  setVar(x,y: ℤ) →
  assert(1 - cx = yn) →
  assert(cx ≡ 1 (mod n)) →
  
  lemma Self_Congruent() {
    assert(∀k ∈ ℤ ⇒ k ≡ k (mod n))
  } →
  
  apply(Self_Congruent()) →
  assert(a ≡ a (mod n)) →
  assert(acx ≡ a (mod n)) →
  
  apply(Self_Congruent()) →
  assert(b ≡ b (mod n)) →
  assert(bcx ≡ b (mod n)) →
  
  assume(ca ≡ cb (mod n)) →
  assert(xca ≡ xcb (mod n)) →
  
  assert(
    a ≡ acx (mod n) ∧
    acx ≡ bcx (mod n) ∧
    bcx ≡ b (mod n)
  ) →
  
  apply(Congruence_Transitivity()) →
  assert(a ≡ b (mod n))
}
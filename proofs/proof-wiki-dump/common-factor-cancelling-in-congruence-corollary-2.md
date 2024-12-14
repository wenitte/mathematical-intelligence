theorem CongruenceCancelCoPrime() {
  assert(
    ∀a,b,x,y,m ∈ ℤ ⇒ 
    (ax ≡ ay (mod m)) ∧
    gcd(a,m) = 1 ⇒
    x ≡ y (mod m)
  )
} ↔

proof CongruenceCancelCoPrime() {
  setVar(a,b,x,y,m: ℤ) →
  assume(ax ≡ ay (mod m)) →
  assume(gcd(a,m) = 1) →
  
  lemma CongruenceCancelCorollary1() {
    assert(
      (ax ≡ by (mod m)) ∧
      (a ≡ b (mod m)) ∧
      gcd(a,m) = 1 ⇒
      x ≡ y (mod m)
    )
  } →
  
  let(b = a) →
  apply(CongruenceCancelCorollary1()) →
  assert(x ≡ y (mod m))
}
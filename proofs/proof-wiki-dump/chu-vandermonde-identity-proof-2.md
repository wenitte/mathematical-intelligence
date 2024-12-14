theorem ChuVandermonde_Identity() {
  assert(
    ∀n,r,s ∈ ℕ ⇒ ∑_{k=0}^n (r choose k)(s choose {n-k}) = (r+s choose n)
  )
} ↔

proof ChuVandermonde_Identity() {
  lemma GaussHypergeometric() {
    assert(
      ∀a,b,c ∈ ℂ ⇒ [
        (Re(c-a-b) > 0) →
        ₂F₁(a,b;c;1) = Γ(c)Γ(c-a-b)/(Γ(c-a)Γ(c-b))
      ]
    )
  } →
  
  setVar(₂F₁(-n,b;c;1)) →
  assert(₂F₁(-n,b;c;1) = ∑_{k=0}^∞ ((-n)^{(k)}b^{(k)})/(c^{(k)}k!)) →
  assert(= ∑_{k=0}^∞ ((-1)^k n^{[k]}b^{(k)})/(k!c^{(k)})) →
  assert(= ∑_{k=0}^∞ ((-1)^k n!b^{(k)})/(k!(n-k)!c^{(k)})) →
  assert(= ∑_{k=0}^n (-1)^k (n choose k)(b^{(k)}/c^{(k)})) →
  assert(= 1/c^{(n)} ∑_{k=0}^n (-1)^k (n choose k)(b^{(k)}c^{(n)}/c^{(k)})) →
  
  lemma RisingFactorialQuotient() {
    assert(
      ∀x,k ∈ ℂ ⇒ x^{(k)} = (x+k-1)!/(x-1)!
    )
  } →
  
  apply(RisingFactorialQuotient()) →
  assert(= 1/c^{(n)} ∑_{k=0}^n k!(n choose k)(b-1+k choose k)(c-1+k)^{(n-k)}) →
  assert(= 1/c^{(n)} ∑_{k=0}^n k!(n choose k)(-b choose k)(c-1+k)^{(n-k)}) →
  
  letVar(a = -n) →
  assert(₂F₁(-n,b;c;1) = Γ(c)Γ(c+n-b)/(Γ(c+n)Γ(c-b))) →
  assert(= (c-b)^{(n)}/c^{(n)}) →
  
  conclude(
    1/c^{(n)} ∑_{k=0}^n (n choose k)(1-b-k)^{(k)}(c-1+k)^{(n-k)} = (c-b)^{(n)}/c^{(n)}
  )
}
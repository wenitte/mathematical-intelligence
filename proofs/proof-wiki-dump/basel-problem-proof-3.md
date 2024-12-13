theorem Basel_Problem() {
  assert(
    ∀x ∈ ℝ ⇒ ζ(2) = ∑(n=1 to ∞) 1/n² = π²/6
  )
} ↔

proof Basel_Problem() {
  setVar(x ∈ (0,π/2)) →
  setVar(n ∈ ℤ⁺) →
  
  assert(
    (cos(2n+1)x + i·sin(2n+1)x)/(sin²ⁿ⁺¹x) = 
    (cos x + i·sin x)²ⁿ⁺¹/sin²ⁿ⁺¹x
  ) →
  
  applyRule(DeMoivre) →
  assert((cot x + i)²ⁿ⁺¹) →
  
  applyRule(BinomialTheorem) →
  assert(∑(r=0 to 2n+1) C(2n+1,r)·iʳ·cot²ⁿ⁺¹⁻ʳx) →
  
  lemma ImaginaryParts() {
    assert(
      sin(2n+1)x/sin²ⁿ⁺¹x = 
      ∑(r=0 to n) C(2n+1,2r+1)·(-1)ʳ·cot²⁽ⁿ⁻ʳ⁾x
    )
  } →
  
  setVar(xₖ = kπ/(2n+1) for k ∈ {1,2,...,n}) →
  assert(sin(2n+1)xₖ = 0) →
  
  lemma CotangentRoots() {
    assert(
      cₖ = cot²(xₖ) are distinct roots of
      f(c) = ∑(r=0 to n) C(2n+1,2r+1)·(-1)ʳ·cⁿ⁻ʳ
    )
  } →
  
  applyRule(VieteFormulas) →
  assert(∑(k=1 to n) cot²(xₖ) = (2n(2n-1))/6) →
  
  applyRule(TangentInequality) →
  assert(
    (2n(2n-1))/6 < ∑(k=1 to n)((2n+1)/(kπ))² < (2n(2n+2))/6
  ) →
  
  applyRule(SqueezeTheorem) →
  assert(
    lim(n→∞) ∑(k=1 to n) 1/k² = π²/6
  ) →
  
  conclude(ζ(2) = π²/6)
}
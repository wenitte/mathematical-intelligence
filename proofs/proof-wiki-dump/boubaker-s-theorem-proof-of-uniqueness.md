theorem Boubaker_Uniqueness() {
  let(R: CommutativeRing) ∧
  let(D: IntegralSubdomain(R)) ∧
  let(X: TranscendentalElement(R, D)) ∧
  let(D[X]: PolynomialRing(D)) ∧
  
  assert(
    ∀n ∈ ℕ⁺, ∀pn ∈ D[X], ∃N ∈ ℕ⁺, ∀αk ∈ F (k=1..N) →
    [Properties(1-4):
      (1) ∑[k=1..N] pn(0) = -2N ∧
      (2) ∑[k=1..N] pn(αk) = 0 ∧
      (3) ∂/∂x(∑[k=1..N] pn(x))|[x=0] = 0 ∧
      (4) ∂²/∂x²(∑[k=1..N] pn²(x))|[x=0] = 8/3 N(N²-1)
    ] →
    pn = B₄ₙ(x)
  )
} ↔

proof Boubaker_Uniqueness() {
  let(B₄ₙ(x) = 4∑[p=0..2n]((n-p)/(4n-p)⋅(4n-p choose p)⋅(-1)ᵖ⋅x^(2(2n-p)))) →
  
  lemma Known_Properties() {
    assert(B₄ₙ(x) satisfies properties (1)-(4))
  } →
  
  assume(∃q₄ₙ(x) ≠ B₄ₙ(x) satisfying properties (1)-(4)) →
  
  let(B₄ₙ(x) = ∑[p=0..2n] a₄ₙ,p x^(2(2n-p))) ∧
  let(q₄ₙ(x) = ∑[p=0..2n] b₄ₙ,p x^(2(2n-p))) ∧
  let(d₄ₙ,p = a₄ₙ,p - b₄ₙ,p) →
  
  from(properties (1),(3)) →
  assert(∑[k=1..N] d₄ₙ,2n = 0 ∧ ∑[k=1..N] d₄ₙ,2n-2 = 0) →
  
  lemma Root_Count() {
    assert(B₄ₙ has exactly 4n-2 real roots in [-2,2])
  } →
  
  from(properties (3),(4)) →
  assert(forms system of 4n-2 linear equations in d₄ₙ,p) →
  
  apply(CramerSystem) →
  conclude(∀p∈[0..2n]: d₄ₙ,p = 0) →
  
  conclude(q₄ₙ(x) = B₄ₙ(x))
}
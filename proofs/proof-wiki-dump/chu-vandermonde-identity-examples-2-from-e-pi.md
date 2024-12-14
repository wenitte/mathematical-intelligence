theorem Chu_Vandermonde_Example() {
  assert(
    ∀e,π ∈ ℝ ⇒ (
      (binom(e + π, 2) = sum(k=0,2)[binom(e,k) × binom(π,2-k)])
    )
  )
} ↔

proof Chu_Vandermonde_Example_Direct() {
  setVar(e,π: ℝ) →
  lemma ChuVandermonde() {
    assert(∀r,s,n ∈ ℝ ⇒ sum(k=0,n)[binom(r,k) × binom(s,n-k)] = binom(r+s,n))
  } →
  apply(ChuVandermonde(), [r ↦ e, s ↦ π, n ↦ 2])
} ↔

proof Chu_Vandermonde_Example_Expanded() {
  setVar(e,π: ℝ) →
  assert(binom(e+π,2) = ((e+π)(e+π-1))/(2×1)) →
  assert(= (1/2)((e+π)² - (e+π))) →
  assert(= (1/2)(e² + 2eπ + π² - e - π)) →
  
  assert(sum(k=0,2)[binom(e,k) × binom(π,2-k)] = 
         binom(e,0)×binom(π,2) + binom(e,1)×binom(π,1) + binom(e,2)×binom(π,0)) →
  assert(= 1×(π(π-1)/2) + e×π + (e(e-1)/2)×1) →
  assert(= (1/2)(π² - π + 2eπ + e² - e)) →
  assert(= (1/2)(e² + 2eπ + π² - e - π)) →
  
  assertEquality(
    binom(e+π,2),
    (1/2)(e² + 2eπ + π² - e - π),
    sum(k=0,2)[binom(e,k) × binom(π,2-k)]
  )
}
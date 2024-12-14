theorem ChuVandermondeExample() {
  assert(
    ∀n,r,s ∈ ℕ ⇒ 
    (binom(9,3) = binom(4+5,3) = sum(k=0,3,(binom(4,k) * binom(5,3-k))))
  )
} ↔

proof ChuVandermondeExample_Direct() {
  lemma ChuVandermonde() {
    assert(
      sum(k=0,n,(binom(r,k) * binom(s,n-k))) = binom(r+s,n)
    )
  } →
  setVar(r:=4, s:=5, n:=3) →
  apply(ChuVandermonde())
} ↔

proof ChuVandermondeExample_Computation() {
  // Left side computation
  assert(binom(9,3)) →
  assert(binom(9,3) = 9!/(3!*6!)) →
  assert(9!/(3!*6!) = (9*8*7)/(3*2*1)) →
  assert((9*8*7)/(3*2*1) = 84) →
  
  // Right side computation
  assert(sum(k=0,3,(binom(4,k) * binom(5,3-k)))) →
  expand() →
  assert(binom(4,0)*binom(5,3) + binom(4,1)*binom(5,2) + 
         binom(4,2)*binom(5,1) + binom(4,3)*binom(5,0)) →
  substitute() →
  assert(1*10 + 4*10 + 6*5 + 4*1) →
  assert(10 + 40 + 30 + 4) →
  assert(84) →
  
  // Conclusion
  assert(binom(9,3) = sum(k=0,3,(binom(4,k) * binom(5,3-k))) = 84)
}
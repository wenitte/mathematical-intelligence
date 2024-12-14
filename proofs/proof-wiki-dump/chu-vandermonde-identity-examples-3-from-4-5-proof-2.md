theorem ChuVandermonde_Example() {
  assert(
    ∀n,k ∈ ℕ ⇒ (
      binom(9,3) = sum(k=0→3, binom(4,k) * binom(5,3-k))
    )
  )
} ↔

proof ChuVandermonde_Example() {
  // Left side evaluation
  lemma LeftSide() {
    assert(binom(9,3)) →
    assert(binom(4+5,3)) →
    assert((9!)/(3!*6!)) →
    assert((9*8*7)/(3*2*1)) →
    conclude(84)
  } →

  // Right side evaluation
  lemma RightSide() {
    assert(sum(k=0→3, binom(4,k) * binom(5,3-k))) →
    assert(
      binom(4,0)*binom(5,3) + 
      binom(4,1)*binom(5,2) + 
      binom(4,2)*binom(5,1) + 
      binom(4,3)*binom(5,0)
    ) →
    assert(
      (4!/(0!*4!))*(5!/(3!*2!)) + 
      (4!/(1!*3!))*(5!/(2!*3!)) + 
      (4!/(2!*2!))*(5!/(1!*4!)) + 
      (4!/(3!*1!))*(5!/(0!*5!))
    ) →
    assert(
      1*(5*4)/(2*1) + 
      (4/1)*(5*4)/(2*1) + 
      (4*3)/(2*1)*(5/1) + 
      (4/1)*1
    ) →
    assert(1*10 + 4*10 + 6*5 + 4*1) →
    assert(10 + 40 + 30 + 4) →
    conclude(84)
  } →

  apply(LeftSide()) ∧
  apply(RightSide()) →
  conclude(binom(9,3) = sum(k=0→3, binom(4,k) * binom(5,3-k)))
}
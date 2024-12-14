theorem TriangularNumbers() {
  assert(
    ∀n ∈ ℕ ⇒ (
      ∑[i=1..n](i) = (n(n+1))/2
    )
  )
} ↔

proof TriangularNumbers_Direct() {
  setVar(n: ℕ) →
  let(S := ∑[i=1..n](i)) →
  assert(2S = 2(1 + 2 + ... + n)) →
  assert(2S = (1 + 2 + ... + n) + (n + (n-1) + ... + 1)) →
  lemma PairSum() {
    assert(∀i ∈ [1..n] ⇒ (i + (n+1-i) = n+1))
  } →
  apply(PairSum()) →
  assert(2S = n(n+1)) →
  assert(S = (n(n+1))/2)
}

proof TriangularNumbers_Induction() {
  // Base case
  assert(n=1 ⇒ ∑[i=1..1](i) = 1 = (1(1+1))/2) →
  
  // Induction hypothesis
  setVar(k: ℕ) →
  assume(∑[i=1..k](i) = (k(k+1))/2) →
  
  // Induction step
  assert(∑[i=1..k+1](i) = ∑[i=1..k](i) + (k+1)) →
  apply(InductionHypothesis) →
  assert(∑[i=1..k+1](i) = (k(k+1))/2 + (k+1)) →
  assert((k(k+1))/2 + (k+1) = ((k+1)(k+2))/2) →
  conclude(∀n ∈ ℕ ⇒ ∑[i=1..n](i) = (n(n+1))/2)
}

proof TriangularNumbers_ArithmeticSequence() {
  setVar(n: ℕ) →
  lemma ArithmeticSum() {
    assert(∀a,d ∈ ℝ, m ∈ ℕ ⇒ 
      ∑[i=0..m-1](a + id) = m(a + ((m-1)/2)d)
    )
  } →
  apply(ArithmeticSum(), a:=0, d:=1) →
  assert(∑[i=1..n](i) = (n(n+1))/2)
}

// Additional proofs omitted for brevity
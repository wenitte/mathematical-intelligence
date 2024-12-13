theorem BertrandChebyshev() {
  assert(
    ∀n ∈ ℕ_{>0} ⇒ ∃p ∈ ℙ: n < p ≤ 2n
  )
}

proof BertrandChebyshev() {
  // Base case for n ≤ 426
  lemma SmallCase() {
    assert(
      ∃P = {2,3,5,7,13,23,43,83,163,317,631} ⊂ ℙ ∧
      ∀p_i,p_{i+1} ∈ P: p_{i+1} < 2p_i →
      ∀n ≤ 426 ⇒ ∃p ∈ P: n < p ≤ 2n
    )
  } →

  lemma PrimeProdBound(m: ℕ) {
    assert(∏_{p≤m, p∈ℙ} p ≤ 2^{2m})
  } →

  lemma BinomialPrimePower() {
    assert(
      ∀p ∈ ℙ, k ∈ ℕ: p^k | binom(2n,n) ⇒ p^k ≤ 2n
    )
  } →

  lemma BinomialLowerBound() {
    assert(
      ∀n ≥ 1: binom(2n,n) ≥ 2^{2n}/(2n)
    )
  } →

  // Main proof for n ≥ 427
  setVar(n: ℕ_{≥427}) →
  assume(¬∃p ∈ ℙ: n < p ≤ 2n) →
  assert(
    2^{2n}/(2n) ≤ binom(2n,n) ≤
    (∏_{p≤√{2n}} 2n)(∏_{√{2n}<p≤2n/3} p)
  ) →
  apply(PrimeProdBound()) →
  assert(
    2^{2n}/(2n) ≤ (2n)^{√{2n}-1} 2^{4n/3}
  ) →
  
  // Contradiction
  setVar(r = √{2n}) →
  assert(2^r > r^6) for r ≥ 30 →
  assert(contradiction()) →
  
  // Combine results
  apply(SmallCase()) ∧
  conclude(∀n ∈ ℕ_{>0} ⇒ ∃p ∈ ℙ: n < p ≤ 2n)
}
theorem BrahmaguptaFibonacciExtension() {
  assert(
    ∀n ∈ ℤ_{>0}, ∀m ∈ ℤ, ∀(a_1,...,a_n, b_1,...,b_n) ∈ ℤ ⇒
    ∏_{j=1}^n (a_j² + mb_j²) = c² + md² for some c,d ∈ ℤ
  )
} ↔

proof BrahmaguptaFibonacciExtension() {
  setVar(P(n): ∏_{j=1}^n (a_j² + mb_j²) = c² + md² for some c,d ∈ ℤ) →
  
  lemma Base_Case_P1() {
    assert(∏_{j=1}^1 (a_j² + mb_j²) = a_1² + mb_1²) →
    setVar(c = a_1, d = b_1) →
    assert(P(1))
  } →

  lemma Base_Case_P2() {
    assert(∏_{j=1}^2 (a_j² + mb_j²) = (a_1² + mb_1²)(a_2² + mb_2²)) →
    assert((a_1² + mb_1²)(a_2² + mb_2²) = (a_1a_2 + mb_1b_2)² + m(a_1b_2 - b_1a_2)²) →
    setVar(c = a_1a_2 + mb_1b_2, d = a_1b_2 - b_1a_2) →
    assert(P(2))
  } →

  lemma Inductive_Step() {
    setVar(k ≥ 2) →
    assume(P(k)) →
    assert(∏_{j=1}^{k+1} (a_j² + mb_j²) = (∏_{j=1}^k (a_j² + mb_j²))(a_{k+1}² + mb_{k+1}²)) →
    apply(P(k)) →
    assert(∃c',d' ∈ ℤ: (∏_{j=1}^k (a_j² + mb_j²)) = c'² + md'²) →
    apply(Base_Case_P2()) →
    assert(∃c,d ∈ ℤ: (c'² + md'²)(a_{k+1}² + mb_{k+1}²) = c² + md²) →
    assert(P(k+1))
  } →

  apply(Base_Case_P1()) ∧
  apply(Base_Case_P2()) ∧
  apply(Inductive_Step()) ∧
  apply(Mathematical_Induction()) →
  assert(∀n ∈ ℤ_{>0}: P(n))
}
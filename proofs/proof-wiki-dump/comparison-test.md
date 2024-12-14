theorem ComparisonTest() {
  assert(
    ∀{bn} ∈ ℝ+ : (∑_{n=1}^∞ bn converges) ∧
    ∀{an} ∈ (ℝ ∪ ℂ) ∧
    ∀n ∈ ℕ>0 : |an| ≤ bn 
    ⇒ 
    ∑_{n=1}^∞ an converges absolutely
  )
} ↔

proof ComparisonTest() {
  setVar(ε > 0) →
  lemma TailConvergence() {
    assert(
      ∃N ∈ ℕ : ∀n > N : ∑_{k=n+1}^∞ bk < ε
    )
  } →
  
  setVar({sn} := sequence(PartialSums(∑_{n=1}^∞ an))) →
  
  assert(
    ∀n > m > N : 
    |sn - sm| = 
    |∑_{k=m+1}^n ak| ≤
    ∑_{k=m+1}^n |ak| ≤
    ∑_{k=m+1}^n bk <
    ε
  ) →
  
  lemma CauchySequence() {
    assert({sn} is Cauchy)
  } →
  
  apply(CompleteMetricSpace()) →
  conclude(∑_{n=1}^∞ an converges absolutely)
}

corollary ComparisonTest_1() {
  assert(
    ∀{bn} ∈ ℝ+ : (∑_{n=1}^∞ bn converges) ∧
    ∀{an} ∈ (ℝ ∪ ℂ) ∧
    ∃H ∈ ℝ, ∃M : ∀n > M : |an| ≤ H·bn
    ⇒
    ∑_{n=1}^∞ an converges
  )
}

corollary ComparisonTest_2() {
  assert(
    ∀{an},{bn} ∈ ℝ+ : 
    lim_{n→∞} (an/bn) = k, k ∈ ℝ
    ⇒
    (∑_{n=1}^∞ an converges ↔ ∑_{n=1}^∞ bn converges)
  )
}
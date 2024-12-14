theorem ComparisonTest_Corollary() {
  assert(
    ∀(bn: ℝ+) ∧ (Σn=1^∞ bn: convergent) ∧
    ∀(an: ℝ ∨ ℂ) ∧
    ∃(H: ℝ) ∧
    ∃(M: ℕ)[∀n>M: |an| ≤ Hbn] ⇒
    (Σn=1^∞ an: convergent)
  )
}

proof ComparisonTest_Corollary() {
  setVar(ε: ℝ+) →
  assert(ε/H > 0) →
  
  lemma SeriesConvergence() {
    assert(Σn=1^∞ bn: convergent ⇒
           ∃N[∀n>N: Σk=n+1^∞ bk < ε/H])
  } →
  
  setVar(sn: sequence[PartialSums(Σn=1^∞ an)]) →
  
  assert(∀n>m>max{M,N}: |sn - sm| = 
         |Σk=m+1^n ak|) →
  
  assert(|Σk=m+1^n ak| ≤ Σk=m+1^n |ak|) by TriangleInequality →
  
  assert(Σk=m+1^n |ak| ≤ HΣk=m+1^n bk) by Hypothesis →
  
  assert(HΣk=m+1^n bk ≤ HΣk=n+1^∞ bk) →
  
  assert(HΣk=n+1^∞ bk < H(ε/H) = ε) by SeriesConvergence →
  
  lemma CauchyComplete() {
    assert((sn: Cauchy) ∧
           ((domain(an) = ℝ ⇒ CompleteMetricSpace_ℝ) ∨
            (domain(an) = ℂ ⇒ CompleteMetricSpace_ℂ)) ⇒
           (Σn=1^∞ an: convergent))
  } →
  
  apply(CauchyComplete())
}
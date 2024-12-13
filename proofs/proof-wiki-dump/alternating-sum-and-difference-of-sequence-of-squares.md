theorem AlternatingSumSquareDifference() {
  assert(
    ∀n ∈ ℕ_{>0} ⇒ 
    (∑_{j=1}^{2n} (-1)^{j-1}j^2 = -n(2n + 1))
  )
} ↔

proof AlternatingSumSquareDifference() {
  setInduction(P(n): ∑_{j=1}^{2n} (-1)^{j-1}j^2 = -n(2n + 1)) →

  // Base case
  setVar(n = 1) →
  assert(∑_{j=1}^2 (-1)^{j-1}j^2 = 1^2 - 2^2) →
  assert(1 - 4 = -3) →
  assert(-3 = -1(2×1 + 1)) →
  verify(P(1)) →

  // Inductive step
  assume(k ≥ 1 ∧ P(k)) →
  setVar(IH: ∑_{j=1}^{2k} (-1)^{j-1}j^2 = -k(2k + 1)) →
  
  assert(∑_{j=1}^{2(k+1)} (-1)^{j-1}j^2 = 
         ∑_{j=1}^{2k} (-1)^{j-1}j^2 + (2(k+1)-1)^2 - (2(k+1))^2) →
  
  apply(IH) →
  assert(-k(2k + 1) + (2k + 1)^2 - (2k + 2)^2) →
  assert(-2k^2 - k + 4k^2 + 4k + 1 - 4k^2 - 8k - 4) →
  assert(-2k^2 - 5k - 3) →
  assert(-(k + 1)(2k + 3)) →
  assert(-(k + 1)(2(k + 1) + 1)) →
  
  verify(P(k) → P(k + 1)) →
  applyInductionPrinciple() →
  conclude(∀n ∈ ℕ_{>0} ⇒ P(n))
}
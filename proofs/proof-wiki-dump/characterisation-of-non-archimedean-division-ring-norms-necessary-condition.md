theorem NonArchimedean_Norm_Implies_Bounded_Naturals() {
  assert(
    ∀R: DivisionRing, ∀norm: Norm(R) ⇒
    (isNonArchimedean(norm) →
     ∀n ∈ ℕ_{>0}: norm(n·1_R) ≤ 1)
  )
} ↔

proof NonArchimedean_Norm_Implies_Bounded_Naturals() {
  setVar(R: DivisionRing) →
  setVar(norm: Norm(R)) →
  assume(isNonArchimedean(norm)) →
  setVar(n: ℕ_{>0}) →
  
  lemma Expansion() {
    assert(n·1_R = ∑_{i=1}^n 1_R)
  } →

  define(norm_sum: ℝ) {
    norm(n·1_R) = norm(∑_{i=1}^n 1_R)
  } →

  apply(NonArchimedeanProperty) {
    norm(∑_{i=1}^n 1_R) ≤ max_{1≤i≤n}{norm(1_R)}
  } →

  lemma Unity_Norm() {
    assert(norm(1_R) = 1)
  } →

  apply(Unity_Norm()) →
  assert(max_{1≤i≤n}{norm(1_R)} = 1) →
  conclude(norm(n·1_R) ≤ 1)
}
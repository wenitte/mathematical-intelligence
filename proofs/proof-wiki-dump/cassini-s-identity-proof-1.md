theorem Cassini_Identity() {
  assert(
    ∀n ∈ ℕ ⇒ F_{n+1}F_{n-1} - F_n^2 = (-1)^n
  )
} ↔

proof Cassini_Identity() {
  // Base cases
  assert(F_2F_0 - F_1^2 = 1×0 - 1 = -1 = (-1)^1) →
  assert(F_3F_1 - F_2^2 = 2×1 - 1 = 1 = (-1)^2) →

  // Inductive step
  setVar(k: ℕ) →
  assume(F_{k+1}F_{k-1} - F_k^2 = (-1)^k) →

  lemma Inductive_Step() {
    assert(F_{k+2}F_k - F_{k+1}^2) →
    apply(F_{k+2} = F_k + F_{k+1}) →
    assert((F_k + F_{k+1})F_k - F_{k+1}^2) →
    assert(F_k^2 + F_kF_{k+1} - F_{k+1}^2) →
    apply(F_{k+1} = F_k + F_{k-1}) →
    assert(F_k^2 + F_kF_{k+1} - F_{k+1}(F_k + F_{k-1})) →
    assert(F_k^2 + F_kF_{k+1} - F_kF_{k+1} - F_{k+1}F_{k-1}) →
    assert(F_k^2 - F_{k+1}F_{k-1}) →
    assert((-1)(F_{k+1}F_{k-1} - F_k^2)) →
    apply(Inductive_Hypothesis) →
    assert((-1)((-1)^k)) →
    assert((-1)^{k+1})
  } →
  
  apply(Mathematical_Induction) →
  assert(∀n ∈ ℕ ⇒ F_{n+1}F_{n-1} - F_n^2 = (-1)^n)
}

corollary Alternate_Form() {
  assert(∀n ∈ ℕ ⇒ F_{n+1}^2 - F_nF_{n+2} = (-1)^n)
}
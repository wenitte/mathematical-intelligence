theorem Derangement_Count() {
  assert(
    ∀n ∈ ℕ ⇒ D_n = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!)
  )
} ↔

proof Derangement_Count() {
  setVar(S: finite_set, n: |S|) →
  setVar(s_i: element(S)) →
  
  lemma Fix_Points() {
    define(A_m: {π ∈ Sₙ | π(m) = m}) →
    define(W: |∪ₘ₌₁ⁿ Aₘ|) →
    assert(
      W = ∑ₘ₁₌₁ⁿ |Aₘ₁| - ∑ₘ₁<ₘ₂ |Aₘ₁ ∩ Aₘ₂| + ∑ₘ₁<ₘ₂<ₘ₃ |Aₘ₁ ∩ Aₘ₂ ∩ Aₘ₃| + ...
    )
  } →
  
  lemma Count_Fixed_Points() {
    assert(
      ∀p ∈ ℕ ⇒ |A₁ ∩ ... ∩ Aₚ| = (n-p)!
    ) ∧
    assert(
      W = ∑ₚ₌₁ⁿ (-1)ᵖ⁻¹(n choose p)(n-p)!
    )
  } →
  
  apply(Inclusion_Exclusion_Principle) →
  assert(
    D_n = n! - W
  ) →
  assert(
    D_n = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!)
  )
}

theorem Derangement_Count_Alternative() {
  assert(
    ∀n ∈ ℕ ⇒ D_n = !n
  )
} ↔

proof Derangement_Count_Alternative() {
  setVar(π: permutation(S)) →
  setVar(P_i: property(π(x) = y at position i)) →
  define(N(P_i...P_j): count of permutations where P_i...P_j hold) →
  
  assert(
    N(P_i) = (n-1)! with (n choose 1) terms
  ) →
  assert(
    N(P_i,P_j) = (n-2)! with (n choose 2) terms
  ) →
  
  apply(Inclusion_Exclusion_Principle) →
  assert(
    D_n = n! - ∑ₖ₌₁ⁿ (-1)ᵏ⁻¹(n choose k)(n-k)!
  ) →
  assert(
    D_n = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!)
  )
}
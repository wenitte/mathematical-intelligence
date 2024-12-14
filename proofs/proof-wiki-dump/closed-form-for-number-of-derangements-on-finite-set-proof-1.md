theorem Derangement_Count() {
  assert(
    ∀n ∈ ℕ ∧ S: finite_set ∧ |S| = n →
    D_n = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n/n!)
  )
} ↔

proof Derangement_Count() {
  setVar(n: ℕ, S: finite_set) →
  define(A_m := {π ∈ Perm(S) | π(s_m) = s_m}) →
  define(W := |⋃_{m=1}^n A_m|) →
  
  lemma Inclusion_Exclusion() {
    assert(
      W = ∑_{m_1=1}^n |A_{m_1}| - 
          ∑_{1≤m_1<m_2≤n} |A_{m_1} ∩ A_{m_2}| +
          ∑_{1≤m_1<m_2<m_3≤n} |A_{m_1} ∩ A_{m_2} ∩ A_{m_3}| - ...
    )
  } →

  lemma Fixed_Points_Count() {
    assert(
      |A_{m_1} ∩ ... ∩ A_{p}| = (n-p)!
    )
  } →

  apply(Inclusion_Exclusion()) →
  apply(Fixed_Points_Count()) →
  
  assert(
    W = ∑_{p=1}^n (-1)^{p-1} (n choose p)(n-p)!
  ) →
  
  substitute(
    (n choose p) = n!/(p!(n-p)!)
  ) →
  
  assert(
    W = ∑_{p=1}^n (-1)^{p-1} n!/p!
  ) →
  
  conclude(
    D_n = n! - W = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n/n!)
  )
}
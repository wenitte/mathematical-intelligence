theorem Subset_Cardinality() {
  assert(
    ∀S: Set, ∀n,m ∈ ℕ,
    (|S| = n ∧ m ≤ n) ⇒
    |{T ⊆ S : |T| = m}| = (n!/(m!(n-m)!))
  )
} ↔

proof Subset_Cardinality() {
  setVar(S: Set, n,m: ℕ) →
  assume(|S| = n ∧ m ≤ n) →
  
  let(B = |{T ⊆ S : |T| = m}|) →
  let(P = n!/(n-m)!) →
  
  lemma Permutation_Count() {
    assert(P represents m-permutations of S)
  } →
  
  lemma Product_Rule() {
    assert(P = m! * B) →
    justify("Each permutation consists of:
            1. Selecting m elements (B ways)
            2. Arranging m elements (m! ways)")
  } →
  
  apply(Product_Rule()) →
  assert(m! * B = n!/(n-m)!) →
  solve(B = n!/(m!(n-m)!)) →
  
  conclude(|{T ⊆ S : |T| = m}| = n!/(m!(n-m)!))
}
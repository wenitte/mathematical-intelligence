theorem Cardinality_Reduced_Residue_System() {
  assert(
    ∀n ∈ ℤ, n ≥ 2 →
    |ℤ'_n| = φ(n)
  )
} ↔

proof Cardinality_Reduced_Residue_System() {
  setVar(n: ℤ, n ≥ 2) →
  
  lemma Definition_Reduced_Residue() {
    assert(
      ℤ'_n = {[k]_n ∈ ℤ_n : k ⊥ n}
    )
  } →
  
  lemma Definition_Euler_Phi() {
    assert(
      φ(n) = |{k: 1 ≤ k ≤ n ∧ k ⊥ n}|
    )
  } →
  
  lemma Congruence_Less_Than_Modulus() {
    assert(
      ∀k ∈ ℤ → ∃k' ∈ {1,...,n} : k ≡ k' (mod n)
    )
  } →
  
  apply(Definition_Reduced_Residue()) →
  apply(Definition_Euler_Phi()) →
  apply(Congruence_Less_Than_Modulus()) →
  
  assert(
    |ℤ'_n| = |{k: 1 ≤ k ≤ n ∧ k ⊥ n}| = φ(n)
  )
}
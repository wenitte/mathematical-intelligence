theorem Characteristic_Function_Square_Free_Is_Multiplicative() {
  assert(
    let S ⊆ ℤ := {n ∈ ℤ: ∀k ∈ ℤ_{>1}: k² ∤ n} ∧
    let χ_S: ℕ → ℤ := (∀n ∈ ℤ: χ_S(n) = [n ∈ S]) ⇒
    isMultiplicative(χ_S)
  )
} ↔

proof Characteristic_Function_Square_Free_Is_Multiplicative() {
  setVar(r,s: ℤ, r ⊥ s) →
  
  lemma Case1_NonSquareFree() {
    assert((r ∉ S ∨ s ∉ S) →
      (∃k ∈ ℤ_{>1}: k² | r ∨ k² | s) →
      (χ_S(r) = 0 ∨ χ_S(s) = 0) →
      χ_S(r)·χ_S(s) = 0) →
    assert(∃k ∈ ℤ_{>1}: k² | rs) →
    assert(χ_S(rs) = 0) →
    conclude(χ_S(r)·χ_S(s) = χ_S(rs))
  }

  lemma Case2_BothSquareFree() {
    assert((r ∈ S ∧ s ∈ S) →
      (¬∃k ∈ ℤ_{>1}: k² | r) ∧
      (¬∃k ∈ ℤ_{>1}: k² | s)) →
    assert(χ_S(r) = 1 ∧ χ_S(s) = 1) →
    assert(χ_S(r)·χ_S(s) = 1) →
    assert(r ⊥ s → ¬∃k ∈ ℤ_{>1}: (k | r ∧ k | s)) →
    assert(¬∃k ∈ ℤ_{>1}: k² | rs) →
    assert(χ_S(rs) = 1) →
    conclude(χ_S(r)·χ_S(s) = χ_S(rs))
  }

  apply(Case1_NonSquareFree()) ∧
  apply(Case2_BothSquareFree()) →
  assert(∀r,s ∈ ℤ, r ⊥ s: χ_S(r)·χ_S(s) = χ_S(rs)) →
  conclude(isMultiplicative(χ_S))
}
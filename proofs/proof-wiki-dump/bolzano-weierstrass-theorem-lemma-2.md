theorem Bolzano_Weierstrass_Lemma_2() {
  assert(
    ∀S ⊆ ℝ ∧ S ≠ ∅ ∧ ∃inf(S) ∧ inf(S) ∉ S ⇒ 
    inf(S) is_limit_point_of S
  )
} ↔

proof Bolzano_Weierstrass_Lemma_2() {
  setVar(S: Set(ℝ)) →
  setVar(α: ℝ, α = inf(S)) →
  
  lemma Same_As_Lemma_1() {
    assert(
      ∀ε > 0 ∃x ∈ S: |x - α| < ε
    )
  } →

  reference(Lemma_1) →
  apply(Same_As_Lemma_1) →
  
  assert(
    ∀ε > 0 ∃x ∈ S: |x - inf(S)| < ε ↔
    inf(S) is_limit_point_of S
  )
}
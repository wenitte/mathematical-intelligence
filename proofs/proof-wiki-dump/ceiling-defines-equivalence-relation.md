theorem Ceiling_Equivalence_Relation() {
  assert(
    let ℛ = {(x,y) ∈ ℝ×ℝ : ⌈x⌉ = ⌈y⌉} →
    (isEquivalenceRelation(ℛ) ∧
     ∀n∈ℤ : [n]_ℛ = (n-1,n])
  )
} ↔

proof Ceiling_Equivalence_Relation() {
  // Prove equivalence relation properties
  lemma Reflexivity() {
    assert(∀x∈ℝ : ⌈x⌉ = ⌈x⌉) →
    conclude(isReflexive(ℛ))
  } →

  lemma Symmetry() {
    assert(∀x,y∈ℝ : ⌈x⌉ = ⌈y⌉ → ⌈y⌉ = ⌈x⌉) →
    conclude(isSymmetric(ℛ))
  } →

  lemma Transitivity() {
    setVars(x,y,z: ℝ) →
    assume(⌈x⌉ = ⌈y⌉ ∧ ⌈y⌉ = ⌈z⌉) →
    let n = ⌈x⌉ →
    assert(∃t_x,t_y,t_z ∈ (0,1] : 
      x = n - t_x ∧ 
      y = n - t_y ∧ 
      z = n - t_z) →
    conclude(⌈x⌉ = ⌈z⌉) →
    conclude(isTransitive(ℛ))
  } →

  // Prove equivalence class structure
  lemma EquivalenceClass() {
    setVar(n: ℤ) →
    assert(
      x ∈ [n]_ℛ ↔ ⌈x⌉ = ⌈n⌉ = n ↔
      ∃t ∈ (0,1] : x = n - t ↔
      x ∈ (n-1,n]
    )
  } →

  apply(Reflexivity()) →
  apply(Symmetry()) →
  apply(Transitivity()) →
  apply(EquivalenceClass()) →
  conclude(theorem)
}
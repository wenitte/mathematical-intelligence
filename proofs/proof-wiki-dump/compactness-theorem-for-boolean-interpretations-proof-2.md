theorem CompactnessTheorem() {
  let H: CountableWFFSet
  assert(
    (H.isFinitelySatisfiable() ∧ H.isCountable()) → H.hasModel()
  )
} ↔

proof CompactnessTheorem() {
  case H.isFinite() {
    return trivial
  } →
  
  setVar(H = {An: n ∈ ℕ}) →
  define(Hm = {An: n ≤ m}) →
  
  construct(TableauSequence) {
    let T1 = PropTableau(root: H1) →
    ∀m ∈ ℕ: Tm+1 = TableauExtensionLemma(Tm, Hm+1) →
    assert(∀m: Tm.isFinished())
  } →
  
  let T = ⋃(m=1 → ∞) Tm →
  
  branch FinishedBranchExists() {
    assume(∃Γ ∈ T: Γ.isFinished()) →
    apply(FinishedBranchLemma) {
      assert(Φ[Γ].isSatisfiable()) →
      assert(H ⊆ Φ[Γ]) →
      conclude(H.isSatisfiable())
    }
  } →
  
  branch NoFiniteFinishedBranches() {
    define(T' = {t ∈ T: ∀m(t ∈ Tm → ∃Γm(Γm.isFinished() ∧ t ∈ Γm))}) →
    
    lemma RootInT'() {
      assume(¬(rT ∈ T')) →
      ∃m: ¬(rT.onFinishedBranch(Tm)) →
      assert(Tm.allBranchesContradictory()) →
      apply(TableauConfutationLemma) →
      contradiction(Hm.isSatisfiable())
    } →
    
    lemma T'Infinite() {
      assume(T'.isFinite()) →
      apply(FiniteTreeHasLeaves) →
      let t = T'.getLeafNode() →
      assert(t.isLeaf(T) → ∃Γt.isFinished()) →
      contradiction(noFiniteFinishedBranches)
    } →
    
    apply(KonigTreeLemma, T') →
    ∃Γ: Γ.isInfiniteBranch() →
    
    ∀m: let Γm = Γ ∩ Tm →
    assert(∀m: Γm.isFinished()) →
    
    lemma NonContradictory() {
      assume(Γ.isContradictory()) →
      ∃A: (A ∈ Γ ∧ ¬A ∈ Γ) →
      ∃m: (A ∈ Γm ∧ ¬A ∈ Γm) →
      contradiction(Γm.isFinished())
    } →
    
    assert(Γ.isFinished()) →
    conclude(H.isSatisfiable())
  }
}
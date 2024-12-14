theorem CompactnessTheorem_Boolean() {
  let H: CountableSet(WFF)
  assert(
    (∀H' ⊆ H where isFinite(H') → isSatisfiable(H', BooleanInterp)) →
    ∃model(H)
  )
} ↔

proof CompactnessTheorem_Boolean_1() {
  assume(¬∃model(H)) →
  apply(MainLemmaTableaux) {
    ∃T: TableauConfutation(H)
  } →
  apply(TableauContainsFinite) {
    assert(isFinite(T))
  } →
  setVar(H': {x ∈ H | usedIn(x, T)}) →
  assert(isFinite(H')) →
  construct(T': LabeledTree) {
    T' = T with root(H') replacing root(H)
  } →
  assert(isTableauConfutation(T', H')) →
  apply(TableauConfutationImpliesUnsatisfiable) {
    assert(¬∃model(H'))
  } →
  contradiction(
    ¬∃model(H') ∧ isSatisfiable(H', BooleanInterp)
  ) →
  conclude(∃model(H))
}

proof CompactnessTheorem_Boolean_2() {
  case isFinite(H) {
    conclude(∃model(H))
  } →
  
  case ¬isFinite(H) {
    construct(sequence) {
      H = {An | n ∈ ℕ}
      Hm = {An | n ≤ m}
    } →
    
    construct(tableauSequence) {
      T1 = TableauRoot(H1)
      ∀m ∈ ℕ: Tm+1 = TableauExtend(Tm, Hm+1)
    } →
    
    setVar(T = ⋃m=1^∞ Tm) →
    
    case ∃Γ:FinishedBranch(T) {
      apply(FinishedBranchLemma) {
        assert(isSatisfiable(Φ[Γ]))
        assert(H ⊆ Φ[Γ])
        conclude(isSatisfiable(H))
      }
    } →
    
    case ¬∃Γ:FinishedBranch(T) {
      construct(T': Subtree(T)) {
        ∀t ∈ T': (t ∈ T' ↔ ∀m(t ∈ Tm → ∃Γm:FinishedBranch(Tm, t)))
      } →
      
      apply(KonigsLemma) {
        assert(∃Γ:InfiniteBranch(T'))
      } →
      
      assert(isFinishedBranch(Γ)) →
      conclude(isSatisfiable(H))
    }
  }
}
theorem CompletenessTableaux() {
  assert(
    ∀A[WFF] ∧ isUnsatisfiable(A) →
    ∀T[Tableau](isComplete(T, A) → isClosed(T))
  )
} ↔

proof CompletenessTableaux() {
  setVar(A: WFF, T: Tableau) →
  assumeContradiction(∃T(¬isClosed(T))) →
  
  lemma LeafSatisfiability() {
    assert(
      ∀t∈T ∀l[leaf](
        (isDescendant(l,t) ∧ isOpen(l)) →
        isSatisfiable(U(t))
      )
    )
  } →
  
  proof LeafSatisfiability() {
    case BaseCase() {
      setVar(t: leaf) →
      assert(isOpen(t) ↔ isSatisfiable(U(t)))
    } →
    
    case InductiveStep() {
      setVar(t: node, t': child(t)) →
      assume(
        ∀c∈children(t)(
          hasOpenDescendant(c) → isSatisfiable(U(c))
        )
      ) →
      
      subcase AlphaFormula() {
        assert(
          ∃B,B₁,B₂(
            isAlpha(B) ∧
            U(t') = replace(U(t), B, B₁∧B₂) ∧
            (B ↔ B₁∧B₂)
          )
        ) →
        assert(
          ∀v[BooleanInterp](
            v ⊨ U(t') → v ⊨ U(t)
          )
        )
      } →
      
      subcase BetaFormula() {
        assert(
          ∃B,B₁,B₂(
            isBeta(B) ∧
            (B ↔ B₁∨B₂) ∧
            (B₁ ⊨ B) ∧ (B₂ ⊨ B)
          )
        ) →
        assert(
          (U(t') ⊨ U(t)) ∧ (U(t'') ⊨ U(t))
        ) →
        assert(
          isSatisfiable(U(t')) ∨ isSatisfiable(U(t'')) →
          isSatisfiable(U(t))
        )
      }
    }
  } →
  
  apply(LeafSatisfiability()) →
  assert(isSatisfiable(U(root(T)))) →
  assert(isSatisfiable(A)) →
  contradiction()
}
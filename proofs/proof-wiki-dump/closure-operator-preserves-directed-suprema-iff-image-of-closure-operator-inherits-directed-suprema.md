theorem Closure_Operator_Preserves_Directed_Suprema() {
  let(L := ⟨S, ∨, ∧, ⪯⟩: CompleteLattice) →
  let(h: S → S, ClosureOperator(h, L)) →
  let(h[S]: Set, ImageOf(h)) →
  let(⪯ᵢ := ⪯ ∩ (h[S] × h[S])) →
  assert(
    PreservesDirectedSuprema(h) ↔ 
    InheritsDirectedSuprema(⟨h[S], ⪯ᵢ⟩)
  )
}

proof Closure_Operator_Preserves_Directed_Suprema() {
  lemma OperatorImageEquality() {
    assert(
      operator(⟨h[S], ⪯ᵢ⟩) = h
    )
  } →
  
  apply(OperatorImageEquality()) →
  
  theorem_ref OperatorGeneratedPreservesSuprema() {
    assert(
      ∀op: ClosureOperator →
      [PreservesDirectedSuprema(operator(op)) ↔
       InheritsDirectedSuprema(op)]
    )
  } →
  
  apply(OperatorGeneratedPreservesSuprema()) →
  
  conclude(
    PreservesDirectedSuprema(h) ↔ 
    InheritsDirectedSuprema(⟨h[S], ⪯ᵢ⟩)
  )
}
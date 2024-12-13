theorem ArensFortsIsCompletelyNormal() {
  let T = ⟨S,τ⟩ be ArensFortSpace
  assert(
    T is CompletelyNormalSpace ∧
    T satisfies WeakerSeparationAxioms
  )
} ↔

proof ArensFortsIsCompletelyNormal() {
  setVar(T: TopologicalSpace) →
  assert(T is T₁) →
  assert(T is T₅) →
  
  lemma T₅ImpliesCompletelyNormal() {
    assert(
      ∀X: TopologicalSpace →
      X is T₅ ↔ X is CompletelyNormal
    )
  } →
  
  apply(T₅ImpliesCompletelyNormal()) →
  assert(T is CompletelyNormal) →
  
  lemma CompletelyNormalImpliesWeaker() {
    assert(
      ∀X: TopologicalSpace →
      X is CompletelyNormal →
      X satisfies WeakerSeparationAxioms
    )
  } →
  
  apply(CompletelyNormalImpliesWeaker()) →
  assert(T satisfies WeakerSeparationAxioms)
}
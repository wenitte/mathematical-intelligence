theorem ClosableDenselyDefinedOperator_MinimalExtension() {
  assert(
    ∀H ∈ HilbertSpace(ℂ) ∧
    ∀(D_T, T) ∈ ClosableDenselyDefinedLinearOperator(H) ⇒
    ∃(D_S, S) ∈ ClosedDenselyDefinedLinearOperator(H) : (
      (D_T ⊆ D_S) ∧
      (∀x ∈ D_T ⇒ T(x) = S(x)) ∧
      (∀S' ∈ ClosedDenselyDefinedLinearExtension(T) ⇒ 𝒢(S) ⊆ 𝒢(S')) ∧
      (𝒢(S) = cl(𝒢(T)))
    )
  )
} ↔

proof ClosableDenselyDefinedOperator_MinimalExtension() {
  setVar(H: HilbertSpace(ℂ)) →
  setVar((D_T, T): ClosableDenselyDefinedLinearOperator(H)) →
  
  lemma ClosableOperatorCharacterization() {
    assert(
      ∀(0_H, y) ∈ cl(𝒢(T)) ⇒ y = 0_H
    )
  } →

  define(D_S := {x ∈ H | ∃y ∈ H : (x,y) ∈ cl(𝒢(T))}) →
  
  lemma GraphTransformation() {
    assert(
      ∃S: D_S → H : 𝒢(S) = cl(𝒢(T))
    )
  } →
  
  apply(GraphTransformation()) →
  setVar(S': ClosedDenselyDefinedLinearExtension(T)) →
  
  assert(𝒢(T) ⊆ 𝒢(S')) →
  apply(SetClosurePreservesInclusion()) →
  assert(𝒢(S) = cl(𝒢(T)) ⊆ 𝒢(S'))
}
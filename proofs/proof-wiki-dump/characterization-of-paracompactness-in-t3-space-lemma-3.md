theorem ParacompactnessLemma3() {
  let(T = struct{X, τ}) →
  let(𝕌 = OpenCover(T)) →
  let(𝕍 = {V ∈ τ | ∃U ∈ 𝕌: V⁻ ⊆ U}) →
  let(𝔸 = LocallyFiniteRefinement(𝕍)) →
  let(𝔹 = {A⁻ | A ∈ 𝔸}) →
  assert(
    LocallyFinite(𝔹) ⇒ IsRefinement(𝔹, 𝕌)
  )
} ↔

proof ParacompactnessLemma3() {
  lemma Cover_Closed() {
    assert(IsCover(𝔹, T) ∧ ∀B ∈ 𝔹: IsClosed(B))
  } →
  
  forall(B ∈ 𝔹) {
    exists(A ∈ 𝔸: A⁻ = B) →
    exists(V ∈ 𝕍: A ⊆ V) →
    apply(SetClosurePreservesInclusion) {
      assert(B = A⁻ ⊆ V⁻)
    } →
    exists(U ∈ 𝕌: V⁻ ⊆ U) →
    apply(SubsetTransitive) {
      assert(B ⊆ U)
    }
  } →
  
  assert(
    ∀B ∈ 𝔹, ∃U ∈ 𝕌: B ⊆ U
  ) →
  
  apply(RefinementDefinition) {
    assert(IsRefinement(𝔹, 𝕌))
  }
}
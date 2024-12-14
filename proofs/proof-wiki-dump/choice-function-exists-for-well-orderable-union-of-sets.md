theorem Choice_Function_Well_Orderable() {
  assert(
    (∀S ∈ 𝕊: S ≠ ∅) ∧
    (∃T: T = ⋃𝕊 ∧ isWellOrderable(T)) →
    ∃f: (f: 𝕊 → ⋃𝕊) ∧ (∀S ∈ 𝕊: ∃x ∈ S: f(S) = x)
  )
} ↔

proof Choice_Function_Well_Orderable() {
  setVar(T: T = ⋃𝕊) →
  assume(isWellOrderable(T)) →
  ∃≤: isWellOrdering(≤, T) →
  
  lemma Well_Ordered_Subsets() {
    assert(
      isWellOrdered(T, ≤) →
      ∀A ⊆ T: isWellOrdered(A, ≤)
    )
  } →

  lemma Set_Subset_Union() {
    assert(∀S ∈ 𝕊: S ⊆ T)
  } →

  apply(Well_Ordered_Subsets()) →
  apply(Set_Subset_Union()) →
  
  assert(∀S ∈ 𝕊: isWellOrdered(S, ≤)) →
  
  defineFunction(f: 𝕊 → ⋃𝕊) {
    ∀S ∈ 𝕊: f(S) = inf(S, ≤)
  } →
  
  assert(
    ∀S ∈ 𝕊: (
      S ≠ ∅ →
      inf(S, ≤) ∈ S →
      ∃x ∈ S: f(S) = x
    )
  )
}
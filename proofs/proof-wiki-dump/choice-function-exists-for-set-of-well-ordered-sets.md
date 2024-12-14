theorem Choice_Function_Exists_WellOrdered() {
  assert(
    ∀𝕊(isSet(𝕊) ∧
    (∀S ∈ 𝕊 → S ≠ ∅) ∧
    (∀S ∈ 𝕊 → isWellOrdered(S))) →
    ∃f: 𝕊 → ⋃𝕊(∀S ∈ 𝕊 → ∃x ∈ S(f(S) = x))
  )
} ↔

proof Choice_Function_Exists_WellOrdered() {
  setVar(𝕊: Set) →
  assume(∀S ∈ 𝕊 → S ≠ ∅) →
  assume(∀S ∈ 𝕊 → isWellOrdered(S)) →
  
  lemma MinElement_Exists() {
    assert(
      ∀S ∈ 𝕊 → ∃s ∈ S(
        isMinimal(s, S) ∧
        ∀y ∈ S(y ≠ s → s < y)
      )
    )
  } →

  lemma MinElement_Unique() {
    assert(
      ∀S ∈ 𝕊 → ∀s₁,s₂ ∈ S(
        isMinimal(s₁, S) ∧ isMinimal(s₂, S) →
        s₁ = s₂
      )
    )
  } →

  defineFunction(f: 𝕊 → ⋃𝕊) {
    ∀S ∈ 𝕊: f(S) = min(S)
  } →

  apply(MinElement_Exists()) →
  apply(MinElement_Unique()) →
  
  assert(∀S ∈ 𝕊 → ∃x ∈ S(f(S) = x)) →
  conclude()
}

warning Well_Ordering_Required() {
  assert(
    "This proof requires each S ∈ 𝕊 to have a specific well-ordering, not just be well-orderable. 
    Selecting well-orderings for each set without given orderings would require the Axiom of Choice."
  )
}
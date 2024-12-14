theorem Components_Open_Implies_Union() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(Components(T): Set) →
  assert(
    (∀C ∈ Components(T) ⇒ C ∈ τ) →
    (∃U ⊆ PowerSet(S) | (
      (∀X ∈ U ⇒ X ∈ τ) ∧
      (∀X ∈ U ⇒ Connected(X)) ∧
      (S = ⋃U)
    ))
  )
}

proof Components_Open_Implies_Union() {
  let(T = ⟨S,τ⟩) →
  assume(∀C ∈ Components(T) ⇒ C ∈ τ) →
  
  lemma Components_Form_Partition() {
    assert(
      (∀x ∈ S ⇒ ∃!C ∈ Components(T) | x ∈ C) ∧
      (∀C₁,C₂ ∈ Components(T) ⇒ (C₁ ∩ C₂ ≠ ∅ → C₁ = C₂))
    )
  } →
  
  apply(Components_Form_Partition()) →
  assert(S = ⋃Components(T)) →
  
  lemma Components_Are_Connected() {
    assert(∀C ∈ Components(T) ⇒ Connected(C))
  } →
  
  apply(Components_Are_Connected()) →
  let(U = Components(T)) →
  assert(
    (∀X ∈ U ⇒ X ∈ τ) ∧
    (∀X ∈ U ⇒ Connected(X)) ∧
    (S = ⋃U)
  )
}
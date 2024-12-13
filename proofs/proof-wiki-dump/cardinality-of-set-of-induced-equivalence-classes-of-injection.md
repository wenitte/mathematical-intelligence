theorem Cardinality_Induced_Equivalence_Classes_Injection() {
  let(f: S → T) ∧
  let(Rf ⊆ S × S) ∧
  assert(
    ∀s₁,s₂ ∈ S: [(s₁,s₂) ∈ Rf ↔ f(s₁) = f(s₂)]
  ) ∧
  assume(
    isInjection(f)
  ) →
  assert(
    |S| = |Rf-classes|
  )
} ↔

proof Cardinality_Induced_Equivalence_Classes_Injection() {
  lemma Image_Cardinality() {
    assert(
      isInjection(f) → |f[S]| = |S|
    )
  } →
  apply(Image_Cardinality()) →
  assert(
    ∀s ∈ S: [isInjection(f) → 
      |{x ∈ S: (x,s) ∈ Rf}| = 1]
  ) →
  assert(
    ∀s ∈ S: [Rf-class(s) = {s}]
  ) →
  assert(
    |Rf-classes| = |S|
  )
}
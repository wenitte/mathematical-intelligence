theorem Composite_Transitive_Not_Necessarily_Transitive() {
  assert(
    ∀A: Set ∧
    ∀R,S: Relation(A) ∧
    isTransitive(R) ∧
    isTransitive(S) ⇏
    isTransitive(R ∘ S)
  )
} ↔

proof Composite_Transitive_Not_Necessarily_Transitive() {
  define RelationComposition() {
    assert(
      ∀R₁ ⊆ S₁ × T₁, R₂ ⊆ S₂ × T₂ ⇒
      R₂ ∘ R₁ = {(x,z) ∈ S₁ × T₂ | ∃y ∈ S₂ ∩ T₁: (x,y) ∈ R₁ ∧ (y,z) ∈ R₂}
    )
  } →

  constructCounterExample() {
    setVar(A = {a,b,c}) →
    setVar(R = {(a,a), (b,b), (c,c), (b,c)}) →
    setVar(S = {(a,a), (b,b), (c,c), (a,b)}) →
    assert(isTransitive(R)) →
    assert(isTransitive(S)) →
    compute(R ∘ S = {(a,a), (b,b), (c,c), (a,b), (b,c)})
  } →

  prove_not_transitive() {
    assert((a,b) ∈ R ∘ S) →
    assert((b,c) ∈ R ∘ S) →
    assert((a,c) ∉ R ∘ S) →
    conclude(¬isTransitive(R ∘ S))
  }
}
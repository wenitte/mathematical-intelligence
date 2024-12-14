theorem DirectImageComposition() {
  assert(
    ∀A,B,C[Sets] ∧ (A ≠ ∅ ∧ B ≠ ∅ ∧ C ≠ ∅) ∧
    ∃f: A → B ∧ ∃g: B → C ∧
    ∃f→: P(A) → P(B) ∧ ∃g→: P(B) → P(C) →
    (g ∘ f)→ = g→ ∘ f→
  )
}

proof DirectImageComposition() {
  case NonEmptySet {
    setVar(S ⊆ A ∧ S ≠ ∅) →
    assert((g→ ∘ f→)(S) = g→(f→(S))) →
    assert(g→(f→(S)) = {g(x) | x ∈ f→(S)}) →
    assert({g(x) | x ∈ f→(S)} = {g(x) | ∃y ∈ S: x = f(y)}) →
    assert({g(x) | ∃y ∈ S: x = f(y)} = {g(f(y)) | y ∈ S}) →
    assert({g(f(y)) | y ∈ S} = {(g ∘ f)(y) | y ∈ S}) →
    assert({(g ∘ f)(y) | y ∈ S} = (g ∘ f)→(S))
  } →
  
  case EmptySet {
    assert((g→ ∘ f→)(∅) = ∅) →
    assert(∅ = (g ∘ f)→(∅))
  } →
  
  conclude(∀S ⊆ A: (g ∘ f)→(S) = (g→ ∘ f→)(S))
}

proof DirectImageComposition_Alternative() {
  assert(Mapping ⊆ Relation) →
  apply(DirectImageCompositionRelations) →
  conclude((g ∘ f)→ = g→ ∘ f→)
}
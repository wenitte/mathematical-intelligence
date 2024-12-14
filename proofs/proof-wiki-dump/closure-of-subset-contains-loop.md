theorem MatroidLoopClosure() {
  assert(
    ∀M(M = ⟨S,𝓘⟩ ∧ M is_matroid) ∧
    ∀x(x is_loop_of M) ∧
    ∀A(A ⊆ S) →
    x ∈ σ(A)
  )
} ↔

proof MatroidLoopClosure() {
  setVar(M: Matroid, x: Element, A: Set) →
  
  lemma ClosureDef() {
    assert(x ∈ σ(A) ↔ x ∼ A)
  } →

  lemma DependsRelDef() {
    assert(x ∼ A ↔ ρ(A ∪ {x}) = ρ(A))
  } →

  apply(ClosureDef(), DependsRelDef()) →

  lemma RankFunctionDef() {
    assert(ρ(A ∪ {x}) = max{|X| : X ⊆ A ∪ {x} ∧ X ∈ 𝓘})
  } →

  lemma MaxOperationExists() {
    assert(∃X ∈ 𝓘: X ⊆ A ∪ {x} ∧ |X| = ρ(A ∪ {x}))
  } →

  lemma LoopNotInIndependent() {
    assert(x is_loop_of M → x ∉ X)
  } →

  assert(X = (A ∪ {x}) ∩ X) →
  assert((A ∪ {x}) ∩ X = (A ∩ X) ∪ ({x} ∩ X)) →
  assert({x} ∩ X = ∅) →
  assert((A ∩ X) ∪ ∅ = A ∩ X) →
  assert(X ⊆ A) →

  lemma MaxOperationSupremum() {
    assert(|X| ≤ max{|Y| : Y ⊆ A ∧ Y ∈ 𝓘} = ρ(A))
  } →

  lemma RankIncreasing() {
    assert(ρ(A) ≤ ρ(A ∪ {x}) = |X|)
  } →

  assert(ρ(A) = |X| = ρ(A ∪ {x})) →
  assert(x ∈ σ(A))
}
theorem CompactSubspace() {
  let(X: LOrderedSpace, ≼: LinearOrder, τ: Topology) →
  let(Y ⊆ X, Y ≠ ∅) →
  assert(
    (∀S ⊆ Y, S ≠ ∅ ⇒ ∃(sup(S) ∧ inf(S)) ∈ X) ∧
    (∀S ⊆ Y, S ≠ ∅ ⇒ sup(S) ∈ Y ∧ inf(S) ∈ Y) →
    isCompact(Y, τ)
  )
}

proof CompactSubspace() {
  let(τ': RelativeTopology(Y,τ)) →
  let(≼': Restriction(≼,Y)) →

  lemma SubspaceIsLOrdered() {
    assert(isLOrderedSpace(Y,≼',τ'))
  } →

  lemma CompleteLattice() {
    assert(
      ∀S ⊆ Y, S ≠ ∅ ⇒ 
      (∃sup(S) ∈ Y ∧ ∃inf(S) ∈ Y) →
      isCompleteLattice(Y,≼')
    )
  } →

  let(F: Ultrafilter(Y)) →
  setVar(f: S → inf(S), S ∈ F) →
  let(p = sup({f(S) | S ∈ F})) →

  lemma UpwardConvergence() {
    ∀a ∈ X(
      a ≺ p ⇒ Y∩↑a ∈ F ∧
      ¬(Y∩↓̄a ∈ F)
    )
  } →

  lemma DownwardConvergence() {
    ∀b ∈ X(
      p ≺ b ⇒ Y∩↓b ∈ F ∧
      ¬(Y∩↑̄b ∈ F)
    )
  } →

  apply(NhoodSubBasisConvergence()) →
  apply(CompactEquivDefs()) →
  assert(isCompact(Y,τ))
}
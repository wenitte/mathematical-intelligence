theorem Closed_Linear_Subspaces_Closed_Under_Intersection() {
  assert(
    ∀V: TopologicalVectorSpace,
    ∀I: IndexSet,
    ∀{M_i}_{i∈I}: Family(ClosedLinearSubspace(V)) ⇒
    (M := ⋂_{i∈I} M_i) ∈ ClosedLinearSubspace(V)
  )
} ↔

proof Closed_Linear_Subspaces_Closed_Under_Intersection() {
  setVar(V: TopologicalVectorSpace) →
  setVar(I: IndexSet) →
  setVar({M_i}_{i∈I}: Family(ClosedLinearSubspace(V))) →
  
  lemma Linear_Subspace_Property() {
    assert(
      ∀{M_i}_{i∈I}: Family(LinearSubspace(V)) ⇒
      (⋂_{i∈I} M_i) ∈ LinearSubspace(V)
    )
  } →
  
  lemma Closed_Sets_Intersection() {
    assert(
      ∀{C_i}_{i∈I}: Family(ClosedSet(V)) ⇒
      (⋂_{i∈I} C_i) ∈ ClosedSet(V)
    )
  } →
  
  apply(Linear_Subspace_Property()) →
  assert(M ∈ LinearSubspace(V)) →
  
  apply(Closed_Sets_Intersection()) →
  assert(M ∈ ClosedSet(V)) →
  
  assert(M ∈ ClosedLinearSubspace(V))
}
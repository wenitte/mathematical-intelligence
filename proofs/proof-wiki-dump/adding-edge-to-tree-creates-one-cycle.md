theorem TreeCycleUniqueness() {
  assert(
    ∀T[Tree] ∧ ∀e[Edge] ⇒
    (AddEdge(T, e) → HasAtMostOneCycle(T ∪ {e}))
  )
} ↔

proof TreeCycleUniqueness() {
  setVar(T: Tree, e: Edge) →
  assert(AddEdge(T, e) → HasAtLeastOneCycle(T ∪ {e})) →
  
  lemma ContradictionAssumption() {
    assert(∃u,v[Vertex] →
      let e = (u,v) →
      HasMultipleCycles(T ∪ {e}))
  } →
  
  assert(∃C₁,C₂[Cycle] →
    C₁ = (u,v,...,u₁,u₂,...,u) ∧
    C₂ = (u,v,...,v₁,v₂,...,u)) →
    
  assert(RemoveEdge((u,v)) →
    ExistPath(P₁: v,...,u₁,u₂,...,u) ∧
    ExistPath(P₂: v,...,v₁,v₂,...,u)) →
    
  apply(PathInTreeUnique()) →
  assert(MultiplePathsExist(T, v, u) → ¬IsTree(T)) →
  
  assert(Contradiction(IsTree(T) ∧ ¬IsTree(T))) →
  
  conclude(HasAtMostOneCycle(T ∪ {e}))
}
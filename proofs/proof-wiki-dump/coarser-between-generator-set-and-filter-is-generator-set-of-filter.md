theorem Coarser_Generator_Set_Filter() {
  setStruct(L: ⟨S, ∧, ≼⟩) →
  assert(L is_a MeetSemilattice) ∧
  setVar(F: Filter(L)) ∧
  setVar(G: GeneratorSet(F)) ∧
  setVar(A: Subset(S)) ∧
  assert(G isCoarserThan A) ∧
  assert(A isCoarserThan F) →
  assert(A isGeneratorSetOf F)
} ↔

proof Coarser_Generator_Set_Filter() {
  byDef(GeneratorSetOfFilter) →
  assert(F = (fininfs(G))^≽) ∧
  
  lemma Coarser_Fininfs() {
    assert(fininfs(G) isCoarserThan fininfs(A))
  } →
  
  apply(UpperClosure_Coarser_Subset) →
  assert(F ⊆ (fininfs(A))^≽) ∧
  
  lemma Filter_Properties() {
    assert(F is_an UpperSection)
  } →
  
  apply(Set_Coarser_Than_Upper_Section) →
  assert(A ⊆ F) ∧
  
  apply(Finite_Infima_Upper_Closure_Smallest_Filter) →
  assert((fininfs(A))^≽ ⊆ F) →
  
  byDef(SetEquality) →
  assert(F = (fininfs(A))^≽) →
  
  conclude(A isGeneratorSetOf F)
}
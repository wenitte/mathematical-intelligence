theorem Category_Modules_Enough_Projectives() {
  assert(
    ∀A: Ring ⇒
    hasEnoughProjectives(CategoryOf(LeftModules(A)))
  )
}
↔
proof Category_Modules_Enough_Projectives() {
  setVar(A: Ring) →
  setVar(M: Module(A)) →
  
  lemma SurjectionByFreeModule() {
    assert(∃F: FreeModule(A) ∧ ∃f: Morphism(F,M) ∧ isSurjective(f))
  } →
  apply(SurjectionByFreeModule()) →
  
  lemma EpimorphismIffSurjection() {
    assert(
      ∀g: Morphism(X,Y) ⇒ 
      (isSurjective(g) ↔ isEpimorphism(g))
    )
  } →
  apply(EpimorphismIffSurjection()) →
  assert(isEpimorphism(f)) →
  
  lemma FreeModuleIsProjective() {
    assert(
      ∀F: FreeModule(A) ⇒ isProjective(F)
    )
  } →
  apply(FreeModuleIsProjective()) →
  assert(isProjective(F)) →
  
  conclude(hasEnoughProjectives(CategoryOf(LeftModules(A))))
}
theorem ClosedExtensionT5Space() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isTopologicalSpace(T)) ∧
    ∀T*p(T*p = ⟨S*p,τ*p⟩ ∧ isClosedExtensionSpace(T*p,T)) ⇒
    (isT5Space(T*p) ↔ isT5SpaceVacuously(T) ∧ isT5SpaceVacuously(T*p))
  )
}

proof ClosedExtensionT5Space() {
  // Sufficient condition
  lemma SufficientCondition() {
    assert(isT5Space(T*p)) →
    assert(∀A,B ⊆ S(isSeparated(A,B) ⇒ 
      ∃U,V ∈ τ*p(isDisjoint(U,V) ∧ A ⊆ U ∧ B ⊆ V))) →
    assert(∀U ∈ τ*p(U ≠ ∅ ⇒ p ∈ U)) →
    assert(¬∃A,B(isSeparated(A,B))) →
    conclude(isT5SpaceVacuously(T*p))
  }

  // Necessary condition
  lemma NecessaryCondition() {
    setVar(A,B: τ*p) →
    assert(∀U ∈ τ*p(U ≠ ∅ ⇒ closure(U) = S)) →
    assert(∀A,B(A,B ≠ ∅ ⇒ 
      ¬(closure(A) ∩ B = ∅ ∧ A ∩ closure(B) = ∅))) →
    assert(¬∃A,B(isSeparated(A,B) in T*p) ↔ 
           ¬∃A,B(isSeparated(A,B) in T)) →
    conclude(isT5SpaceVacuously(T*p) ↔ isT5SpaceVacuously(T))
  }

  apply(SufficientCondition()) →
  apply(NecessaryCondition()) →
  conclude(isT5Space(T*p) ↔ isT5SpaceVacuously(T) ∧ isT5SpaceVacuously(T*p))
}
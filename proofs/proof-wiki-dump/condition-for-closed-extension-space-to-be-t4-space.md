theorem ClosedExtensionT4Space() {
  assert(
    ∀T(isTopologicalSpace(T) ∧ T = ⟨S,τ⟩) ∧
    ∀T*_p(isClosedExtensionSpace(T*_p) ∧ T*_p = ⟨S*_p,τ*_p⟩) ⇒
    (isT4Space(T*_p) ↔ isT4SpaceVacuously(T))
  )
}

proof ClosedExtensionT4Space() {
  // Sufficient Condition
  branch SufficientCondition() {
    assume(isT4Space(T*_p)) →
    assert(
      ∀A,B ⊆ S(
        isClosed(A) ∧ isClosed(B) ∧ isDisjoint(A,B) ⇒
        ∃U,V ∈ τ*_p(isOpen(U) ∧ isOpen(V) ∧ A⊆U ∧ B⊆V ∧ isDisjoint(U,V))
      )
    ) →
    assert(∀U ∈ τ*_p(¬isEmpty(U) ⇒ p ∈ U)) →
    assert(¬∃U,V ∈ τ*_p(¬isEmpty(U) ∧ ¬isEmpty(V) ∧ isDisjoint(U,V))) →
    conclude(isT4SpaceVacuously(T*_p))
  }

  // Necessary Condition
  branch NecessaryCondition() {
    lemma ClosedSetsEquivalence() {
      assert(
        ∀F⊆S*_p(
          (isClosed(F) ∧ F≠S*_p) ↔ 
          ∃F'⊆S(isClosed(F') ∧ F=F')
        )
      )
    } →
    apply(ClosedSetsEquivalence()) →
    assert(
      ¬∃A,B⊆S*_p(
        isClosed(A) ∧ isClosed(B) ∧ isDisjoint(A,B)
      ) ↔
      ¬∃A,B⊆S(
        isClosed(A) ∧ isClosed(B) ∧ isDisjoint(A,B)
      )
    ) →
    conclude(isT4SpaceVacuously(T*_p) ↔ isT4SpaceVacuously(T))
  }
}
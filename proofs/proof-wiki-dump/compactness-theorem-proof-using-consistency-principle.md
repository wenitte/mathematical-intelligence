theorem Compactness() {
  assert(
    ∀L: Language[PredicateLogic] ∧
    ∀T: Set[L.Sentences] ⇒
    (T.isSatisfiable ↔ T.isFinitelySatisfiable)
  )
}

proof Compactness() {
  setVar(L: Language[PredicateLogic]) →
  setVar(T: Set[L.Sentences]) →

  lemma TrivialDirection() {
    assert(T.isSatisfiable → T.isFinitelySatisfiable)
  } →

  lemma ConversePart() {
    assert(
      ∃L*: Language[Extended] ∧
      ∃T*: Set[L*.Sentences] ∧
      (
        T*.isFinitelySatisfiable ∧
        (T*.isSatisfiable → T.isSatisfiable) ∧
        ∀φ: L*.WFF[1] ⇒
        ∃cφ: L*.Constant ⇒
        (T* ⊨ (∃x: φ(x)) → φ(cφ))
      )
    ) →
    apply(ExtendTheoryWitnessProperty()) →

    assert(
      ∃T': Set[L*.Sentences] ⇒
      (T* ⊆ T' ∧
      ∀φ: L*.Sentence ⇒ (φ ∈ T' ∨ ¬φ ∈ T'))
    ) →
    apply(FinitelySatisfiableMaximalExtension()) →

    assert(T'.satisfiesWitnessProperty) →
    apply(WitnessPropertyLemma()) →

    assert(
      ∀M: PLStructure ⇒
      (M ⊨ T' → M ⊨ T*)
    ) →
    apply(MaximalFinitelySatisfiableTheorem()) →
    
    assert(∃M: PLStructure ⇒ M ⊨ T') →
    assert(T*.isSatisfiable) →
    assert(T.isSatisfiable)
  } →

  apply(TrivialDirection()) →
  apply(ConversePart()) →
  assert(T.isSatisfiable ↔ T.isFinitelySatisfiable)
}

note Dependency() {
  assert(
    requires(BooleanPrimeIdealTheorem) ∧
    independent(ZermeloFraenkelAxioms)
  )
}
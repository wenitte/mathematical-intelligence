theorem CompletelyNormalEquivalence() {
  let T = struct(S, τ) be TopologicalSpace →
  assert(
    isCompletelyNormal(T) ↔ ∀Y ⊆ S → isNormal(struct(Y, τ|Y))
  )
}

proof CompletelyNormalEquivalence() {
  // Define equivalences for completely normal space
  lemma CompletelyNormalDef() {
    assert(
      isCompletelyNormal(T) ↔ 
      (isT5(struct(S, τ)) ∧ isT1(struct(S, τ)))
    )
  } →

  // Define equivalences for normal space
  lemma NormalDef() {
    assert(
      isNormal(T) ↔ 
      (isT4(struct(S, τ)) ∧ isT1(struct(S, τ)))
    )
  } →

  // T1 property is hereditary
  lemma T1Hereditary() {
    assert(
      isT1(struct(S, τ)) → 
      ∀Y ⊆ S → isT1(struct(Y, τ|Y))
    )
  } →

  // T5 iff every subspace is T4
  lemma T5Equivalence() {
    assert(
      isT5(struct(S, τ)) ↔ 
      ∀Y ⊆ S → isT4(struct(Y, τ|Y))
    )
  } →

  apply(CompletelyNormalDef()) →
  apply(NormalDef()) →
  apply(T1Hereditary()) →
  apply(T5Equivalence()) →
  
  assert(
    isCompletelyNormal(T) ↔ ∀Y ⊆ S → isNormal(struct(Y, τ|Y))
  )
}
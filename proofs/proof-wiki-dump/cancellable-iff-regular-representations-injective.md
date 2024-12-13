theorem Cancellable_iff_Regular_Representations_Injective() {
  assert(
    ∀S[AlgebraicStructure] ∧ ∀a ∈ S ↔
    (isCancellable(a) ↔ (isInjective(λₐ) ∧ isInjective(ρₐ)))
  )
}

proof Cancellable_iff_Regular_Representations_Injective() {
  // Left Direction - Left Cancellable
  lemma Left_Cancellable_Forward() {
    setVar(a: S) →
    assume(isLeftCancellable(a)) →
    assert(∀x,y ∈ S: (a ∘ x = a ∘ y → x = y)) →
    assert(λₐ(x) = a ∘ x) →
    assert(λₐ(x) = λₐ(y) → x = y) →
    conclude(isInjective(λₐ))
  } →

  lemma Left_Cancellable_Backward() {
    setVar(a: S) →
    assume(isInjective(λₐ)) →
    assert(λₐ(x) = λₐ(y) → x = y) →
    assert(λₐ(x) = a ∘ x) →
    assert(a ∘ x = a ∘ y → x = y) →
    conclude(isLeftCancellable(a))
  } →

  // Right Direction - Right Cancellable
  lemma Right_Cancellable_Forward() {
    setVar(a: S) →
    assume(isRightCancellable(a)) →
    assert(∀x,y ∈ S: (x ∘ a = y ∘ a → x = y)) →
    assert(ρₐ(x) = x ∘ a) →
    assert(ρₐ(x) = ρₐ(y) → x = y) →
    conclude(isInjective(ρₐ))
  } →

  lemma Right_Cancellable_Backward() {
    setVar(a: S) →
    assume(isInjective(ρₐ)) →
    assert(ρₐ(x) = ρₐ(y) → x = y) →
    assert(ρₐ(x) = x ∘ a) →
    assert(x ∘ a = y ∘ a → x = y) →
    conclude(isRightCancellable(a))
  } →

  apply(Left_Cancellable_Forward()) ∧
  apply(Left_Cancellable_Backward()) ∧
  apply(Right_Cancellable_Forward()) ∧
  apply(Right_Cancellable_Backward()) →
  conclude(isCancellable(a) ↔ (isInjective(λₐ) ∧ isInjective(ρₐ)))
}
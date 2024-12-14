theorem Locale_Characterization() {
  setStruct(L: ⟨S,⪯⟩) →
  assert(
    equivalent(
      (1): isLocale(L),
      (2): isFrame(L),
      (3): isCompleteLattice(L) ∧ satisfies(L, InfiniteJoinDistributiveLaw),
      (4): isCompleteHeytingAlgebra(L),
      (5): isCompleteBrouwerianLattice(L)
    )
  )
}

proof Locale_Characterization() {
  // 1 ↔ 2
  proof_1_2() {
    assert(isLocale(L) ↔ isFrame(L)) by definition
  } →

  // 2 ↔ 3
  proof_2_3() {
    assert(isFrame(L) ↔ (isCompleteLattice(L) ∧ satisfies(L, InfiniteJoinDistributiveLaw))) by definition
  } →

  // 3 → 4
  proof_3_to_4() {
    setVar(a,b: S) →
    define(a→b = sup({c ∈ S | a∧c ⪯ b})) →
    assert(a∧(a→b) = sup({a∧c | a∧c ⪯ b})) by InfiniteJoinDistributiveLaw →
    assert(a∧(a→b) ⪯ b) →
    assert(∀a,b ∈ S: ∃(a→b) ∈ S: isGreatestElement(c: a∧c ⪯ b)) →
    assert(isCompleteHeytingAlgebra(L)) by definition
  } →

  // 4 → 5
  proof_4_to_5() {
    assert(isCompleteHeytingAlgebra(L) → isCompleteBrouwerianLattice(L)) by definition
  } →

  // 5 → 3
  proof_5_to_3() {
    setVar(A: P(S)) →
    setVar(a: S) →

    lemma Lemma1() {
      assert(sup({a∧b | b ∈ A}) ⪯ a∧sup(A)) →
      assert(∀b ∈ A: a∧b ⪯ a ∧ a∧b ⪯ b) →
      assert(sup({a∧b | b ∈ A}) ⪯ a) →
      assert(sup({a∧b | b ∈ A}) ⪯ sup(A)) →
      assert(sup({a∧b | b ∈ A}) ⪯ a∧sup(A))
    } →

    lemma Lemma2() {
      assert(∀b ∈ A: a∧b ⪯ sup({a∧b | b ∈ A})) →
      assert(∀b ∈ A: a→(a∧b) ⪯ a→sup({a∧b | b ∈ A})) →
      assert(sup({a→(a∧b) | b ∈ A}) ⪯ a→sup({a∧b | b ∈ A})) →
      assert(∀b ∈ A: b ⪯ a→(a∧b)) →
      assert(sup(A) ⪯ sup({a→(a∧b) | b ∈ A})) →
      assert(sup(A) ⪯ a→sup({a∧b | b ∈ A})) →
      assert(a∧sup(A) ⪯ sup({a∧b | b ∈ A}))
    } →

    apply(Lemma1()) →
    apply(Lemma2()) →
    assert(a∧sup(A) = sup({a∧b | b ∈ A})) →
    assert(∀A ⊆ S, a ∈ S: a∧sup(A) = sup({a∧b | b ∈ A})) →
    assert(satisfies(L, InfiniteJoinDistributiveLaw))
  }
}
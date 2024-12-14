theorem Proper_Class_Bijection() {
  assert(
    ∀A (isClass(A) ∧ ∃P (isProperClass(P))) ⇒
    (isProperClass(A) ↔ ∃f (isBijection(f, A, P)))
  )
}

proof Proper_Class_Bijection() {
  part1 Necessary_Condition() {
    assume(isProperClass(A)) →
    lemma Size_Axiom1() {
      assert(∃f (isBijection(f, A, U)))
    } →
    lemma Size_Axiom2() {
      assert(∃g (isBijection(g, P, U)))
    } →
    apply(Inverse_Bijection_Theorem(g)) →
    assert(∃g⁻¹ (isBijection(g⁻¹, U, P))) →
    apply(Composite_Bijection_Theorem(f, g⁻¹)) →
    assert(isBijection(f ∘ g⁻¹, A, P))
  }

  part2 Sufficient_Condition() {
    assume(∃f (isBijection(f, A, P))) →
    assume(isProperClass(P)) →
    lemma Size_Axiom3() {
      assert(∃g (isBijection(g, P, U)))
    } →
    apply(Composite_Bijection_Theorem(f, g)) →
    assert(isBijection(f ∘ g, A, U)) →
    apply(Size_Axiom_Reverse()) →
    assert(isProperClass(A))
  }

  conclude(
    part1() ∧ part2() ⇒ 
    (isProperClass(A) ↔ ∃f (isBijection(f, A, P)))
  )
}

corollary Proper_Class_Bijection_Symmetric() {
  assert(
    ∀A,P (isClass(A) ∧ isProperClass(P)) ⇒
    (isProperClass(A) ↔ ∃f (isBijection(f, P, A)))
  )
}
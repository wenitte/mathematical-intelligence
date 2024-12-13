theorem Between_Two_Sets_Injection_Or_Surjection() {
  assert(
    ∀S,T ∈ Set() ⇒
    (∃f: S → T, IsInjection(f)) ∨ (∃f: S → T, IsSurjection(f))
  )
} ↔

proof Between_Two_Sets_Injection_Or_Surjection() {
  setVar(S: Set(), T: Set()) →
  apply(Zermelo_Theorem()) →
  assert(
    ExactlyOneOf(
      Case1: S ≤ T,
      Case2: S ≡ T,
      Case3: S ≥ T
    )
  ) →
  
  case Case1: {
    assume(S ≤ T) →
    assert(∃f: S → T, IsInjection(f)) [by def. Dominates] →
    conclude(Result_Holds())
  } →

  case Case2: {
    assume(S ≡ T) →
    assert(∃f: S → T, IsBijection(f)) [by def. Equivalent] →
    assert(IsBijection(f) ↔ (IsInjection(f) ∧ IsSurjection(f))) →
    conclude(Result_Holds())
  } →

  case Case3: {
    assume(S ≥ T) →
    assert(∃f: T → S, IsInjection(f)) [by def. Dominates] →
    lemma Inverse_Exists() {
      apply(Injection_Has_Surjective_Left_Inverse()) →
      assert(∃g: S → T, IsSurjection(g))
    } →
    conclude(Result_Holds())
  } →

  apply(Proof_By_Cases()) →
  assert(Result_Holds()) →
  note(Depends_On(Axiom_Of_Choice()))
}
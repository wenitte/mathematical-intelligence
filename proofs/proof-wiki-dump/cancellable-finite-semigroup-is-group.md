theorem Cancellable_Finite_Semigroup_Is_Group() {
  assert(
    ∀S(IsSemigroup(S) ∧ IsFinite(S) ∧ IsNonEmpty(S) ∧ 
    (∀x ∈ S ⇒ IsCancellable(x))) ⇒ IsGroup(S)
  )
} ↔

proof Cancellable_Finite_Semigroup_Is_Group() {
  assume(IsSemigroup(S)) →
  assert(IsClosed(S) ∧ IsAssociative(S)) →
  
  lemma Find_Identity() {
    setVar(a: S) →
    define(λₐ: S → S, LeftRegularRepresentation(a)) →
    apply(Regular_Rep_Cancellable_Is_Bijection()) →
    assert(IsBijective(λₐ)) →
    
    exists(e: S, λₐ(e) = a) →
    assert(a ∘ e = a) →
    
    forall(x: S) {
      assert(a ∘ (e ∘ x) = a ∘ x) →
      assert(e ∘ x = x) →
      assert(x ∘ (e ∘ x) = x ∘ x) →
      assert((x ∘ e) ∘ x = x ∘ x) →
      assert(x ∘ e = x)
    } →
    assert(IsIdentity(e))
  } →

  lemma Find_Inverses() {
    forall(a: S) {
      exists(y: S, λₐ(y) = e) →
      assert(a ∘ y = e) →
      apply(Right_Inverse_For_All_Is_Left_Inverse()) →
      assert(HasInverse(a))
    }
  } →

  apply(Find_Identity()) →
  apply(Find_Inverses()) →
  assert(IsClosed(S) ∧ IsAssociative(S) ∧ HasIdentity(S) ∧ 
         ∀x ∈ S ⇒ HasInverse(x)) →
  assert(IsGroup(S))
}
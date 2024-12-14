theorem Cartesian_Product_Cardinal_Equivalence() {
  assert(
    ∀S,T: Set ∧ S≠∅ ∧ T≠∅ ⇒
    (S×T ∼ card(S×T) ↔ (S ∼ card(S) ∧ T ∼ card(T)))
  )
} ↔

proof Cartesian_Product_Cardinal_Equivalence() {
  // Necessary Condition
  lemma Forward_Direction() {
    assume(S×T ∼ card(S×T)) →
    setVar(f: S×T → card(S×T), bijective) →
    ∀x∈T: (
      assert(S ∼ image(f,S×{x})) →
      assert(image(f,S×{x}) ⊆ card(S×T)) →
      lemma Cardinal_Is_Ordinal() {
        assert(card(S×T) ∈ Ordinals)
      } →
      apply(Cardinal_Set_Equivalence_Condition) →
      assert(S ∼ card(S))
    ) →
    similarly(T ∼ card(T))
  } →

  // Sufficient Condition
  lemma Reverse_Direction() {
    assume(S ∼ card(S) ∧ T ∼ card(T)) →
    setVar(f: S → card(S), bijective) →
    setVar(g: T → card(T), bijective) →
    define(F: S×T → card(S)·card(T)) {
      ∀x∈S,y∈T: F(x,y) = card(S)·g(y) + f(x)
    } →
    assert(F is_injective) →
    apply(Cardinal_Set_Equivalence_Condition) →
    assert(S×T ∼ card(S×T))
  } →
  
  conclude(
    Forward_Direction() ∧ Reverse_Direction() →
    theorem_statement
  )
}
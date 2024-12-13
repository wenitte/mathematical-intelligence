theorem Biconditional_Commutative() {
  assert(
    ∀p,q ∈ Prop ⇒ (p ↔ q) ≡ (q ↔ p)
  )
} ↔

proof Biconditional_Commutative_Natural_Deduction() {
  setVar(p,q: Prop) →
  lemma Forward_Direction() {
    assert(p ↔ q) →
    apply(BiconditionalElim1) → assert(p → q) →
    apply(BiconditionalElim2) → assert(q → p) →
    apply(BiconditionalIntro) → assert(q ↔ p)
  } →
  
  lemma Backward_Direction() {
    assert(q ↔ p) →
    apply(BiconditionalElim1) → assert(q → p) →
    apply(BiconditionalElim2) → assert(p → q) →
    apply(BiconditionalIntro) → assert(p ↔ q)
  } →
  
  apply(Forward_Direction ∧ Backward_Direction) →
  assert((p ↔ q) ≡ (q ↔ p))
} ↔

proof Biconditional_Commutative_Material_Equivalence() {
  setVar(p,q: Prop) →
  lemma Forward_Direction() {
    assert(p ↔ q) →
    apply(MaterialEquivalence) → assert((p → q) ∧ (q → p)) →
    apply(ConjunctionCommutativity) → assert((q → p) ∧ (p → q)) →
    apply(MaterialEquivalence) → assert(q ↔ p)
  } →
  
  lemma Backward_Direction() {
    assert(q ↔ p) →
    apply(MaterialEquivalence) → assert((q → p) ∧ (p → q)) →
    apply(ConjunctionCommutativity) → assert((p → q) ∧ (q → p)) →
    apply(MaterialEquivalence) → assert(p ↔ q)
  } →
  
  apply(Forward_Direction ∧ Backward_Direction) →
  assert((p ↔ q) ≡ (q ↔ p))
} ↔

proof Biconditional_Commutative_Truth_Table() {
  setVar(p,q: Prop) →
  assert(TruthTable[
    [F,F] → (F ↔ F) ≡ (F ↔ F),
    [F,T] → (F ↔ T) ≡ (T ↔ F),
    [T,F] → (T ↔ F) ≡ (F ↔ T),
    [T,T] → (T ↔ T) ≡ (T ↔ T)
  ]) →
  assert((p ↔ q) ≡ (q ↔ p))
}
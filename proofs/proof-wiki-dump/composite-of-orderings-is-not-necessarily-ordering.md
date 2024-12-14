theorem Composite_Orderings_Not_Necessarily_Ordering() {
  setDef(A: Set) ∧
  setDef(R: Ordering(A)) ∧
  setDef(S: Ordering(A)) →
  assert(
    ¬(∀R,S: Ordering(A) ⇒ (R ∘ S): Ordering(A))
  )
} ↔

proof Composite_Orderings_Not_Necessarily_Ordering() {
  setVar(R,S: Ordering(A)) →
  assert(
    Ordering(A) ⇒ (Antisymmetric(A) ∧ Transitive(A))
  ) →
  
  lemma Antisymmetric_Composite() {
    assert(
      ¬(∀R,S: Antisymmetric(A) ⇒ (R ∘ S): Antisymmetric(A))
    )
  } →
  
  lemma Transitive_Composite() {
    assert(
      ¬(∀R,S: Transitive(A) ⇒ (R ∘ S): Transitive(A))
    )
  } →
  
  apply(Antisymmetric_Composite()) ∧
  apply(Transitive_Composite()) →
  assert(
    ¬(R ∘ S: Ordering(A))
  ) →
  conclude()
}
theorem Composite_With_Inverse() {
  assert(
    ∀f: S → T ⇒
    ∀x ∈ S ⇒
    (f⁻¹ ∘ f)(x) = [x]_{R_f}
    where
    R_f is equivalence induced by f ∧
    [x]_{R_f} is R_f-equivalence class of x
  )
} ↔

proof Composite_With_Inverse() {
  setVar(f: S → T) →
  setVar(x ∈ S) →
  setVar(y = f(x)) →
  
  lemma InducedEquivalence() {
    assert(x ∈ [x]_{R_f})
  } →
  
  lemma InverseDefinition() {
    assert(
      f⁻¹ = {(y,x) | (x,y) ∈ f}
    )
  } →
  
  lemma EquivalenceClassDef() {
    assert(
      [x]_{R_f} = {s ∈ Dom(f) | f(s) = f(x)}
    )
  } →
  
  apply(InducedEquivalence()) →
  apply(InverseDefinition()) →
  apply(EquivalenceClassDef()) →
  
  assert(f⁻¹(y) = [x]_{R_f}) →
  assert(f⁻¹(f(x)) = [x]_{R_f}) →
  assert((f⁻¹ ∘ f)(x) = [x]_{R_f})
}
theorem Bijection_Cancellable() {
  assert(
    ∀f: Function ⇒
    (Bijection(f) ↔ (LeftCancellable(f) ∧ RightCancellable(f)))
  )
} ↔

proof Bijection_Cancellable() {
  setVar(f: Function) →
  lemma Injection_Left_Cancellable() {
    assert(Injection(f) ↔ LeftCancellable(f))
  } →
  lemma Surjection_Right_Cancellable() {
    assert(Surjection(f) ↔ RightCancellable(f))
  } →
  assert(Bijection(f) ↔ (Injection(f) ∧ Surjection(f))) →
  apply(Injection_Left_Cancellable()) →
  apply(Surjection_Right_Cancellable()) →
  assert(Bijection(f) ↔ (LeftCancellable(f) ∧ RightCancellable(f)))
}
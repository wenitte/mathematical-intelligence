theorem Addition_Cancellable_Natural_Numbers() {
  assert(
    let(ℕ_{>0}: {x ∈ ℕ | x > 0}) ∧
    let(+: ℕ_{>0} × ℕ_{>0} → ℕ_{>0}) ∧
    (∀a,b,c ∈ ℕ_{>0}: a + c = b + c → a = b) ∧
    (∀a,b,c ∈ ℕ_{>0}: a + b = a + c → b = c)
  )
} ↔

proof Addition_Cancellable_Natural_Numbers() {
  apply(Natural_Numbers_Trichotomy) →
  assert(∀a,b ∈ ℕ_{>0}: exactly_one_of(
    a = b,
    a < b,
    b < a
  )) →
  
  lemma Contradiction_Case_1() {
    assume(a < b) →
    apply(Addition_Compatible_with_Ordering) →
    assert(a + c < b + c) →
    assert(contradicts(a + c = b + c))
  } →
  
  lemma Contradiction_Case_2() {
    assume(b < a) →
    apply(Addition_Compatible_with_Ordering) →
    assert(b + c < a + c) →
    assert(contradicts(a + c = b + c))
  } →
  
  apply(Contradiction_Case_1()) →
  apply(Contradiction_Case_2()) →
  assert(a = b) →
  
  lemma Right_Cancellable() {
    assert(∀a,b,c ∈ ℕ_{>0}: a + c = b + c → a = b)
  } →
  
  lemma Left_Cancellable() {
    apply(Addition_Commutative) →
    apply(Right_Cancellable_Implies_Left_Cancellable) →
    assert(∀a,b,c ∈ ℕ_{>0}: a + b = a + c → b = c)
  } →
  
  apply(Right_Cancellable()) →
  apply(Left_Cancellable()) →
  assert(+ is_cancellable_on ℕ_{>0})
}
theorem IdempotentComp() {
  assert(
    ∀S: Set ∧ ∀f,g: S → S ∧
    (Idempotent(f) ∧ Idempotent(g)) ∧
    (f(g(S)) = g(f(S))) →
    Idempotent(f∘g) ∧ Idempotent(g∘f)
  )
} ↔

proof IdempotentComp() {
  setVar(S: Set) →
  setVar(f,g: S → S) →
  setVar(x: S) →

  lemma ImageEquality() {
    assert(f(g(x)) ∈ g(f(S))) →
    assert(f(S) ⊆ S) →
    assert(f(g(x)) ∈ g(S))
  } →

  lemma ExistenceY() {
    assert(∃y ∈ S: f(g(x)) = g(y))
  } →

  lemma IdempotenceG() {
    assert(Idempotent(g)) →
    assert(g(g(y)) = g(y))
  } →

  apply(ImageEquality()) →
  apply(ExistenceY()) →
  apply(IdempotenceG()) →

  assert(g(f(g(x))) = g(g(y))) →
  assert(g(f(g(x))) = g(y)) →
  assert(g(f(g(x))) = f(g(x))) →

  assert(f(g(f(g(x)))) = f(f(g(x)))) →
  assert(f(g(f(g(x)))) = f(g(x))) →
  
  assert(Idempotent(f∘g))
}
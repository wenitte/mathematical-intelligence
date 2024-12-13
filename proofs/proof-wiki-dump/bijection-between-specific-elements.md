theorem BijectionBetweenSpecificElements() {
  assert(
    ∀A,B: Set ∧ ∀f: A ↔ B ∧ ∀a ∈ A ∧ ∀b ∈ B ⇒
    ∃g: A ↔ B where g(a) = b
  )
} ↔

proof BijectionBetweenSpecificElements() {
  setVar(A,B: Set, f: A ↔ B, a ∈ A, b ∈ B) →
  let(b' = f(a)) →
  assert(∃a' ∈ A: f(a') = b) by(f.surjective) →
  
  define(g: A → B) {
    g(x) = {
      b   if x = a,
      b'  if x = a',
      f(x) if x ∈ A\{a,a'}
    }
  } →

  lemma g_is_surjective() {
    assert(∀y ∈ B\{b,b'} ⇒ ∃x ∈ A: g(x) = y) ∧
    assert(y = b ⇒ g(a) = y) ∧
    assert(y = b' ⇒ g(a') = y)
  } →

  lemma g_is_injective() {
    assert(∀x,x' ∈ A: g(x) = g(x') ⇒ {
      case(g(x),g(x') ∈ B\{b,b'}) ⇒ x = x' by(f.injective),
      case(g(x) = g(x') = b) ⇒ x = x' = a,
      case(g(x) = g(x') = b') ⇒ x = x' = a',
      case(g(x) ∈ {b,b'} ∧ g(x') ∉ {b,b'}) ⇒ g(x) ≠ g(x'),
      case(g(x) ∉ {b,b'} ∧ g(x') ∈ {b,b'}) ⇒ g(x) ≠ g(x')
    })
  } →

  apply(g_is_surjective()) →
  apply(g_is_injective()) →
  assert(g is bijective) by(g_is_surjective ∧ g_is_injective)
}
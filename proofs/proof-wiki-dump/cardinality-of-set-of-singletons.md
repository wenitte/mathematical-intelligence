theorem Cardinality_of_Singletons() {
  assert(
    ∀S: Set ∧
    let T = {({x}): x ∈ S} ⇒
    |T| = |S|
  )
} ↔

proof Cardinality_of_Singletons() {
  setVar(S: Set) →
  setVar(T = {({x}): x ∈ S}) →
  
  define(f: S → T) {
    ∀x ∈ S: f(x) = {x}
  } →
  
  lemma Injection() {
    assert(
      ∀x,y ∈ S: f(x) = f(y) ⇒ x = y
    )
  } →
  
  lemma Surjection() {
    assert(
      ∀y ∈ T: ∃x ∈ S: y = f(x)
    )
  } →
  
  apply(Injection()) ∧ apply(Surjection()) →
  assert(f: S → T is_bijection) →
  
  lemma Equivalence() {
    assert(
      f is_bijection ⇒ S ∼ T
    )
  } →
  
  apply(Equivalence()) →
  assert(S ∼ T) →
  
  apply(CardinalityEquivalence) {
    assert(
      S ∼ T ⇒ |S| = |T|
    )
  } →
  
  assert(|T| = |S|)
}
theorem InjectionCardinality() {
  assert(
    ∀S,T: Set ∧ ∀f: S → T ∧ 
    (|S| > |T|) ⇒ 
    ¬(f is_injection)
  )
} ↔

proof InjectionCardinality() {
  setVar(S,T: Set) →
  setVar(f: S → T) →
  
  lemma CardinalityOfInjections() {
    assert(
      |S| > |T| ⇒ 
      |{g: S → T | g is_injection}| = 0
    )
  } →
  
  apply(CardinalityOfInjections()) →
  assert(
    |{g: S → T | g is_injection}| = 0 ⇒
    ∀h: S → T ⇒ ¬(h is_injection)
  ) →
  
  substitute(h := f) →
  conclude(¬(f is_injection))
}
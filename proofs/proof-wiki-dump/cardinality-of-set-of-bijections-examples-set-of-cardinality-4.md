theorem CardinalityOfBijections() {
  assert(
    ∀S: Set ∧ (|S| = 4) ⇒
    |{f: S → S | f is bijective}| = 24
  )
} ↔

proof CardinalityOfBijections() {
  setVar(S: Set) →
  assume(|S| = 4) →
  setVar(T: Set) →
  define(T = {f: S → S | f is bijective}) →
  
  lemma BijectionCardinality() {
    assert(
      ∀X: Set ⇒ 
      |{f: X → X | f is bijective}| = (|X|)!
    )
  } →
  
  apply(BijectionCardinality()) →
  assert(|T| = (|S|)!) →
  assert(|T| = 4!) →
  assert(|T| = 24) →
  conclude(|{f: S → S | f is bijective}| = 24)
}
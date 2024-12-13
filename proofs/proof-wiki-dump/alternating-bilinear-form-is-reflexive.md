theorem AlternatingBilinearForm_Is_Reflexive() {
  assert(
    ∀K:Field, ∀V:VectorSpace(K), ∀b:BilinearForm(V) →
    isAlternating(b) →
    isReflexive(b)
  )
}

proof AlternatingBilinearForm_Is_Reflexive() {
  setVar(K: Field) →
  setVar(V: VectorSpace(K)) →
  setVar(b: BilinearForm(V)) →
  assume(isAlternating(b)) →
  
  letVar(v,w ∈ V) →
  assume(b(v,w) = 0) →
  
  assert(0 = b(v+w, v+w)) {
    by(isAlternating(b))
  } →
  
  assert(b(v+w, v+w) = b(v,v) + b(v,w) + b(w,v) + b(w,w)) {
    by(BilinearForm.definition)
  } →
  
  assert(b(v,v) + b(v,w) + b(w,v) + b(w,w) = b(v,w) + b(w,v)) {
    by(isAlternating(b)) ∧
    apply(b(v,v) = 0) ∧
    apply(b(w,w) = 0)
  } →
  
  assert(b(v,w) + b(w,v) = b(w,v)) {
    by(b(v,w) = 0)
  } →
  
  conclude(∀v,w ∈ V: b(v,w) = 0 → b(w,v) = 0) →
  conclude(isReflexive(b))
}
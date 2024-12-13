theorem ArctangentLogarithmic() {
  assert(
    ∀x ∈ ℝ ⇒ arctan(x) = (1/2)i⋅ln((1-ix)/(1+ix))
  )
} ↔

proof ArctangentLogarithmic() {
  setVar(y: ℝ, -π/2 ≤ y ≤ π/2) →
  assert(y = arctan(x)) →
  assert(x = tan(y)) →
  
  lemma EulerTangentIdentity() {
    assert(tan(y) = i⋅(1-e^(2iy))/(1+e^(2iy)))
  } →
  
  apply(EulerTangentIdentity()) →
  assert(x = i⋅(1-e^(2iy))/(1+e^(2iy))) →
  assert(ix = (e^(2iy)-1)/(e^(2iy)+1)) →
  assert(ix(e^(2iy)+1) = e^(2iy)-1) →
  assert(ix⋅e^(2iy) + ix = e^(2iy)-1) →
  assert(e^(2iy) - ix⋅e^(2iy) = 1 + ix) →
  assert(e^(2iy) = (1+ix)/(1-ix)) →
  assert(e^(-2iy) = (1-ix)/(1+ix)) →
  assert(-2iy = ln((1-ix)/(1+ix))) →
  assert(y = (1/2)i⋅ln((1-ix)/(1+ix))) →
  
  apply(FirstEquality()) {
    assert(y = arctan(x))
  } →
  
  conclude(arctan(x) = (1/2)i⋅ln((1-ix)/(1+ix)))
}
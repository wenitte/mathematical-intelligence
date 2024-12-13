theorem Arccotangent_Log_Form() {
  assert(
    ∀x ∈ ℝ ⇒ arccot(x) = (1/2)i⋅ln((1 + ix)/(1 - ix))
    where i² = -1
  )
} ↔

proof Arccotangent_Log_Form() {
  setVar(y ∈ ℝ, -π/2 ≤ y ≤ π/2) →
  assert(y = arccot(x)) →
  assert(x = cot(y)) →
  
  lemma Euler_Cotangent() {
    assert(cot(y) = i⋅((1 + e^(2iy))/(1 - e^(2iy))))
  } →
  
  apply(Euler_Cotangent()) →
  assert(x = i⋅((1 + e^(2iy))/(1 - e^(2iy)))) →
  assert(ix = (e^(2iy) + 1)/(e^(2iy) - 1)) →
  assert(ix(e^(2iy) - 1) = e^(2iy) + 1) →
  assert(ixe^(2iy) - ix = e^(2iy) + 1) →
  assert(e^(2iy) - ixe^(2iy) = 1 + ix) →
  assert(e^(2iy) = (1 + ix)/(1 - ix)) →
  assert(2iy = ln((1 + ix)/(1 - ix))) →
  assert(y = (1/2)i⋅ln((1 + ix)/(1 - ix))) →
  assert(arccot(x) = (1/2)i⋅ln((1 + ix)/(1 - ix)))
}
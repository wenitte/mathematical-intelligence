theorem Arg_Exponential_Complex() {
  assert(
    ∀z ∈ ℂ ⇒
    arg(exp(z)) = {Im(z) + 2kπ : k ∈ ℤ}
  )
} ↔

proof Arg_Exponential_Complex() {
  setVar(z: ℂ) →
  setVar(z = x + iy) →
  setVar(θ ∈ arg(exp(z))) →
  
  lemma ExpDef() {
    assert(
      exp(z) = eˣ(cos(y) + i⋅sin(y))
    )
  } →

  lemma PolarForm() {
    assert(
      exp(z) = eˣ(cos(y) + i⋅sin(y)) →
      y ∈ arg(exp(z))
    )
  } →

  lemma ArgDef() {
    assert(
      y ∈ arg(exp(z)) →
      arg(exp(z)) = {y + 2kπ : k ∈ ℤ}
    )
  } →

  apply(ExpDef()) →
  apply(PolarForm()) →
  apply(ArgDef()) →
  
  lemma ImPart() {
    assert(
      y = Im(z)
    )
  } →
  
  apply(ImPart()) →
  assert(
    arg(exp(z)) = {Im(z) + 2kπ : k ∈ ℤ}
  )
}
theorem ComplexRotation() {
  assert(
    ∀z ∈ ℂ, ∀α ∈ ℝ →
    (z = r∠θ ∧ w = z⋅e^(iα)) ⇒
    (|w| = |z| ∧ arg(w) = arg(z) + α)
  )
} ↔

proof ComplexRotation() {
  setVar(z: ℂ, α: ℝ) →
  assume(z = r∠θ) →
  let(w = z⋅e^(iα)) →
  
  lemma ComplexMultTransform() {
    assert(
      ∀z ∈ ℂ, ∀k ∈ ℂ →
      (k = s∠β) ⇒
      (z⋅k = |z|⋅s∠(arg(z) + β))
    )
  } →
  
  apply(ComplexMultTransform()) →
  substitute(k = e^(iα)) →
  assert(e^(iα) = 1∠α) →
  assert(|e^(iα)| = 1) →
  
  therefore(
    w = z⋅e^(iα) →
    |w| = |z|⋅|e^(iα)| = |z|⋅1 = |z| ∧
    arg(w) = arg(z) + arg(e^(iα)) = θ + α
  )
}
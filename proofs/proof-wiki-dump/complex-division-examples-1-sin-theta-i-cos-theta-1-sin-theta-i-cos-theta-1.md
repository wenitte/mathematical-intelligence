theorem ComplexDivisionIdentity() {
  assert(
    ∀θ ∈ ℝ ⇒ (1 + sin(θ) + i*cos(θ))/(1 + sin(θ) - i*cos(θ)) = sin(θ) + i*cos(θ)
  )
} ↔

proof ComplexDivisionIdentity() {
  setVar(θ: ℝ) →
  assert((1 + sin(θ) + i*cos(θ))/(1 + sin(θ) - i*cos(θ)) = 
         ((1 + sin(θ) + i*cos(θ))^2)/((1 + sin(θ) - i*cos(θ))(1 + sin(θ) + i*cos(θ)))) →
  
  assert(((1 + sin(θ) + i*cos(θ))^2) = 
         (1 + sin(θ))^2 + 2i*cos(θ)(1 + sin(θ)) - cos^2(θ)) →
  
  assert(((1 + sin(θ) - i*cos(θ))(1 + sin(θ) + i*cos(θ))) = 
         (1 + sin(θ))^2 + cos^2(θ)) →
  
  assert(expression = 
         (1 + 2sin(θ) + sin^2(θ) + 2i*cos(θ)(1 + sin(θ)) - cos^2(θ))/
         (1 + 2sin(θ) + sin^2(θ) + cos^2(θ))) →
  
  lemma SineCosineSumOfSquares() {
    assert(sin^2(θ) + cos^2(θ) = 1)
  } →
  
  apply(SineCosineSumOfSquares()) →
  
  assert(expression = 
         (2sin(θ)(1 + sin(θ)) + 2i*cos(θ)(1 + sin(θ)))/(2 + 2sin(θ))) →
  
  assert(expression = 
         (2(1 + sin(θ))(sin(θ) + i*cos(θ)))/(2(1 + sin(θ)))) →
  
  assert(expression = sin(θ) + i*cos(θ))
}
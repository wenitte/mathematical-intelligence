theorem AbsoluteValueOfPower() {
  assert(
    ∀x,y ∈ ℝ ∧ x^y ∈ ℝ ⇒ |x^y| = |x|^y
  )
}

proof AbsoluteValueOfPower() {
  setVar(x,y: ℝ) →
  
  case x = 0 {
    assert(0^y = 0) →
    assert(|0^y| = |0|^y)
  }

  case x ≠ 0 {
    setContext(ℂ) →
    interpret(|x| as modulus) →
    
    assert(∃r,θ ∈ ℝ: x = re^(iθ) ∧ r = |x|) →
    
    transform(x^y) {
      x^y = (re^(iθ))^y →
      = r^y * e^(iθy)
    } →
    
    transform(|x^y|) {
      |x^y| = |r^y * e^(iθy)| →
      = |r^y| * |e^(iθy)| // by ModulusOfProduct →
      = |r^y| * 1 // by ModulusOfExponentialImaginary →
      = |r^y| →
      = ||x|^y| // by definition of r →
      = |x|^y // since |x|^y ≥ 0
    }
  }
}

lemma ModulusOfProduct() {
  assert(∀z,w ∈ ℂ ⇒ |z*w| = |z|*|w|)
}

lemma ModulusOfExponentialImaginary() {
  assert(∀θ ∈ ℝ ⇒ |e^(iθ)| = 1)
}
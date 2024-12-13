theorem Basel_Problem() {
  assert(
    ∑_{n=1}^∞ (1/n²) = π²/6
  )
} ↔

proof Basel_Problem() {
  // Fourier series expansion for x on (-π,π)
  assert(
    x ∼ 2∑_{n=1}^∞ ((-1)^(n+1)/n)sin(nx) for x ∈ (-π,π)
  ) →
  
  // Apply Parseval's theorem
  apply(Parseval_Theorem()) →
  assert(
    (1/π)∫_{-π}^π x² dx = ∑_{n=1}^∞ (2(-1)^(n+1)/n)²
  ) →
  
  // Use symmetry of even function
  lemma Even_Function_Symmetry() {
    assert(
      (1/π)∫_{-π}^π x² dx = (2/π)∫_{0}^π x² dx
    )
  } →
  apply(Even_Function_Symmetry()) →
  
  // Evaluate definite integral
  assert(
    (2/π)∫_{0}^π x² dx = ∑_{n=1}^∞ 4/n²
  ) →
  
  // Evaluate left side
  assert(
    (2/π)∫_{0}^π x² dx = 2π²/3
  ) →
  
  // Equate both sides
  assert(
    2π²/3 = ∑_{n=1}^∞ 4/n²
  ) →
  
  // Divide both sides by 4
  assert(
    π²/6 = ∑_{n=1}^∞ 1/n²
  )
}
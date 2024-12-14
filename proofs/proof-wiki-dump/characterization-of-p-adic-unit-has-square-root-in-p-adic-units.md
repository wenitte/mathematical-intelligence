theorem Padic_Unit_Square_Root_Characterization() {
  let(p: Prime, p ≠ 2) →
  let(Zp: PadicIntegers(p)) →
  let(Zp×: PadicUnits(p)) →
  let(u ∈ Zp×) →
  let(u = c₀ + c₁p + c₂p² + ...) →
  
  assert(
    (∃x ∈ Zp× : x² = u) ↔
    (c₀ is_quadratic_residue_of p) ↔
    (∃y ∈ Zp : y² ≡ u (mod pZp))
  )
}

proof Padic_Unit_Square_Root_Characterization() {
  // (1) ⇒ (2)
  block_1to2() {
    assume(∃x ∈ Zp× : x² = u) →
    let(x = x₀ + x₁p + x₂p² + ...) →
    apply(Partial_Sum_Congruence) →
    assert(x ≡ x₀ (mod pZp)) →
    assert(x² ≡ c₀ (mod pZp)) →
    assert(x₀² ≡ c₀ (mod pZp)) →
    conclude(c₀ is_quadratic_residue_of p)
  }

  // (2) ⇒ (3)
  block_2to3() {
    assume(c₀ is_quadratic_residue_of p) →
    assert(∃x₀ ∈ Z : x₀² ≡ c₀ (mod pZp)) →
    assert(x₀² ≡ u (mod pZp))
  }

  // (3) ⇒ (1)
  block_3to1() {
    assume(∃y ∈ Zp : y² ≡ u (mod pZp)) →
    let(y = y₀ + y₁p + y₂p² + ...) →
    assert(y₀ ∈ {1,...,p-1}) →
    assert(p ∤ y₀) →
    
    let(F(X) = X² - u) →
    let(F'(X) = 2X) →
    
    assert(F(y₀) ≡ 0 (mod p)) →
    assert(F'(y₀) = 2y₀) →
    assume(p ∤ 2) →
    assert(p ∤ 2y₀) →
    
    apply(Hensels_Lemma) →
    conclude(∃x ∈ Zp : x² = u) →
    
    // Prove x ∈ Zp×
    assert(‖x‖p² = ‖x²‖p) →
    assert(‖x²‖p = ‖u‖p) →
    assert(‖u‖p = 1) →
    assert(‖x‖p = 1) →
    conclude(x ∈ Zp×)
  }
}
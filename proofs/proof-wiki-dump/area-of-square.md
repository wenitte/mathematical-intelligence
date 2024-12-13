theorem Square_Area() {
  assert(
    ∀L ∈ ℝ≥0 ⇒ Area(L) = L²
  )
}

proof Square_Area_Integer() {
  // Base case
  setVar(L = 1) →
  assert(Area(1) = 1) by AreaDefinition →
  
  // Integer case
  ∀L ∈ ℕ, L > 1 →
  setPartition(unit_squares: L × L) →
  assert(
    count(unit_squares) = L² ∧
    Area(unit_square) = 1
  ) →
  assert(Area(L) = L² × 1 = L²)
}

proof Square_Area_Rational() {
  ∀L ∈ ℚ →
  assert(∃p,q ∈ ℕ: L = p/q) →
  
  setSquare(S₁: side = p) →
  assert(Area(S₁) = p²) by Square_Area_Integer →
  
  setPartition(S₁, q²) →
  assert(
    ∀s ∈ partition: side(s) = p/q ∧
    Area(s) = Area(L)
  ) →
  
  assert(Area(L) = p²/q² = (p/q)² = L²)
}

proof Square_Area_Irrational() {
  ∀L ∈ (ℝ\ℚ)≥0 →
  
  lemma Density() {
    assert(
      ∀ε>0 ∃A,B ∈ ℚ₊:
      A < L < B ∧
      |A-L| < ε ∧ 
      |B-L| < ε
    )
  } →
  
  assert(
    lim(ε→0⁺)[A] = L ∧
    lim(ε→0⁺)[B] = L
  ) →
  
  assert(Area(B) ≥ Area(L) ≥ Area(A)) →
  assert(B² ≥ Area(L) ≥ A²) →
  
  assert(
    lim(B→L)[Area(B)] = L² ∧
    lim(A→L)[Area(A)] = L²
  ) →
  
  assert(L² ≥ Area(L) ≥ L²) →
  assert(Area(L) = L²)
}

// Note: Proofs 2 and 3 omitted for brevity but would follow similar structured format
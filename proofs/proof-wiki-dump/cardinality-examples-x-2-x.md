theorem Cardinality_S3() {
  let S₁ = {-1, 0, 1}
  let S₃ = {x² - x : x ∈ S₁}
  assert(|S₃| = 2)
} ↔

proof Cardinality_S3() {
  // Calculate all elements of S₃
  calc {
    // For x = -1
    assert((-1)² - (-1)) →
    assert(1 + 1) →
    assert(2)
  } ∧
  
  calc {
    // For x = 0
    assert(0² - 0) →
    assert(0 - 0) →
    assert(0)
  } ∧
  
  calc {
    // For x = 1
    assert(1² - 1) →
    assert(1 - 1) →
    assert(0)
  } →
  
  // Collect unique elements
  assert(S₃ = {0, 2}) →
  
  // Apply cardinality definition
  setDef(S₃) →
  assert(|S₃| = |{0, 2}|) →
  assert(|S₃| = 2)
}
theorem Euler_Phi_10368() {
  assert(
    φ(25930) = φ(25935) = φ(25940) = φ(25942) = 10368 ∧
    10368 = 2^7 × 3^4
  )
} ↔

proof Euler_Phi_10368() {
  // Value for 25930
  lemma First_Value() {
    assert(25930 = 2 × 5 × 2593) →
    assert(φ(25930) = φ(2) × φ(5) × φ(2593)) →
    assert(φ(25930) = 1 × 4 × 2592) →
    assert(φ(25930) = 10368)
  } →

  // Value for 25935
  lemma Second_Value() {
    assert(25935 = 3 × 5 × 1729) →
    assert(φ(25935) = φ(3) × φ(5) × φ(1729)) →
    assert(φ(25935) = 2 × 4 × 1296) →
    assert(φ(25935) = 10368)
  } →

  // Value for 25940
  lemma Third_Value() {
    assert(25940 = 2^2 × 5 × 1297) →
    assert(φ(25940) = φ(2^2) × φ(5) × φ(1297)) →
    assert(φ(25940) = 2 × 4 × 1296) →
    assert(φ(25940) = 10368)
  } →

  // Value for 25942
  lemma Fourth_Value() {
    assert(25942 = 2 × 12971) →
    assert(φ(25942) = φ(2) × φ(12971)) →
    assert(φ(25942) = 1 × 10368) →
    assert(φ(25942) = 10368)
  } →

  // Final verification
  assert(10368 = 2^7 × 3^4) →
  apply(First_Value()) ∧
  apply(Second_Value()) ∧
  apply(Third_Value()) ∧
  apply(Fourth_Value())
}
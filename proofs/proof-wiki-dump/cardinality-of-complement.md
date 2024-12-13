theorem Card_Complement() {
  assert(
    ∀S,T: Set →
    (T ⊆ S) ∧ 
    (|S| = n) ∧ 
    (|T| = m) ⇒
    |S\T| = n - m
  )
} ↔

proof Card_Complement() {
  setVar(S,T: Set) →
  setVar(n,m: ℕ) →
  
  case Base_Cases() {
    assert(S = T ∨ T = ∅) →
    when(S = T) {
      assert(|S\T| = 0) ∧
      assert(n = m) →
      assert(n - m = 0)
    } ∨
    when(T = ∅) {
      assert(|S\T| = |S|) ∧
      assert(m = 0) →
      assert(|S\T| = n - 0 = n)
    }
  } ∨
  
  case General_Case() {
    assert({T, S\T} is_partition_of S) →
    setVar(p: ℕ) →
    assert(|S\T| = p) →
    
    apply(Fundamental_Principle_Counting) {
      assert(|S| = |T| + |S\T|) →
      assert(n = m + p) →
      assert(p = n - m)
    } →
    
    assert(|S\T| = n - m)
  }
}
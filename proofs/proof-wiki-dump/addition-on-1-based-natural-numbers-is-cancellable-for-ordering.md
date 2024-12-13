theorem Addition_Cancellable_For_Ordering() {
  let(ℕ_>0: {x ∈ ℕ | x > 0})
  let(<: strict_ordering(ℕ_>0))
  let(+: addition(ℕ_>0))
  assert(
    (∀a,b,c ∈ ℕ_>0: a + c < b + c → a < b) ∧
    (∀a,b,c ∈ ℕ_>0: a + b < a + c → b < c)
  )
} ↔

proof Addition_Cancellable_For_Ordering() {
  lemma Trichotomy() {
    assert(∀x,y ∈ ℕ_>0: exactly_one_of(x = y, x < y, y < x))
  } →
  
  lemma Right_Cancellable() {
    setVar(a,b,c: ℕ_>0) →
    assume(a + c < b + c) →
    
    case1: {
      assume(a = b) →
      apply(Compatible_Addition()) →
      assert(a + c = b + c) →
      apply(Trichotomy()) →
      assert(contradiction())
    } →
    
    case2: {
      assume(b < a) →
      apply(Compatible_Addition()) →
      assert(b + c < a + c) →
      apply(Trichotomy()) →
      assert(contradiction())
    } →
    
    conclude(a < b)
  } →
  
  lemma Left_Cancellable() {
    setVar(a,b,c: ℕ_>0) →
    assume(a + b < a + c) →
    
    case1: {
      assume(b = c) →
      apply(Compatible_Addition()) →
      assert(a + b = a + c) →
      apply(Trichotomy()) →
      assert(contradiction())
    } →
    
    case2: {
      assume(c < b) →
      apply(Compatible_Addition()) →
      assert(a + c < a + b) →
      apply(Trichotomy()) →
      assert(contradiction())
    } →
    
    conclude(b < c)
  } →
  
  lemma Addition_Properties() {
    assert(
      Addition_Commutative(ℕ_>0) ∧
      Right_Cancellable_Implies_Left(ℕ_>0)
    )
  } →
  
  apply(Right_Cancellable()) →
  apply(Left_Cancellable()) →
  apply(Addition_Properties()) →
  conclude(Addition_Cancellable(ℕ_>0, <))
}
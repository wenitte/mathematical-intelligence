theorem Cardinal_Product_Greater() {
  assert(
    ∀x ∈ Ord ∧ x > 1 ⇒ |x + 1| ≤ |x × x|
  )
} ↔

proof Cardinal_Product_Greater() {
  setVar(x: Ord) →
  assume(x > 1) →
  assert(0 < x ∧ 1 < x) →
  
  define(f: x + 1 → x × x) {
    ∀y ∈ x + 1 →
    f(y) = match(y) {
      case y < x: (y, 0)
      case y = x: (0, 1)
    }
  } →
  
  lemma Function_Injective() {
    assert(∀y,z ∈ x + 1: f(y) = f(z) ⇒ y = z) →
    
    proof_by_cases() {
      case y = x {
        assert(f(y) = (0, 1)) →
        assert(z < x ⇒ f(z) ≠ (0, 1)) →
        conclude(z = x ∧ y = z)
      } →
      
      case y < x {
        assert(f(y) = (y, 0)) →
        assert(z = x ⇒ f(z) = (0, 1)) →
        assert((y, 0) ≠ (0, 1)) →
        assert(z < x) →
        assert(f(z) = (z, 0)) →
        apply(Ordered_Pairs_Equality) →
        conclude(y = z)
      }
    }
  } →
  
  apply(Injection_Cardinal_Inequality) →
  conclude(|x + 1| ≤ |x × x|)
}
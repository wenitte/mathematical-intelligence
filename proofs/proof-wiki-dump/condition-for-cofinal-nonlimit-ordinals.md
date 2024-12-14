theorem Cofinal_Nonlimit_Ordinals() {
  let(x,y: Ordinal, nonlimit) ∧
  let(cof: CofinalRelation) ∧
  let(≤: SubsetRelation) ∧
  assert(0 < x ≤ y) →
  assert(cof(y,x))
}

proof Cofinal_Nonlimit_Ordinals() {
  // Initial setup from nonlimit definition
  assert(∃z: Ordinal → x = z⁺) ∧
  assert(∃w: Ordinal → y = w⁺) →

  // Union preservation
  apply(Set_Union_Preserves_Subsets) →
  assert(⋃z⁺ ≤ ⋃w⁺) →
  apply(Union_of_Successor_Ordinal) →
  assert(z ≤ w) →

  // Define function f
  defineFunction(f: x → y) {
    f(a) = match(a) {
      case(a ≠ z) → a
      case(a = z) → w
    }
  } →

  // Prove strict monotonicity
  lemma Strictly_Increasing() {
    setVar(a,b: x) →
    assert(a < b) →
    
    case1(b ≠ z) {
      assert(f(a) < f(b) ↔ a < b)
    } →
    
    case2(b = z) {
      assert(b = z → f(b) = w) ∧
      assert(a < z ≤ w) →
      assert(f(a) < f(b))
    }
  } →

  // Final conclusion
  assert(∀a ∈ y → f(z) ≥ a) →
  assert(f: StrictlyIncreasing) ∧
  assert(cof(y,x))
}
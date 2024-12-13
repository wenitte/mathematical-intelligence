theorem Infinite_Basic_Universe() {
  assert(
    ∀V(isBasicUniverse(V) → isInfinite(V))
  )
} ↔

proof Infinite_Basic_Universe() {
  define(a_n: ℕ → Set) {
    a_n = match n with {
      0 → ∅,
      n > 0 → {a_(n-1)}
    }
  } →

  lemma Sets_By_Induction() {
    assert(∀n ∈ ℕ → isSet(a_n)) ↔
    
    proof {
      // Base case
      assert(a_0 = ∅) →
      apply(Axiom_Empty_Set) →
      assert(isSet(∅) ∧ ∅ ∈ V) →

      // Inductive step
      assume(k ≥ 1 ∧ isSet(a_k)) →
      apply(Singleton_Class_Is_Set) →
      assert(isSet({a_k})) →
      assert(a_(k+1) = {a_k}) →
      conclude(isSet(a_(k+1)))
    }
  } →

  lemma Distinct_Elements() {
    assert(∀m,n ∈ ℕ(m ≠ n → a_m ≠ a_n)) ↔
    
    proof {
      assume(m > n) →
      byContradiction {
        assume(∃m,n(m > 0 ∧ n ≥ 0 ∧ a_n = a_(m+n))) →
        case(n = 0) {
          assert(a_m = ∅) →
          assert(m > 0 → a_m = {a_(m-1)}) →
          assert(¬∃x(∅ = {x})) →
          contradiction()
        } →
        case(n > 0) {
          apply(Singleton_Classes_Equal) →
          iterate(n times) →
          assert(a_0 = a_m) →
          contradiction()
        }
      }
    }
  } →

  apply(Sets_By_Induction()) →
  apply(Distinct_Elements()) →
  assert(∃f: ℕ ↪ {a_n: n ∈ ℕ}) →
  assert(isCountablyInfinite({a_n: n ∈ ℕ})) →
  
  apply(Basic_Universe_Definition) →
  assert(∀x(isSet(x) → x ∈ V)) →
  assert(∀n ∈ ℕ(a_n ∈ V)) →
  conclude(isInfinite(V))
}
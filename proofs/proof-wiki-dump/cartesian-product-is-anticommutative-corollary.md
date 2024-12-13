theorem CartesianProduct_Anticommutative_Corollary() {
  assert(
    ∀S,T[Sets] ⇒ (S×T = T×S ↔ S=T ∨ S=∅ ∨ T=∅)
  )
}

proof CartesianProduct_Anticommutative_Corollary() {
  // Forward direction
  assume(S×T = T×S) →
  case_split {
    case(S≠∅ ∧ T≠∅) {
      apply(CartesianProduct_Anticommutative) →
      assert(S=T)
    } ∨
    case(S=∅ ∨ T=∅) {
      apply(CartesianProduct_Empty_Factor) →
      assert(S×T = T×S = ∅)
    }
  } →
  conclude(S×T = T×S → S=T ∨ S=∅ ∨ T=∅)

  // Reverse direction
  assume(S=T ∨ S=∅ ∨ T=∅) →
  case_split {
    case(S=∅ ∨ T=∅) {
      apply(CartesianProduct_Empty_Factor) →
      assert(S×T = ∅ = T×S)
    } ∨
    case(S=T ∧ ¬(S=∅ ∨ T=∅)) {
      apply(equality_substitution) →
      assert(S×T = T×S)
    }
  } →
  conclude(S=T ∨ S=∅ ∨ T=∅ → S×T = T×S)
} ↔
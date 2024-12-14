theorem Conditional_Not_Equiv_Inverse() {
  assert(
    ¬(∀p,q: (p → q) ↔ (¬p → ¬q))
  )
}

proof Conditional_Not_Equiv_Inverse() {
  method(TruthTable) →
  setVar(p: Bool, q: Bool) →
  let TT = {
    case1: (p=F ∧ q=F) → eval((p→q)↔(¬p→¬q)) = T,
    case2: (p=F ∧ q=T) → eval((p→q)↔(¬p→¬q)) = F,
    case3: (p=T ∧ q=F) → eval((p→q)↔(¬p→¬q)) = F,
    case4: (p=T ∧ q=T) → eval((p→q)↔(¬p→¬q)) = T
  } →
  assert(∃x ∈ TT: x.eval = F) →
  conclude(
    ¬(∀p,q: (p → q) ↔ (¬p → ¬q))
  )
}
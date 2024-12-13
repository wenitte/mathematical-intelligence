theorem Division_By_Three() {
  assert(
    ∀n ∈ ℤ, n > 3 ⇒ 
    ∃x ∈ {n, n+2, n+4}: 3|x
  )
} ↔

proof Division_By_Three() {
  setVar(n: ℤ, n > 3) →
  lemma Division_Cases() {
    assert(
      ∃k ∈ ℤ: (n = 3k) ∨ (n = 3k + 1) ∨ (n = 3k + 2)
    )
  } →
  
  case(n = 3k) {
    assert(3|n) →
    conclude(∃x ∈ {n, n+2, n+4}: 3|x)
  } ∨
  
  case(n = 3k + 1) {
    assert(n + 2 = 3k + 3) →
    assert(n + 2 = 3(k + 1)) →
    assert(3|(n + 2)) →
    conclude(∃x ∈ {n, n+2, n+4}: 3|x)
  } ∨
  
  case(n = 3k + 2) {
    assert(n + 4 = 3k + 6) →
    assert(n + 4 = 3(k + 2)) →
    assert(3|(n + 4)) →
    conclude(∃x ∈ {n, n+2, n+4}: 3|x)
  } →
  
  apply(Division_Cases()) →
  conclude(∃x ∈ {n, n+2, n+4}: 3|x)
}
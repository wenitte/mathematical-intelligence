theorem CantorStrongVersionTheorem() {
  let S: Set
  let P^n(S): RecursiveFunction = {
    case n = 0: S
    case n > 0: powerset(P^(n-1)(S))
  }
  assert(
    ∀n > 0 → ¬(S ≅ P^n(S))
  )
} ↔

proof CantorStrongVersionTheorem() {
  defineNotation(
    a^n: RecursiveFunction = {
      case n = 0: a
      case n > 0: {a^(n-1)}
    }
  ) →
  
  assume(∃f: S → Q^n | f isomorphism ∧ Q^n ⊆ P^n(S)) →
  
  let A^(n-1) = {s^(n-1) ∈ P^(n-1)(S) | s^(n-1) ≠ f(s)} →
  
  lemma NonMembership() {
    let Q^(n-1) ∈ Q^n →
    let x ∈ S | f(x) = Q^(n-1) →
    assert(
      (x^(n-1) ∈ Q^(n-1) → x^(n-1) ∉ A^(n-1)) ∧
      (x^(n-1) ∉ Q^(n-1) → x^(n-1) ∈ A^(n-1))
    ) →
    conclude(A^(n-1) ∉ Q^(n-1))
  } →
  
  apply(NonMembership()) →
  assert(A^(n-1) ∉ Q^n) →
  conclude(Q^n ⊂ P^n(S)) →
  
  contradiction(f isomorphism) →
  conclude(¬(S ≅ P^n(S)))
}
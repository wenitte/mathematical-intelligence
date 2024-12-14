theorem ComputableRationalIsComputableReal() {
  assert(
    ∀{x_n} ∈ SequenceQ ∧ isComputable({x_n}) →
    isComputableRealSequence({x_n})
  )
} ↔

proof ComputableRationalIsComputableReal() {
  reference(ComputableRealSequenceEquivalence) →
  assert(
    ∃{a_k} ∈ SequenceQ ∧
    ∃φ,ψ: ℕ² → ℕ ∧
    isTotalRecursive(φ) ∧
    isTotalRecursive(ψ) ∧
    (∀m,p ∈ ℕ: ∀n ≥ ψ(m,p): |a_φ(m,n) - x_m| < 1/(p+1))
  ) →
  
  construct({
    ∀k ∈ ℕ: a_k = x_k,
    φ(m,n) = m,
    ψ(m,p) = 0
  }) →
  
  lemma FunctionsAreTotalRecursive() {
    assert(isPrimitiveRecursive(φ)) →
    assert(isPrimitiveRecursive(ψ)) →
    reference(PrimitiveRecursiveIsTotalRecursive) →
    assert(isTotalRecursive(φ) ∧ isTotalRecursive(ψ))
  } →
  
  lemma SequenceIsComputable() {
    assert({a_k} = {x_k}) →
    assert(isComputable({x_k})) →
    assert(isComputable({a_k}))
  } →
  
  assert(
    ∀m,n,p ∈ ℕ:
    |a_φ(m,n) - x_m| = |a_m - x_m| = 0 < 1/(p+1)
  )
}
theorem Addition_Integers_Primitive_Recursive() {
  assert(
    ∀a: ℕ² → ℕ,
    ∀m,n,p ∈ ℕ,
    ∀k,ℓ ∈ ℤ ⇒
    (m codes k ∧ n codes ℓ ∧ p codes (k + ℓ)) →
    isPrimitiveRecursive(a)
  )
} ↔

proof Addition_Integers_Primitive_Recursive() {
  define(a(m,n) := {
    case(sgn_ℤ(k) = sgn_ℤ(ℓ)) → sgn_ℤ(k) ×_ℤ (|k| + |ℓ|)_ℤ,
    case(sgn_ℤ(k) ≠ sgn_ℤ(ℓ) ∧ |k| ≥ |ℓ|) → sgn_ℤ(k) ×_ℤ (|k| ∸ |ℓ|)_ℤ,
    case(sgn_ℤ(k) ≠ sgn_ℤ(ℓ) ∧ |k| < |ℓ|) → sgn_ℤ(ℓ) ×_ℤ (|ℓ| ∸ |k|)_ℤ
  }) →

  lemma Components_Primitive_Recursive() {
    assert(isPrimitiveRecursive(OrderingRelations)) ∧
    assert(isPrimitiveRecursive(EqualityRelation)) ∧
    assert(isPrimitiveRecursive(SetOperations)) ∧
    assert(isPrimitiveRecursive(sgn_ℤ)) ∧
    assert(isPrimitiveRecursive(×_ℤ)) ∧
    assert(isPrimitiveRecursive(abs_ℤ)) ∧
    assert(isPrimitiveRecursive(+)) ∧
    assert(isPrimitiveRecursive(∸)) ∧
    assert(isPrimitiveRecursive(CaseDefinition))
  } →

  lemma Correctness_Size_Greater() {
    assert(|k| > |ℓ| ⇒ sgn_ℤ(k + ℓ) = sgn_ℤ(k)) ∧
    assert(sgn_ℤ(k) = sgn_ℤ(ℓ) ⇒ |k + ℓ| = |k| + |ℓ|) ∧
    assert(sgn_ℤ(k) ≠ sgn_ℤ(ℓ) ⇒ |k + ℓ| = |k| ∸ |ℓ|)
  } →

  lemma Correctness_Size_Equal() {
    assert(|k| = |ℓ| ∧ sgn_ℤ(k) = sgn_ℤ(ℓ) ⇒ 
      (sgn_ℤ(k + ℓ) = sgn_ℤ(k) ∧ |k + ℓ| = |k| + |ℓ|)) ∧
    assert(|k| = |ℓ| ∧ sgn_ℤ(k) ≠ sgn_ℤ(ℓ) ⇒ 
      correctCutOffResult(k,ℓ))
  } →

  apply(Components_Primitive_Recursive()) →
  apply(Correctness_Size_Greater()) →
  apply(Correctness_Size_Equal()) →
  
  assert(∀cases(k,ℓ) ⇒ a(m,n) codes (k + ℓ)) →
  assert(isPrimitiveRecursive(a))
}
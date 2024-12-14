theorem Complements_Partition() {
  assert(
    ∀S[|S| ≥ 2] ∧ ∀A,B ⊆ S ∧ ∃∁_S →
    (A|B is_partition_of S) ↔ (∁_S(A)|∁_S(B) is_partition_of S)
  )
}

proof Complements_Partition() {
  // Necessary Condition (→)
  assume(A|B is_partition_of S) →
  assert(A ∩ B = ∅) ∧     // Definition of partition
  assert(A ∪ B = S) ∧     // Definition of partition
  assert(A,B ≠ ∅) →       // Definition of partition
  
  lemma Complement_Steps() {
    assert(A ∩ B = ∅) →
    assert(∁_S(A ∩ B) = S) →           // Complement of empty set
    assert(∁_S(A) ∪ ∁_S(B) = S) →      // De Morgan's Laws
    
    assert(A ∪ B = S) →
    assert(∁_S(A ∪ B) = ∅) →           // Complement with self
    assert(∁_S(A) ∩ ∁_S(B) = ∅)        // De Morgan's Laws
  } →
  
  lemma NonEmpty_Complements() {
    assume(∁_S(A) = ∅) →
    assert(A = S) →                     // Complement of empty set
    assert(B = ∅) →                    // From A ∩ B = ∅
    assert(contradiction(B ≠ ∅)) →
    assert(B ≠ ∅ → ∁_S(A) ≠ ∅) ∧      // Rule of Transposition
    assert(A ≠ ∅ → ∁_S(B) ≠ ∅) →
    assert(∁_S(A),∁_S(B) ≠ ∅)          // From A,B ≠ ∅
  } →
  
  apply(Complement_Steps()) ∧
  apply(NonEmpty_Complements()) →
  assert(∁_S(A)|∁_S(B) is_partition_of S)

  // Sufficient Condition (←)
  assume(∁_S(A)|∁_S(B) is_partition_of S) →
  assert(∁_S(∁_S(A))|∁_S(∁_S(B)) is_partition_of S) →  // By necessary condition
  assert(∁_S(∁_S(A)) = A ∧ ∁_S(∁_S(B)) = B) →         // Double complement
  assert(A|B is_partition_of S)
}
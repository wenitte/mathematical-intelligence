theorem Commutative_Semigroup_Is_Entropic() {
  assert(
    ∀S(isSemigroup(S) ∧ isCommutative(S) → isEntropic(S))
  )
} ↔

proof Commutative_Semigroup_Is_Entropic() {
  setStruct(S: Semigroup, ∘: BinaryOperation) →
  assume(isCommutative(S, ∘)) →
  setVar(a,b,c,d: ∈ S) →
  
  assert((a ∘ b) ∘ (c ∘ d)) →
  
  apply(AssociativityAxiom) →
  assert(a ∘ (b ∘ (c ∘ d))) →
  
  apply(AssociativityAxiom) →
  assert(a ∘ ((b ∘ c) ∘ d)) →
  
  apply(Commutativity, {b,c}) →
  assert(a ∘ ((c ∘ b) ∘ d)) →
  
  apply(AssociativityAxiom) →
  assert(a ∘ (c ∘ (b ∘ d))) →
  
  apply(AssociativityAxiom) →
  assert((a ∘ c) ∘ (b ∘ d)) →
  
  conclude(
    (a ∘ b) ∘ (c ∘ d) = (a ∘ c) ∘ (b ∘ d)
  ) →
  
  conclude(isEntropic(S))
}
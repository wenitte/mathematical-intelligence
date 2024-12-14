theorem Composite_Ordered_Ring_Monomorphisms() {
  let(S1: OrderedRing(+₁, ∘₁, ⪯₁)) ∧
  let(S2: OrderedRing(+₂, ∘₂, ⪯₂)) ∧
  let(S3: OrderedRing(+₃, ∘₃, ⪯₃)) ∧
  let(φ: Monomorphism(S1 → S2)) ∧
  let(ψ: Monomorphism(S2 → S3)) →
  assert(
    ψ ∘ φ: OrderedRingMonomorphism(S1 → S3)
  )
} ↔

proof Composite_Ordered_Ring_Monomorphisms() {
  apply(Composite_Order_Embeddings_Theorem()) →
  assert(ψ ∘ φ: OrderEmbedding(⟨S1, ⪯₁⟩ → ⟨S3, ⪯₃⟩)) →
  
  apply(Composite_Monomorphisms_Theorem()) →
  assert(ψ ∘ φ: Monomorphism(S1 → S3)) →
  
  apply(Group_Monomorphism_Preserves_Group()) →
  assert(ψ ∘ φ: GroupMonomorphism(⟨S1, +₁⟩ → ⟨S3, +₃⟩)) →
  
  apply(Semigroup_Monomorphism_Preserves_Semigroup()) →
  assert(ψ ∘ φ: SemigroupMonomorphism(⟨S1, ∘₁⟩ → ⟨S3, ∘₃⟩)) →
  
  conclude(
    ψ ∘ φ: OrderedRingMonomorphism(S1 → S3)
  )
}
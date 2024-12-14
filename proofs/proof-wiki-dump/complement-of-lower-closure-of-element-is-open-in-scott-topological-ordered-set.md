theorem Complement_Lower_Closure_Is_Open() {
  define(T: ⟨S,⪯,τ⟩) →
  assert(T is_RelationalStructure with_ScottTopology) ∧
  assert(⟨S,⪯⟩ is_UpCompleteOrderedSet) ∧
  setVar(x ∈ S) →
  assert(
    S ∖ x⪯ ∈ τ
  )
  where(
    x⪯ := {y ∈ S | y ⪯ x},
    S ∖ x⪯ := {y ∈ S | y ∉ x⪯}
  )
} ↔

proof Complement_Lower_Closure_Is_Open() {
  lemma Lower_Closure_Is_Closed() {
    assert(x⪯ is_Closed in_Topology(τ))
  } →
  apply(Lower_Closure_Is_Closed()) →
  assert(x⪯ is_Closed) →
  assert(x⪯ is_Closed ↔ (S ∖ x⪯) ∈ τ) →
  conclude(S ∖ x⪯ ∈ τ) →
  assert(S ∖ x⪯ is_Open)
}
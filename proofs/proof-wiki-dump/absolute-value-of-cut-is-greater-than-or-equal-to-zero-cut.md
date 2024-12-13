theorem Absolute_Value_Cut_NonNegative() {
  assert(
    ∀α ∈ Cuts ⇒ size(α) ≥ 0*
  )
} ↔

proof Absolute_Value_Cut_NonNegative() {
  setVar(α: Cuts) →
  
  case α ≥ 0* {
    assert(size(α) = α) →
    assert(size(α) ≥ 0*)
  } ∨
  
  case α < 0* {
    lemma Opposite_Cut_Exists() {
      assert(∃β ∈ Cuts: β + α = 0*)
    } →
    apply(Opposite_Cut_Exists()) →
    assert(α = -β) →
    assert(β > 0*) →
    assert(size(α) = β) →
    assert(size(α) ≥ 0*)
  } →
  
  conclude(size(α) ≥ 0*)
}
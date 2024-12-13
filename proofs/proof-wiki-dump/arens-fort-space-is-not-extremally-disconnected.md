theorem ArensFortsNotExtrDisconnected() {
  let(T = ⟨S,τ⟩: ArensfortSpace) →
  assert(¬(IsExtrDisconnected(T)))
} ↔

proof ArensFortsNotExtrDisconnected() {
  setDef(Sm(V) := {n: ⟨m,n⟩ ∉ V where V ⊆ ℤ≥0 × ℤ≥0}) →
  setDef(U := {⟨n,m⟩: ∃k(m = 2k)} \ {⟨0,0⟩}) →
  
  assert(IsOpen(U) in T) ∧
  assert(⟨0,0⟩ ∈ Sᶜ(U)) ∧
  assert(∀m ∈ ℕ → |Sm(U)| = ∞) →
  
  assert(¬IsOpen(Sᶜ(U)) in T) →
  assert(¬IsClosed(U) in T) →
  
  let(U⁻: Closure(U)) →
  assert(⟨0,0⟩ ∉ Sᶜ(U ∪ {⟨0,0⟩})) →
  assert(IsOpen(Sᶜ(U ∪ {⟨0,0⟩})) in T) →
  assert(IsClosed(U ∪ {⟨0,0⟩}) in T) →
  
  lemma ClosureIsSmallest() {
    assert(U⁻ = U ∪ {⟨0,0⟩})
  } →
  
  assert(⟨0,0⟩ ∈ U ∪ {⟨0,0⟩}) ∧
  assert(∀m ∈ ℕ → |Sm(U ∪ {⟨0,0⟩})| = ∞) →
  assert(¬IsOpen(U ∪ {⟨0,0⟩}) in T) →
  
  assert(IsOpen(U) ∧ ¬IsOpen(U⁻)) →
  assert(¬(IsExtrDisconnected(T)))
}
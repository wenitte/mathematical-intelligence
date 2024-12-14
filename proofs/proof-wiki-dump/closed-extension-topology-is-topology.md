theorem Closed_Extension_Topology() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space ∧
    τ*_p is_closed_extension_topology_of τ) ⇒
    is_topology(τ*_p, S*_p) where S*_p = S ∪ {p}
  )
} ↔

proof Closed_Extension_Topology() {
  define(τ*_p = {U ∪ {p}: U ∈ τ} ∪ {∅}) →
  
  assert(∅ ∈ τ*_p) by_definition →
  assert(S ∈ τ) by_topology_axiom →
  assert(S ∪ {p} ∈ τ*_p) by_definition →
  
  lemma Intersection_Closure() {
    setVar(U₁, U₂ ∈ τ*_p) →
    define(U₁* = U₁ ∖ {p}) →
    define(U₂* = U₂ ∖ {p}) →
    assert(U₁* ∈ τ ∧ U₂* ∈ τ) →
    assert(p ∈ U₁ ∧ p ∈ U₂) →
    assert(p ∈ U₁ ∩ U₂) →
    assert(U₁ ∩ U₂ = (U₁* ∩ U₂*) ∪ {p}) →
    assert(U₁ ∩ U₂ ∈ τ*_p)
  } →

  lemma Arbitrary_Union() {
    setVar(𝒰 ⊆ τ*_p) →
    assert(⋃𝒰 = (⋃_{U∈𝒰}(U ∖ {p})) ∪ {p}) →
    assert(⋃𝒰 ∈ τ*_p)
  } →
  
  apply(Intersection_Closure()) →
  apply(Arbitrary_Union()) →
  
  conclude(is_topology(τ*_p, S*_p))
}
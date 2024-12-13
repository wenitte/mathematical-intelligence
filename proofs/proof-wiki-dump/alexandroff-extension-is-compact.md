theorem Alexandroff_Extension_Is_Compact() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space ∧ S ≠ ∅) ∧
    ∃p(p ∉ S) ∧
    let S* = S ∪ {p} ∧
    let T* = ⟨S*,τ*⟩ be_alexandroff_extension(S) →
    is_compact(T*)
  )
} ↔

proof Alexandroff_Extension_Is_Compact() {
  setVar(𝕌: open_cover(T*)) →
  assert(∃V ∈ 𝕌(p ∈ V)) →
  assert(p ∉ S → V ∉ τ) →
  
  lemma Alexandroff_Extension_Definition() {
    assert(
      V ∉ τ →
      ∃K(K = S* ∖ V ∧ is_closed(K) ∧ is_compact(K))
    )
  } →
  
  apply(Alexandroff_Extension_Definition()) →
  setVar(K = S* ∖ V) →
  assert(is_compact(K) → ∃𝕎 ⊆ 𝕌(|𝕎| < ∞ ∧ K ⊆ ∪𝕎)) →
  
  assert(T* = V ∪ K) →
  assert(∃𝕊 ⊆ 𝕌(
    |𝕊| < ∞ ∧
    𝕊 = 𝕎 ∪ {V} ∧
    T* ⊆ ∪𝕊
  )) →
  
  assert(∃finite_subcover(𝕌)) →
  conclude(is_compact(T*))
}
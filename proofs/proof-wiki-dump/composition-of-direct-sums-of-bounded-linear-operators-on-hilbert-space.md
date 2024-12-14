theorem DirectSumComposition() {
  assert(
    (∀ GF ∈ {ℝ,ℂ}) ∧
    (∀i ∈ I: ⟨H_i,⟨·,·⟩_i⟩ is Hilbert space over GF) ∧
    (∀i ∈ I: T_i,S_i: H_i → H_i are bounded linear) ∧
    (sup_{i∈I} ∥T_i∥_{B(H_i)} < ∞) ∧
    (sup_{i∈I} ∥S_i∥_{B(H_i)} < ∞) ∧
    (H = ⊕_{i∈I} H_i) ∧
    (T = ⊕_{i∈I} T_i) ∧
    (S = ⊕_{i∈I} S_i)
    ⇒
    (TS = ⊕_{i∈I} T_iS_i)
  )
} ↔

proof DirectSumComposition() {
  lemma NormBound() {
    assert(
      ∀i ∈ I: ∥T_iS_i∥_{B(H_i)} ≤ ∥T_i∥_{B(H_i)}∥S_i∥_{B(H_i)}
    )
  } →
  
  apply(NormBound()) →
  assert(
    sup_{i∈I} ∥T_iS_i∥_{B(H_i)} ≤ (sup_{i∈I} ∥T_i∥_{B(H_i)})(sup_{i∈I} ∥S_i∥_{B(H_i)}) < ∞
  ) →
  
  assert(⊕_{i∈I} T_iS_i is well-defined) →
  
  setVar(f ∈ H) →
  setVar(i ∈ I) →
  assert(
    ((⊕_{i∈I} T_i)(⊕_{i∈I} S_i)f)_i = T_i((⊕_{i∈I} S_i)f)_i = T_iS_if_i = (⊕_{i∈I} T_iS_i)f)_i
  ) →
  
  assert(
    ∀f ∈ H: (⊕_{i∈I} T_i)(⊕_{i∈I} S_i)f = (⊕_{i∈I} T_iS_i)f
  ) →
  
  conclude(
    (⊕_{i∈I} T_i)(⊕_{i∈I} S_i) = ⊕_{i∈I} T_iS_i
  )
}
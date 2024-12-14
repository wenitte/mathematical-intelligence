theorem Conditional_Not_Equiv_Converse() {
  assert(
    ¬((p → q) ↔ (q → p))
  )
}

proof Conditional_Not_Equiv_Converse() {
  setVar(p: 𝔹) →
  setVar(q: 𝔹) →
  
  lemma Truth_Table() {
    assert(
      ∃(p,q ∈ 𝔹) : ((p → q) ↔ (q → p)) = 𝔽
    ) →
    assert(
      when p = 𝔽, q = 𝕋:
      (𝔽 → 𝕋) ↔ (𝕋 → 𝔽) = 𝔽
    ) →
    assert(
      Truth_Values = [
        [𝔽,𝔽] → 𝕋,
        [𝔽,𝕋] → 𝔽,
        [𝕋,𝔽] → 𝔽,
        [𝕋,𝕋] → 𝕋
      ]
    )
  } →
  
  apply(Truth_Table()) →
  assert(
    ∃(p,q ∈ 𝔹) : ((p → q) ↔ (q → p)) = 𝔽 →
    ¬((p → q) ↔ (q → p))
  )
}
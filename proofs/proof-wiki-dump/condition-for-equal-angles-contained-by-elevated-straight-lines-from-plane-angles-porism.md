theorem Equal_Angles_Elevated_Lines() {
  assert(
    ∀α₁,α₂ ∈ Angles ∧
    ∀l₁,l₂ ∈ Lines ∧
    ∀p₁,p₂ ∈ Points ⇒
    (α₁ = α₂ ∧ 
     l₁,l₂ elevated_from(α₁,α₂) ∧
     length(l₁) = length(l₂) ∧
     angle(l₁,base(α₁)) = angle(l₂,base(α₂))) →
    height(p₁,plane(α₁)) = height(p₂,plane(α₂))
    where p₁ = endpoint(l₁) ∧ p₂ = endpoint(l₂)
  )
} ↔

proof Equal_Angles_Elevated_Lines() {
  setVars(α₁,α₂: Angles, l₁,l₂: Lines, p₁,p₂: Points) →
  assume(α₁ = α₂) →
  assume(l₁,l₂ elevated_from(α₁,α₂)) →
  assume(length(l₁) = length(l₂)) →
  assume(angle(l₁,base(α₁)) = angle(l₂,base(α₂))) →
  
  lemma Similar_Construction() {
    assert(
      congruent_construction(l₁,l₂,α₁,α₂) →
      height(p₁,plane(α₁)) = height(p₂,plane(α₂))
    )
  } →
  
  apply(Similar_Construction()) →
  assert(height(p₁,plane(α₁)) = height(p₂,plane(α₂)))
}
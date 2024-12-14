theorem Cardinals_Proper_Class() {
  assert(
    ∀N(N = {x: x is_cardinal} → is_proper_class(N))
  )
} ↔

proof Cardinals_Proper_Class() {
  assume(¬is_proper_class(N)) →
  assert(N ⊆ On) →
  lemma Cardinals_Subset_Ordinals() {
    assert(N ⊆ On)
  } →
  apply(Cardinals_Subset_Ordinals()) →
  
  setVar(x = {y ∈ On: y ⪯ ⋃N}) →
  
  lemma Cardinal_Dominated_Ordinals() {
    assert(
      is_cardinal(x) ∧ ¬∃f(is_injection(f, x, ⋃N))
    )
  } →
  apply(Cardinal_Dominated_Ordinals()) →
  
  assert(x ∈ N) →
  assert(x ⊆ ⋃N) →
  
  lemma Set_Subset_Union() {
    assert(∀a(a ∈ N → a ⊆ ⋃N))
  } →
  apply(Set_Subset_Union()) →
  
  setVar(I_x = {(y,y): y ∈ x}) →
  assert(is_injection(I_x, x, ⋃N)) →
  
  contradiction() →
  
  assert(is_proper_class(N))
}
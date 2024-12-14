theorem Restriction_Is_Correspondence() {
  assert(
    ∀R ⊆ S × T ⇒
    (R|_(PreImg(R) × Img(R)) is_correspondence)
  )
} ↔

proof Restriction_Is_Correspondence() {
  setVar(R: relation(S,T)) →
  
  lemma Left_Total() {
    assert(∀x ∈ S ⇒ ∃y ∈ T: xRy) →
    assert(PreImg(R) = {x ∈ S: ∃y ∈ T: xRy}) →
    assert(∀x ∈ PreImg(R) ⇒ ∃y ∈ T: xRy)
  } →
  
  lemma Right_Total() {
    assert(∀x ∈ T ⇒ ∃y ∈ S: xRy) →
    assert(Img(R) = {x ∈ T: ∃y ∈ S: xRy}) →
    assert(∀x ∈ Img(R) ⇒ ∃y ∈ S: xRy)
  } →
  
  apply(Left_Total()) ∧
  apply(Right_Total()) →
  
  assert(
    (R is_left_total) ∧
    (R is_right_total)
  ) →
  
  assert(R|_(PreImg(R) × Img(R)) is_correspondence)
}
theorem Relation_Is_Subclass_Of_Domain_Image_Product() {
  let(V: Universe) →
  let(R ⊆ V × V: Relation) →
  let(Dom(R): Domain) →
  let(Img(R): Image) →
  assert(
    R ⊆ (Dom(R) × Img(R))
  )
} ↔

proof Relation_Is_Subclass_Of_Domain_Image_Product() {
  forall((x,y) ∈ R) →
  assert(
    (x,y) ∈ R → x ∈ Dom(R)
  ) by(domain_definition) →
  assert(
    (x,y) ∈ R → y ∈ Img(R)
  ) by(image_definition) →
  
  lemma Cartesian_Product_Membership() {
    assert(
      (x ∈ Dom(R) ∧ y ∈ Img(R)) → (x,y) ∈ (Dom(R) × Img(R))
    )
  } →
  
  apply(Cartesian_Product_Membership()) →
  assert(
    ∀(x,y) ∈ R → (x,y) ∈ (Dom(R) × Img(R))
  ) →
  assert(
    R ⊆ (Dom(R) × Img(R))
  ) by(subclass_definition)
}
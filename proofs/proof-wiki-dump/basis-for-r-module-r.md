theorem Ring_Unity_Basis() {
  let R = (R, +, ×) be Ring
  let unity_R = Element(R)
  let R_module = (R, +_R, ∘)_R
  assert(
    unity_R is unity of R ∧
    {unity_R} is basis of R_module
  )
} ↔

proof Ring_Unity_Basis() {
  reference(Dimension_R_Module_1) {
    assert(dim(R_module) = 1)
  } →
  reference(Standard_Ordered_Basis) {
    assert(
      dim(R_module) = 1 →
      {unity_R} is basis of R_module
    )
  } →
  apply(Standard_Ordered_Basis) →
  assert({unity_R} is basis of R_module)
}
theorem Image_Composition_Mappings() {
  let(A,B,C: Set, f: A→B, g: B→C) →
  let(f_img: 𝒫(A)→𝒫(B), g_img: 𝒫(B)→𝒫(C)) →
  assert(
    (g∘f)_img = g_img∘f_img
  )
}

proof Image_Composition_Mappings() {
  lemma NonEmpty_Case() {
    let(S ⊆ A, S ≠ ∅) →
    assert(
      (g_img∘f_img)(S)
      = g_img(f_img(S))
      = {g(x) | x ∈ f_img(S)}
      = {g(x) | ∃y ∈ S: x = f(y)}
      = {g(f(y)) | y ∈ S}
      = {(g∘f)(y) | y ∈ S}
      = (g∘f)_img(S)
    )
  } →
  
  lemma Empty_Case() {
    assert(
      (g_img∘f_img)(∅)
      = ∅
      = (g∘f)_img(∅)
    )
  } →
  
  apply(NonEmpty_Case()) ∧ apply(Empty_Case()) →
  assert(∀S ⊆ A: (g_img∘f_img)(S) = (g∘f)_img(S)) →
  conclude((g∘f)_img = g_img∘f_img)
}
theorem Complete_Residue_System_Mod11() {
  assert(
    S = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21} ⇒
    S forms_complete_residue_system(mod 11)
  )
} ↔

proof Complete_Residue_System_Mod11() {
  assert(11 = 1×11 + 0) →
  assert(11 ≡ 0 (mod 11)) →
  
  assert(13 = 1×11 + 2) →
  assert(13 ≡ 2 (mod 11)) →
  
  assert(15 = 1×11 + 4) →
  assert(15 ≡ 4 (mod 11)) →
  
  assert(17 = 1×11 + 6) →
  assert(17 ≡ 6 (mod 11)) →
  
  assert(19 = 1×11 + 8) →
  assert(19 ≡ 8 (mod 11)) →
  
  assert(21 = 1×11 + 10) →
  assert(21 ≡ 10 (mod 11)) →
  
  assert(
    {1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21} ≡
    {1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10} (mod 11)
  ) →
  
  lemma Initial_Segment() {
    assert(
      {0, 1, 2, ..., n-1} forms_complete_residue_system(mod n)
    )
  } →
  
  apply(Initial_Segment()) →
  assert(S forms_complete_residue_system(mod 11))
}
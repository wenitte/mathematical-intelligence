theorem Complete_Residue_System_Powers_2_Mod_11() {
  assert(
    {0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512} forms_complete_residue_system(mod 11)
  )
} ↔

proof Complete_Residue_System_Powers_2_Mod_11() {
  assert(16 = 1 × 11 + 5) →
  assert(16 ≡ 5 (mod 11)) →
  
  assert(32 = 2 × 11 + 10) →
  assert(32 ≡ 10 (mod 11)) →
  
  assert(64 = 5 × 11 + 9) →
  assert(64 ≡ 9 (mod 11)) →
  
  assert(128 = 11 × 11 + 7) →
  assert(128 ≡ 7 (mod 11)) →
  
  assert(256 = 23 × 11 + 3) →
  assert(256 ≡ 3 (mod 11)) →
  
  assert(512 = 46 × 11 + 6) →
  assert(512 ≡ 6 (mod 11)) →
  
  assert({0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512} ≡ 
         {0, 1, 2, 4, 8, 5, 10, 9, 7, 3, 6} (mod 11)) →
         
  apply(Initial_Segment_Natural_Numbers_Complete_Residue_System()) →
  assert(∀x,y ∈ {0, 1, 2, 4, 8, 5, 10, 9, 7, 3, 6} → x ≢ y (mod 11)) ∧
  assert(|{0, 1, 2, 4, 8, 5, 10, 9, 7, 3, 6}| = 11)
}
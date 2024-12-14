theorem Complement_LimSup_Equals_LimInf_Complements() {
  assert(
    ∀{En}n∈ℕ [En sequence of sets] ⇒ 
    (complement(limsup[n→∞] En) = liminf[n→∞] complement(En))
  )
} ↔

proof Complement_LimSup_Equals_LimInf_Complements() {
  setVar({En}n∈ℕ: SetSequence) →
  
  assert(
    complement(limsup[n→∞] En) = 
    complement(∩[n=0]∞ ∪[i=n]∞ En)
  ) →
  apply(LimSup_Definition()) →
  
  assert(
    complement(∩[n=0]∞ ∪[i=n]∞ En) = 
    ∪[n=0]∞ complement(∪[i=n]∞ En)
  ) →
  apply(DeMorgans_Laws()) →
  
  assert(
    ∪[n=0]∞ complement(∪[i=n]∞ En) = 
    ∪[n=0]∞ ∩[i=n]∞ complement(En)
  ) →
  apply(DeMorgans_Laws()) →
  
  assert(
    ∪[n=0]∞ ∩[i=n]∞ complement(En) = 
    liminf[n→∞] complement(En)
  ) →
  apply(LimInf_Definition())
}
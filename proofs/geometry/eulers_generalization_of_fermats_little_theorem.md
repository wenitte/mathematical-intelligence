((a ≡ b (mod n) ↔ n|(a-b)) ∧
 (a ≡ b (mod n) → a+c ≡ b+c (mod n)) ∧
 (a ≡ b (mod n) → a*c ≡ b*c (mod n)) ∧
 (a ≡ b (mod n) ∧ c ≡ d (mod n) → a*c ≡ b*d (mod n)) ∧
 (a ≡ b (mod n) ∧ k ∈ ℕ → a^k ≡ b^k (mod n))) →

((coprime(a,b) ↔ gcd(a,b) = 1) ∧
 (gcd(a,b) = d ↔ (d|a ∧ d|b ∧ ∀k(k|a ∧ k|b → k|d))) ∧
 (coprime(a,b) → ∃x,y(ax + by = 1))) →

(totient(m) = |{k | 1 ≤ k ≤ m ∧ coprime(k,m)}|) →

(m > 1 ∧ coprime(a,m)) →

(Let S = {k | 1 ≤ k ≤ m ∧ coprime(k,m)}) →

(|S| = totient(m)) →

(∀x∈S(∃!y∈S(xy ≡ 1 (mod m)))) →

(∀x∈S(x∈S → ax ∈ S)) →

(∀x,y∈S(x ≢ y (mod m) → ax ≢ ay (mod m))) →

(Let T = {ax mod m | x ∈ S}) →

(|T| = |S|) →

(∏S ≡ ∏T (mod m)) →

(∏T ≡ a^|S| * ∏S (mod m)) →

(∏S ≡ a^totient(m) * ∏S (mod m)) →

a^totient(m) ≡ 1 (mod m)

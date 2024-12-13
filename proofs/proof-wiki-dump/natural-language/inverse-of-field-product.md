# 

Source: https://proofwiki.org/wiki/Inverse_of_Field_Product

Theorem
Let $\struct {F, +, \times}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $a, b \in F$ such that $a \ne 0$ and $b \ne 0$.

Then:

$\paren {a \times b}^{-1} = b^{-1} \times a^{-1}$


Proof
We are given that $a \ne 0$ and $b \ne 0$.
From Field has no Proper Zero Divisors and Rule of Transposition, we have:

$a \times b \ne 0$
By Field Axiom $\text M4$: Inverses for Product we have that $\paren {a \times b}^{-1}$ exists.
Then we have:














\(\ds \paren {b^{-1} \times a^{-1} } \times \paren {a \times b}\)

\(=\)







\(\ds b^{-1} \times \paren {a^{-1} \times a} \times b\)





Field Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds b^{-1} \times 1_F \times b\)





Field Axiom $\text M4$: Inverses for Product














\(\ds \)

\(=\)







\(\ds b^{-1} \times b\)





Field Axiom $\text M3$: Identity  for Product














\(\ds \)

\(=\)







\(\ds 1_F\)





Field Axiom $\text M4$: Inverses for Product



Hence the result by definition of multiplicative inverse.
$\blacksquare$


Sources
1973: C.R.J. Clapham: Introduction to Mathematical Analysis ... (previous) ... (next): Chapter $1$: Axioms for the Real Numbers: $2$. Fields: Theorem $3 \ \text {(vii)}$





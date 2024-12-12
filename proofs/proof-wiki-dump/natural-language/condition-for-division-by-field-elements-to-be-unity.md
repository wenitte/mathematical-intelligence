# 

Source: https://proofwiki.org/wiki/Condition_for_Division_by_Field_Elements_to_be_Unity



Theorem
Let $\struct {F, +, \times}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $a, b \in F$.

Then:

$\dfrac a b = 1_F$
if and only if:

$a = b$
where $\dfrac a b$ denotes division.


Proof
Necessary Condition
Let $a = b$.
Then:














\(\ds \dfrac a b\)

\(=\)







\(\ds a \times b^{-1}\)





Definition of Division over Field














\(\ds \)

\(=\)







\(\ds b \times b^{-1}\)





as $a = b$














\(\ds \)

\(=\)







\(\ds 1_F\)





Field Axiom $\text M4$: Inverses for Product



$\Box$


Sufficient Condition
Let $\dfrac a b = 1_F$.
Then:














\(\ds a \times b^{-1}\)

\(=\)







\(\ds 1_F\)





Definition of Division over Field








\(\ds \leadsto \ \ \)





\(\ds \paren {a \times b^{-1} } \times b\)

\(=\)







\(\ds 1_F \times b\)





multiplying both sides by $b$








\(\ds \leadsto \ \ \)





\(\ds a \times \paren {b \times b^{-1} }\)

\(=\)







\(\ds 1_F \times b\)





Field Axiom $\text M1$: Associativity of Product








\(\ds \leadsto \ \ \)





\(\ds a \times 1_F\)

\(=\)







\(\ds 1_F \times b\)





Field Axiom $\text M4$: Inverses for Product








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





Field Axiom $\text M3$: Identity  for Product



$\blacksquare$


Sources
1973: C.R.J. Clapham: Introduction to Mathematical Analysis ... (previous) ... (next): Chapter $1$: Axioms for the Real Numbers: $2$. Fields: Theorem $3 \ \text {(ii)}$





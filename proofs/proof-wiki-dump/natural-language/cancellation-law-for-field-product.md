# 

Source: https://proofwiki.org/wiki/Cancellation_Law_for_Field_Product

Theorem
Let $\struct {F, +, \times}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $a, b, c \in F$.

Then:

$a \times b = a \times c \implies a = 0_F \text { or } b = c$


Proof
Let $a \times b = a \times c$.
Then:














\(\ds a\)

\(\ne\)







\(\ds 0_F\)














\(\ds \leadsto \ \ \)

\(\ds \exists a^{-1} \in F: \, \)



\(\ds a^{-1} \times a\)

\(=\)







\(\ds 1_F\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1} \times \paren {a \times b}\)

\(=\)







\(\ds a^{-1} \times \paren {a \times c}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^{-1} \times a} \times b\)

\(=\)







\(\ds \paren {a^{-1} \times a} \times c\)





Field Axiom $\text M1$: Associativity of Product








\(\ds \leadsto \ \ \)





\(\ds 1_F \times b\)

\(=\)







\(\ds 1_F \times c\)





Field Axiom $\text M4$: Inverses for Product








\(\ds \leadsto \ \ \)





\(\ds b\)

\(=\)







\(\ds c\)





Field Axiom $\text M3$: Identity  for Product



That is:

$a \ne 0 \implies b = c$
$\Box$

Suppose $b \ne c$.
Then by Rule of Transposition:

$\map \neg {a \ne 0}$
that is:

$a = 0_F$
and we note that in this case:

$a \times b = 0_F = a \times c$
$\blacksquare$


Sources
1973: C.R.J. Clapham: Introduction to Mathematical Analysis ... (previous) ... (next): Chapter $1$: Axioms for the Real Numbers: $2$. Fields: Theorem $3 \ \text {(vi)}$





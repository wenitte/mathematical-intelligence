# 

Source: https://proofwiki.org/wiki/Field_has_no_Proper_Zero_Divisors



Theorem
Let $\struct {F, +, \times}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Then $\struct {F, +, \times}$ has no proper zero divisors.
That is:

$a \times b = 0_F \implies a = 0_F \lor b = 0_F$


Proof 1
By definition, $F$ is a division ring.
Again by definition, a division ring is a ring with unity with no proper zero divisors.
$\blacksquare$


Proof 2













\(\ds a\)

\(\ne\)







\(\ds 0_F\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1} \times \paren {a \times b}\)

\(=\)







\(\ds a^{-1} \times 0_F\)





$a^{-1}$ exists because $a \ne 0_F$








\(\ds \leadsto \ \ \)





\(\ds \paren {a^{-1} \times a} \times b\)

\(=\)







\(\ds a^{-1} \times 0_F\)





Field Axiom $\text M1$: Associativity of Product








\(\ds \leadsto \ \ \)





\(\ds 1_F \times b\)

\(=\)







\(\ds a^{-1} \times 0_F\)





Field Axiom $\text M4$: Inverses for Product








\(\ds \leadsto \ \ \)





\(\ds b\)

\(=\)







\(\ds a^{-1} \times 0_F\)





Field Axiom $\text M3$: Identity  for Product








\(\ds \leadsto \ \ \)





\(\ds b\)

\(=\)







\(\ds 0_F\)





Field Product with Zero



$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 87 \gamma$





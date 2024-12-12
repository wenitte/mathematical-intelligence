# 

Source: https://proofwiki.org/wiki/Condition_for_Difference_of_Field_Elements_to_be_Zero



Theorem
Let $\struct {F, +, \times}$ be a field whose zero is $0_F$.
Let $a, b \in F$

Then:

$a - b = 0_F$
if and only if

$a = b$
where $a - b$ denotes subtraction.


Proof
Necessary Condition
Let $a = b$.
Then:














\(\ds a - b\)

\(=\)







\(\ds a + \paren {-b}\)





Definition of Field Subtraction














\(\ds \)

\(=\)







\(\ds b + \paren {-b}\)





as $a = b$














\(\ds \)

\(=\)







\(\ds 0_F\)





Field Axiom $\text A4$: Inverses for Addition



$\Box$


Sufficient Condition
Let $a - b = 0_F$.
Then:














\(\ds a + \paren {-b}\)

\(=\)







\(\ds 0_F\)





Definition of Field Subtraction








\(\ds \leadsto \ \ \)





\(\ds \paren {a + \paren {-b} } + b\)

\(=\)







\(\ds 0_F + b\)





adding $b$ to both sides








\(\ds \leadsto \ \ \)





\(\ds a + \paren {\paren {-b} + b}\)

\(=\)







\(\ds 0_F + b\)





Field Axiom $\text A1$: Associativity of Addition








\(\ds \leadsto \ \ \)





\(\ds a + 0_F\)

\(=\)







\(\ds 0_F + b\)





Field Axiom $\text A4$: Inverses for Addition








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





Field Axiom $\text A3$: Identity for Addition



$\blacksquare$


Sources
1973: C.R.J. Clapham: Introduction to Mathematical Analysis ... (previous) ... (next): Chapter $1$: Axioms for the Real Numbers: $2$. Fields: Theorem $2 \ \text {(ii)}$





# 

Source: https://proofwiki.org/wiki/Cartesian_Product_Distributes_over_Union

Theorem
Cartesian product is distributive over union:

$A \times \paren {B \cup C} = \paren {A \times B} \cup \paren {A \times C}$
$\paren {B \cup C} \times A = \paren {B \times A} \cup \paren {C \times A}$


Proof
Take the result Cartesian Product of Unions:

$\paren {S_1 \cup S_2} \times \paren {T_1 \cup T_2} = \paren {S_1 \times T_1} \cup \paren {S_2 \times T_2} \cup \paren {S_1 \times T_2} \cup \paren {S_2 \times T_1}$

Put $S_1 = S_2 = A, T_1 = B, T_2 = C$:














\(\ds \)

\(\)







\(\ds A \times \paren {B \cup C}\)




















\(\ds \)

\(=\)







\(\ds \paren {A \cup A} \times \paren {B \cup C}\)





Set Union is Idempotent














\(\ds \)

\(=\)







\(\ds \paren {A \times B} \cup \paren {A \times C} \cup \paren {A \times C} \cup \paren {A \times B}\)





Cartesian Product of Unions














\(\ds \)

\(=\)







\(\ds \paren {A \times B} \cup \paren {A \times C}\)





Set Union is Idempotent



Thus:

$A \times \paren {B \cup C} = \paren {A \times B} \cup \paren {A \times C}$

The other result is proved similarly.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 6$: Ordered Pairs: Exercise $\text{(i)}$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $8 \ \text{(ii)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 3$. Ordered pairs; cartesian product sets: Exercise $3 \ (2)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Sets and Logic: Exercise $15$





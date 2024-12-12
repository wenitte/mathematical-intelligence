# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_not_Associative/Proof_2

Theorem
Let $A, B, C$ be non-empty sets.
Then:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
where $A \times B$ is the cartesian product of $A$ and $B$.


Formal Proof
Assign to every set $X$ the following number $\map n X \in \N$:

$\map n X = \begin {cases} 0 & : X = \O \\ 1 + \max_{Y \mathop \in X} \map n Y & : \text{ otherwise} \end {cases}$
From the Axiom of Foundation:

$\forall X \in \N: \map n X < \infty$

Now let $a \in A$ be such that:

$\map n a = \min_{b \mathop \in A} \map n b$
Suppose that:

$\exists a' \in A, b \in B: a = \tuple {a', b}$
That is, that $a$ equals the ordered pair of $a'$ and $b'$. 
Then it follows that:














\(\ds \map n a\)

\(=\)







\(\ds \map n {\set {\set {a'}, \set {a', b} } }\)





Definition of Ordered Pair














\(\ds \)

\(=\)







\(\ds 1 + \map \max {\map n {\set {a'} }, \map n {\set {a', b} } }\)





Definition of $n$














\(\ds \map n {\set {a', b} }\)

\(\ge\)







\(\ds \map n {\set {a'} }\)





Maximum of Subset














\(\ds \)

\(=\)







\(\ds 1 + \map n {a'}\)





Definition of $n$








\(\ds \leadsto \ \ \)





\(\ds \map n a\)

\(\ge\)







\(\ds 2 + \map n {a'}\)









That is:

$\map n {a'} < \map n a$
contradicting the assumed minimality of the latter. 
Therefore:

$a \notin A \times B$
and hence:

$A \nsubseteq A \times B$
It follows from Equality of Cartesian Products that:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
$\blacksquare$






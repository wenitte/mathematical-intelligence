# 

Source: https://proofwiki.org/wiki/Restricted_Dipper_Relation_is_Equivalence_Relation

Theorem
Let $m, n \in \N_{>0}$ be non-zero natural numbers.

Let $\RR^*_{m, n}$ be the restricted dipper relation on $\N$:

$\forall x, y \in \N_{>0}: x \mathrel {\RR^*_{m, n} } y \iff \begin {cases} x = y \\ m \le x < y \text { and } n \divides \paren {y - x} \\  m \le y < x \text { and } n \divides \paren {x - y} \end {cases}$

Then $\RR^*_{m, n}$ is an equivalence relation.


Proof
By definition, $\RR^*_{m, n}$ is the restriction of the dipper relation $\RR_{m, n}$ to $\N_{>0}$.
We have from Dipper Relation is Equivalence Relation that $\RR_{m, n}$ is an equivalence relation.
The result follows from Restriction of Equivalence Relation is Equivalence.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.7 \ \text {(a)}$





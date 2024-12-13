# 

Source: https://proofwiki.org/wiki/Integer_Powers_of_2_under_Multiplication_form_Infinite_Abelian_Group

Theorem
Let $S$ be the set of integers defined as:

$S = \set {2^k: k \in \Z}$
Then $\struct {S, \times}$ is an infinite abelian group.


Proof
It can be seen by inspection that $S \subseteq \Q_{>0}$.
That is, all the elements of $S$ are strictly positive rational numbers.
From Strictly Positive Rational Numbers under Multiplication form Countably Infinite Abelian Group:

$\struct {\Q_{>0}, \times}$ is an infinite abelian group.
It is noted that $S$ is an infinite set and so trivially $S \ne \O$.
Let $a, b \in S$.
Then:

$\exists k_1 \in \Z: a = 2^{k_1}$
$\exists k_2 \in \Z: b = 2^{k_2}$
We have that:

$\dfrac 1 {2^{k_2} } 2^{k_2} = 1$
and so $\dfrac 1 {2^{k_2} } = 2^{-k_2} = b^{-1}$ is the inverse of $b \in \struct {\Q_{>0}, \times}$.
Then we have:














\(\ds a \times b^{-1}\)

\(=\)







\(\ds 2^{k_1} \times \dfrac 1 {2^{k_2} }\)




















\(\ds \)

\(=\)







\(\ds 2^{k_1 - k_2}\)









We have that:

$k_1 + k_2 \in \Z$
and so $a \times b^{-1} \in \S$.
Hence by the One-Step Subgroup Test, $\struct {S, \times}$ is a subgroup of $\struct {\Q_{>0}, \times}$.
It has been established that $S$ is an infinite set.
Hence by definition $\struct {S, \times}$ is an infinite group.
Finally, from Subgroup of Abelian Group is Abelian, $\struct {S, \times}$ is an abelian group.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: Examples: $(1) \ \text {(a)}$





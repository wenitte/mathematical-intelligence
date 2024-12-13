# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property/Corollary



Corollary to Group has Latin Square Property
The Cayley table for any finite group is a Latin square.


Proof 1
Follows directly from the definition of both a Cayley table and a Latin square.


Proof 2
Let $G$ be a finite group whose order is $n$.
Let $\tuple {x_1, x_2, \ldots, x_n}$ be the elements of the underlying set of $G$ in the order they appear in the headings of the Cayley table of $G$.
Consider the row of the Cayley table headed with $a$.
The elements of that row are:

$\tuple {a x_1, a x_2, \ldots, a x_n}$
that is:

$\tuple {\map {\lambda_a} {x_1}, \map {\lambda_a} {x_2}, \ldots, \map {\lambda_a} {x_n} }$
where $\lambda_a$ denotes the left regular representation of $\struct {S, \circ}$ with respect to $a$.
From Regular Representations in Group are Permutations, it follows that each of $\map {\lambda_a} {x_1}, \map {\lambda_a} {x_2}, \ldots, \map {\lambda_a} {x_n}$ appears in that row exactly once.

A similar argument based on the right regular representation proves the result for the columns.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 5$: The Multiplication Table
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Examples of groups $\text{(v)}$





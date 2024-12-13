# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property/Corollary/Proof_2

Corollary to Group has Latin Square Property
The Cayley table for any finite group is a Latin square.


Proof
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
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 35.9$: Elementary consequences of the group axioms





# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_Normal_Subgroup_is_Congruence_Relation



Theorem
Let $\struct {G, \circ}$ be a group.
Let $N$ be a normal subgroup of $G$.

Then congruence modulo $N$ is a congruence relation for the group operation $\circ$.


Proof
Let $x \mathrel {\RR_N} y$ denote that $x$ and $y$ are in the same coset, that is:

$x \mathrel {\RR_N} y \iff x \circ N = y \circ N$
as specified in the definition of congruence modulo $N$.

Let $x \mathrel {\RR_N} x'$ and $y \mathrel {\RR_N} y'$.
To demonstrate that $\RR_N$ is a congruence relation for $\circ$, we need to show that:

$\paren {x \circ y} \mathrel {\RR_N} \paren {x' \circ y'}$

So:














\(\ds \paren {x \circ y} \circ \paren {x' \circ y'}^{-1}\)

\(=\)







\(\ds \paren {x \circ y} \circ \paren {y'^{-1} \circ x'^{-1} }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \paren {\paren {x \circ y} \circ y'^{-1} } \circ x'^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {x \circ \paren {y \circ y'^{-1} } } \circ x'^{-1}\)





Group Axiom $\text G 1$: Associativity




By Cosets are Equal iff Product with Inverse in Subgroup:

$x \circ x'^{-1} \in N$ and $y \circ y'^{-1} \in N$
Thus:

$\paren {x \circ y} \circ \paren {x' \circ y'}^{-1} \in x \circ H \circ x'^{-1}$
But we also have that:














\(\ds x \circ H \circ x'^{-1}\)

\(=\)







\(\ds H \circ x \circ x'^{-1}\)





Definition of Normal Subgroup














\(\ds \)

\(\subseteq\)







\(\ds H \circ H\)





Definition of Subset Product: $x \circ x'^{-1} \in H$














\(\ds \)

\(=\)







\(\ds H\)





Product of Subgroup with Itself



That is:

$\paren {x \circ y} \circ \paren {x' \circ y'}^{-1} \in H$
and so:

$\paren {x \circ y} \mathrel {\RR_N} \paren {x' \circ y'}$
Hence the result, by definition of congruence relation.
$\blacksquare$


Also see
Congruence Relation induces Normal Subgroup, the converse of this result


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.3$





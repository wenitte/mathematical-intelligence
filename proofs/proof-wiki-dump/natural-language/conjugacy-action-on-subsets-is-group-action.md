# 

Source: https://proofwiki.org/wiki/Conjugacy_Action_on_Subsets_is_Group_Action

Theorem
Let $\powerset G$ be the set of all subgroups of $G$.
For any $S \in \powerset G$ and for any $g \in G$, the conjugacy action:

$g * S := g \circ S \circ g^{-1}$
is a group action.


Proof
By Group Axiom $\text G 2$: Existence of Identity Element, $e \in G$, thus:














\(\ds e * S\)

\(=\)







\(\ds e \circ S \circ e^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds S\)





Definition of Identity Element



Thus Group Action Axiom $\text {GA} 2$ is seen to be fulfilled.

Then:














\(\ds \paren {g_1 \circ g_2} * S\)

\(=\)







\(\ds \paren {g_1 \circ g_2} \circ S \circ \paren {g_1 \circ g_2}^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g_1 \circ g_2 \circ S \circ \paren {g_2^{-1}  \circ g_1^{-1} }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds g_1 \circ \paren {g_2 \circ S \circ g_2^{-1} } \circ g_1^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds g_1 * \paren {g_2 \circ S \circ g_2^{-1} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g_1 * \paren {g_2 * S}\)





Definition of $*$



Thus Group Action Axiom $\text {GA} 1$ is shown to be fulfilled.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.5$. Groups acting on sets: Example $105$





# 

Source: https://proofwiki.org/wiki/Conjugacy_Action_on_Subgroups_is_Group_Action



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.

Let $X$ be the set of all subgroups of $G$.
For any $H \le G$ and for any $g \in G$, the conjugacy action:

$g * H := g \circ H \circ g^{-1}$
is a group action.


Proof
Clearly Group Action Axiom $\text {GA} 1$ is fulfilled as $e * H = H$.
Group Action Axiom $\text {GA} 2$ is shown to be fulfilled thus:














\(\ds \paren {g_1 \circ g_2} * H\)

\(=\)







\(\ds \paren {g_1 \circ g_2} \circ H \circ \paren {g_1 \circ g_2}^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g_1 \circ g_2 \circ H \circ g_2^{-1} \circ g_1^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds g_1 * \paren {g_2 \circ H \circ g_2^{-1} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g_1 * \paren {g_2 * H}\)





Definition of $*$



$\blacksquare$


Also see
Stabilizer of Conjugacy Action on Subgroup is Normalizer
Orbit of Conjugacy Action on Subgroup is Set of Conjugate Subgroups


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Example $10.7$





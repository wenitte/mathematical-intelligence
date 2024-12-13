# 

Source: https://proofwiki.org/wiki/Group_with_Zero_Element_is_Trivial

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\struct {G, \circ}$ have a zero element.

Then $\struct {G, \circ}$ is the trivial group.


Proof
Let $e \in G$ be the identity element of $G$.
Let $z \in G$ be a zero element.
Let $x \in G$ be any arbitrary element of $\struct {G, \circ}$.
Then:














\(\ds x\)

\(=\)







\(\ds x \circ e\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds x \circ \paren {z \circ z^{-1} }\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {x \circ z} \circ z^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds z \circ z^{-1}\)





Definition of Zero Element: $x \circ z = z$














\(\ds \)

\(=\)







\(\ds e\)





Group Axiom $\text G 3$: Existence of Inverse Element



So whatever $x \in G$ is, it has to be the identity element of $G$.
So $G$ can contain only that one element, and is therefore the trivial group.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.5$. Examples of groups: Example $83$





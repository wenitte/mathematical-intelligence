# 

Source: https://proofwiki.org/wiki/Abelian_Group_Induces_Entropic_Structure



Theorem
Let $\struct {G, \circ}$ be an abelian group.
Let the operation $*$ be defined on $G$ such that:

$\forall x, y \in G: x * y = x \circ y^{-1}$

Then $\struct {G, *}$ is an entropic structure.


Proof
We need to prove that $\forall a, b, c, d \in G: \paren {a * b} * \paren {c * d} = \paren {a * c} * \paren {b * d}$.
So:














\(\ds \paren {a * b} * \paren {c * d}\)

\(=\)







\(\ds \paren {a \circ b^{-1} } \circ \paren {c \circ d^{-1} }^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {a \circ b^{-1} } \circ \paren {\paren {d^{-1} }^{-1} \circ c^{-1} }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \paren {a \circ b^{-1} } \circ \paren {d \circ c^{-1} }\)





Inverse of Group Inverse














\(\ds \)

\(=\)







\(\ds \paren {a \circ c^{-1} } \circ \paren {d \circ b^{-1} }\)





Definition of Abelian Group














\(\ds \)

\(=\)







\(\ds \paren {a \circ c^{-1} } \circ \paren {\paren {d^{-1} }^{-1} \circ b^{-1} }\)





Inverse of Group Inverse














\(\ds \)

\(=\)







\(\ds \paren {a \circ c^{-1} } \circ \paren {b \circ d^{-1} }^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \paren {a * c} * \paren {b * d}\)





Definition of $*$



$\blacksquare$


Also presented as
This is usually presented in the form:
Let the operation $-$ be defined on $\struct {G, +}$ such that:

$\forall x, y \in G: x - y = x + \paren {-y}$

Then $\struct {G, -}$ is an entropic structure.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.12 \ \text{(b)}$





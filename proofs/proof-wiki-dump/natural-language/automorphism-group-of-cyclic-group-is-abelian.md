# 

Source: https://proofwiki.org/wiki/Automorphism_Group_of_Cyclic_Group_is_Abelian

Theorem
Let $G$ be a cyclic group.
Let $\Aut G$ denote the automorphism group of $G$.

Then $\Aut G$ is abelian.


Proof
Let $G = \gen g$
Let $\phi, \psi \in \Aut G$.
As $G$ is cyclic:










\(\ds \exists a \in \Z: \, \)



\(\ds \map \phi g\)

\(=\)







\(\ds g^a\)
















\(\ds \exists b \in \Z: \, \)



\(\ds \map \psi g\)

\(=\)







\(\ds g^b\)









Thus:














\(\ds \map {\phi \circ \psi} g\)

\(=\)







\(\ds \paren {g^a}^b\)




















\(\ds \)

\(=\)







\(\ds g^{a b}\)




















\(\ds \)

\(=\)







\(\ds g^{b a}\)




















\(\ds \)

\(=\)







\(\ds \paren {g^b}^a\)




















\(\ds \)

\(=\)







\(\ds \map {\psi \circ \phi} g\)










Thus in particular, $\phi \circ \psi$ and $\psi \circ \phi$ are equal on the generator $g$.
Since $g$ generates $G$, they must be equal as automorphisms.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $27$





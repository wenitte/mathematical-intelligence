# 

Source: https://proofwiki.org/wiki/Permutation_Representation_defines_Group_Action

Theorem
Let $G$ be a group whose identity is $e$.
Let $X$ be a set.
Let $\map \Gamma X$ be the symmetric group of $X$.
Let $\rho: G \to \map \Gamma X$ be a permutation representation, that is, a homomorphism.

The mapping $\phi: G \times X \to X$ associated to $\rho$, defined by:

$\map \phi {g, x} = \map {\map \rho g} x$
is a group action.


Proof
Let $g, h \in G$ and $x \in X$.
We verify that $g * \paren {h * x} = \paren {g h} * x$:














\(\ds g * \paren {h * x}\)

\(=\)







\(\ds \map {\map \rho g} {\map {\map \rho h} x}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map {\paren {\map \rho g \circ \map \rho h} } x\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\map \rho {g h} } x\)





$\rho$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \paren {g h} * x\)





Definition of $\phi$




We verify that $e * x = x$.
Let $I_X$ denote the identity mapping on $X$.














\(\ds e*x\)

\(=\)







\(\ds \map {\map \rho e} x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map {I_X} x\)





Group Homomorphism Preserves Identity, Set of all Self-Maps under Composition forms Monoid














\(\ds \)

\(=\)







\(\ds x\)





Definition of Identity Mapping



$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions





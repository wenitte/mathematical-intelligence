# 

Source: https://proofwiki.org/wiki/Group_Action_defines_Permutation_Representation

Theorem
Let $\map \Gamma X$ be the set of permutations on a set $X$.
Let $G$ be a group.
Let $\phi: G \times X \to X$ be a group action.
For $g \in G$, let $\phi_g: X \to X$ be the mapping defined as:

$\map {\phi_g} x = \map \phi {g, x}$
Let $\tilde \phi: G \to \map \Gamma X$ be the permutation representation associated to $\phi$, defined by:

$\map {\tilde \phi} g := \phi_g$

Then $\tilde \phi$ is a group homomorphism.


Proof
From Group Action determines Bijection:

$\phi_g \in \map \Gamma X$
for $g \in G$.
Let $g, h \in G$.

Recall the definition of Group Action:

$\forall \tuple {g, x} \in G \times X: \map \phi {g, x} \in X = g \wedge x \in X$
First we show that for all $x \in X$:

$\map {\phi_g \circ \phi_h} x = \map {\phi_{g h} } x$

Thus:














\(\ds \map {\phi_g \circ \phi_h} x\)

\(=\)







\(\ds g \wedge \paren {h \wedge x}\)





Definition of $\phi_g$, $\phi_h$














\(\ds \)

\(=\)







\(\ds \paren {g h} \wedge x\)





Definition of Group Action














\(\ds \)

\(=\)







\(\ds \map {\phi_{g h} } x\)





Definition of $\phi_{g h}$




Also, we have:

$e \wedge x = x \implies \map {\phi_e} x = x$
where $e$ is the identity of $G$.

Therefore, we have shown that $\tilde \phi: G \to \map \Gamma X: g \mapsto \phi_g$ is a group homomorphism.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions





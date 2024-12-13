# 

Source: https://proofwiki.org/wiki/Inner_Automorphisms_form_Normal_Subgroup_of_Automorphism_Group

Theorem
Let $G$ be a group.

Then the set $\Inn G$ of all inner automorphisms of $G$ is a normal subgroup of the automorphism group $\Aut G$ of $G$:

$\Inn G \lhd \Aut G$


Proof
Let $G$ be a group whose identity is $e$.
From Inner Automorphisms form Subgroup of Automorphism Group, $\Inn G$ forms a subgroup of $\Aut G$.
It remains to be shown that $\Inn G$ is normal in $\Aut G$.

Let $\kappa_x: G \to G$ be the inner automorphism defined as:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$

Let $\phi \in \Aut G$.
If we can show that:

$\forall \phi \in \Aut G: \forall \kappa_x \in \Inn G: \phi \circ \kappa_x \circ \phi^{-1} \in \Inn G$
then by the Normal Subgroup Test:

$\Inn G \lhd \Aut G$
Fix $\kappa_x \in \Inn G$.
We claim $\phi \circ \kappa_x \circ \phi^{-1} = \kappa_{\map \phi x}$.
Since $\phi \in \Aut G$ then $\phi$ is, in particular, a homomorphism.
Therefore:










\(\ds \forall g \in G: \, \)



\(\ds \map {\paren {\phi \circ \kappa_x \circ \phi^{-1} } } g\)

\(=\)







\(\ds \map {\paren {\phi \circ \kappa_x} } {\map {\phi^{-1} } g}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x \phi^{-1} \paren g x^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \map \phi {\map {\phi^{-1} } g} \map \phi {x^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi x g \map \phi x^{-1}\)




















\(\ds \)

\(=\)







\(\ds \map {\kappa_{\map \phi x} } g\)









Therefore:

$\phi \circ \kappa_g \circ \phi^{-1} = \kappa_{\map \phi g} \in \Inn G$
Since $\kappa_x \in \Inn G$ and $\phi \in \Aut G$ were arbitrary:

$\Inn G \lhd \Aut G$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $3$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.8 \ \text{(b)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \alpha$





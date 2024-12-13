# 

Source: https://proofwiki.org/wiki/Inner_Automorphism_Maps_Subgroup_to_Itself_iff_Normal



Theorem
Let $G$ be a group.
For $x \in G$, let $\kappa_x$ denote the inner automorphism of $x$ in $G$.
Let $H$ be a subgroup of $G$.

Then:

$\forall x \in G: \kappa_x \sqbrk H = H$
if and only if:

$H$ is a normal subgroup of $G$.


Proof
Sufficient Condition
Let $H$ be a normal subgroup of $G$.
Let $x \in G$ be arbitrary.
By definition, $\kappa_x: G \to G$ is a mapping defined as:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$
Let $n \in N$.
Then:














\(\ds \map {\kappa_x} n\)

\(=\)







\(\ds x n x^{-1}\)




















\(\ds \)

\(\in\)







\(\ds N\)





Definition of Normal Subgroup



$\Box$


Necessary Condition
Suppose that:

$\forall x \in G: \kappa_x \sqbrk H = H$

Let $x \in G$ be arbitrary.
By definition of inner automorphism of $x$ in $G$:

$\forall h \in H: x h x^{-1} \in H$

So, by definition, $H$ is a normal subgroup of $G$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.10$





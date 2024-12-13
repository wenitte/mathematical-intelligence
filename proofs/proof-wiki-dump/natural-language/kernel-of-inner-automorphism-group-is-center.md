# 

Source: https://proofwiki.org/wiki/Kernel_of_Inner_Automorphism_Group_is_Center

Theorem
Let the mapping $\kappa: G \to \Inn G$ from a group $G$ to its inner automorphism group $\Inn G$ be defined as:

$\map \kappa a = \kappa_a$
where $\kappa_a$ is the inner automorphism of $G$ given by $a$.

Then $\kappa$ is a group epimorphism, and its kernel is the center of $G$:

$\map \ker \kappa = \map Z G$


Proof
Let $\kappa: G \to \Aut G$ be a mapping defined by $\map \kappa x = \kappa_x$.
It is clear that $\Img \kappa = \Inn G$.
It is also clear that $\kappa$ is a homomorphism:














\(\ds \map \kappa x \map \kappa y\)

\(=\)







\(\ds \kappa_x \circ \kappa_y\)




















\(\ds \)

\(=\)







\(\ds \kappa_{x y}\)





Inner Automorphism is Automorphism














\(\ds \)

\(=\)







\(\ds \map \kappa {x y}\)










Note that $\forall \kappa_x \in \Inn G: \exists x \in G: \map \kappa x = \kappa_x$.
Thus $\kappa: G \to \Inn G$ is a surjection and therefore an group epimorphism.

Now we investigate the kernel of $\kappa$:














\(\ds \map \ker \kappa\)

\(=\)







\(\ds \set {x \in G: \kappa_x = I_G}\)





Definition of Kernel of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \set {x \in G: \forall g \in G: \map {\kappa_x} g = \map {I_G} g}\)





Equality of Mappings














\(\ds \)

\(=\)







\(\ds \set {x \in G: \forall g \in G: x g x^{-1} = g}\)





Definition of $\kappa_x$














\(\ds \)

\(=\)







\(\ds \set {x \in G: \forall g \in G: x g = g x}\)




















\(\ds \)

\(=\)







\(\ds \map Z G\)





Definition of Center of Group




So the kernel of $\kappa$ is the center of $G$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $10$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.11 \ \text{(b)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{AA}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $25$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Proposition $8.17$





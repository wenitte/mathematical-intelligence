# 

Source: https://proofwiki.org/wiki/Kernel_of_First_Projection_on_Group_Direct_Product_is_Isomorphic_to_Second_Factor

Theorem
Let $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$ be groups.
Let $\struct {G, \circ}$ be the group direct product of $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$.
Let $\pr_1$ denote the first projection of $\struct {G, \circ}$:

$\forall \tuple {x, y} \in G: \map \phi {x, y} = x$

Then the kernel of $\pr_1$ is isomorphic to $\struct {G_2, \circ_2}$.


Proof
It is established in Projection on Group Direct Product is Epimorphism that $\pr_1$ is an epimorphism and so a homomorphism.
The kernel of $\pr_1$ is, by definition:














\(\ds \map \ker {\pr_1}\)

\(=\)







\(\ds \set {\tuple {x, y} \in G: \map \phi {x, y} = e_1}\)





where $e_1$ is the identity of $\struct {G_1, \circ_1}$














\(\ds \)

\(=\)







\(\ds \set {\tuple {x, y} \in G: x = e_1}\)





Definition of $\pr_1$














\(\ds \)

\(=\)







\(\ds \set {\tuple {e_1, y}: y \in G_2}\)





Definition of $\pr_1$



Let $H := \set {\tuple {e_1, y}: y \in G_2}$.
It is to be established that $\struct {H, \circ}$ is isomorphic to $\struct {G_2, \circ_2}$.
Let $\theta: H \to G_2$ be defined as:

$\forall \tuple {e_1, y} \in H: \map \theta {e_1, y} = y$
We have that $\theta$ is the second projection on $H$, and so itself an epimorphism, and so surjective.
Then:














\(\ds \map \theta {e_1, y_a}\)

\(=\)







\(\ds \map \theta {e_1, y_b}\)





for $y_a, y_b \in G_2$








\(\ds \leadsto \ \ \)





\(\ds y_a\)

\(=\)







\(\ds y_b\)





Definition of $\theta$








\(\ds \leadsto \ \ \)





\(\ds \tuple {e_1, y_a}\)

\(=\)







\(\ds \tuple {e_1, y_b}\)









demonstrating that $\theta$ is an injection.
So $\theta$ is a homomorphism which is both surjective and injective.
Therefore $\theta$ is an isomorphism from $\map \ker {\pr_1}$ to $\struct {G_2, \circ_2}$.
Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): $\text{II}$: Direct Products
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $5$





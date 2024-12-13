# 

Source: https://proofwiki.org/wiki/Kernel_of_Ring_Homomorphism_is_Subring

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.

Then the kernel of $\phi$ is a subring of $R_1$.


Proof
From Ring Homomorphism of Addition is Group Homomorphism and Kernel of Group Homomorphism is Subgroup:

$\struct {\map \ker \phi, +_1} \le \struct {R_1, +_1}$
where $\le$ denotes subgroup.

Let $x, y \in \map \ker \phi$.














\(\ds \map \phi {x \circ_1 y}\)

\(=\)







\(\ds \map \phi x \circ_2 \map \phi y\)





Morphism Property














\(\ds \)

\(=\)







\(\ds 0_{R_2} \circ_2 0_{R_2}\)





Definition of Kernel














\(\ds \)

\(=\)







\(\ds 0_{R_2}\)










Thus $x \circ_1 y \in \map \ker \phi$.

Thus the conditions for Subring Test are fulfilled, and $\map \ker \phi$ is a subring of $R_1$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 57.3$ Ring homomorphisms: $\text{(ii)}$





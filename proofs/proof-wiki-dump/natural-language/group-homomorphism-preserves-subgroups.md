# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Subgroups

Theorem
Let $\struct {G_1, \circ}$ and $\struct {G_2, *}$ be groups.
Let $\phi: \struct {G_1, \circ} \to \struct {G_2, *}$ be a group homomorphism. 

Then:

$H \le G_1 \implies \phi \sqbrk H \le G_2$
where:

$\phi \sqbrk H$ denotes the image of $H$ under $\phi$
$\le$ denotes subgroup.

That is, group homomorphism preserves subgroups.


Proof
Let $H \le G_1$.
First note that from Null Relation is Mapping iff Domain is Empty Set:

$H \ne \O \implies \phi \sqbrk H \ne \O$
and so $\phi \sqbrk H$ is not empty.

Next, let $x, y \in \phi \sqbrk H$.
Then:

$\exists h_1, h_2 \in H: x = \map \phi {h_1}, y = \map \phi {h_2}$
From the definition of Group Homomorphism, we have:

$\map \phi {h_1^{-1} \circ h_2} = x^{-1} * y$
Since $H$ is a subgroup:

$h_1^{-1} \circ h_2 \in H$
Hence:

$x^{-1} * y \in \phi \sqbrk H$

Thus from the One-Step Subgroup Test:

$\phi \sqbrk H \le G_2$
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.3$ Homomorphisms and their elementary properties





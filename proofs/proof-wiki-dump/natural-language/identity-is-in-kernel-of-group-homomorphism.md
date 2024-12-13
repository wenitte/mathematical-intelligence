# 

Source: https://proofwiki.org/wiki/Identity_is_in_Kernel_of_Group_Homomorphism

Theorem
Let $G$ and $H$ be groups.
Let $e_G$ and $e_H$ be the identity elements of $G$ and $H$ respectively.
Let $\phi: G \to H$ be a (group) homomorphism from $G$ to $H$.

Then:

$e_G \in \map \ker \phi$
where $\map \ker \phi$ is the kernel of $\phi$.


Proof
From the definition of kernel:

$\map \ker \phi = \set {x \in G: \map \phi x = e_H}$
From Group Homomorphism Preserves Identity we have that:

$\map \phi {e_G} = e_H$
Hence the result.
$\blacksquare$


Proof
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 65$





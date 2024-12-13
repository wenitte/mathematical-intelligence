# 

Source: https://proofwiki.org/wiki/Kernel_is_Normal_Subgroup_of_Domain



Theorem
Let $\phi$ be a group homomorphism.
Then the kernel of $\phi$ is a normal subgroup of the domain of $\phi$:

$\map \ker \phi \lhd \Dom \phi$


Proof
Let $\phi: G_1 \to G_2$ be a group homomorphism, where the identities of $G_1$ and $G_2$ are $e_{G_1}$ and $e_{G_2}$ respectively.

By Kernel of Group Homomorphism is Subgroup:

$\map \ker \phi \le \Dom \phi$

Let $k \in \map \ker \phi, x \in G_1$.
Then:














\(\ds \map \phi {x k x^{-1} }\)

\(=\)







\(\ds \map \phi x \map \phi k \paren {\map \phi x}^{-1}\)





Homomorphism to Group Preserves Inverses














\(\ds \)

\(=\)







\(\ds \map \phi x e_{G_2} \paren {\map \phi x}^{-1}\)





Definition of Kernel of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi x \paren {\map \phi x}^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds e_{G_2}\)





Definition of Inverse Element



So:

$x k x^{-1} \in \map \ker \phi$

This is true for all $k \in \map \ker \phi$ and $x \in G_1$.
From Subgroup is Normal iff Contains Conjugate Elements, it follows that $\map \ker \phi$ is a normal subgroup of $G_1$.
$\blacksquare$


Also see
Definition:Quotient Group Epimorphism


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Algebraic Concepts
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.6$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $22 \ (1)$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 65$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 7$: Homomorphisms and quotient algebras
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 49.4$ Normal subgroups
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Theorem $8.13: \ (1)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): kernel
2002: John B. Fraleigh: A First Course in Abstract Algebra (7th ed.): Chapter $13$: Corollary $13.20$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): kernel





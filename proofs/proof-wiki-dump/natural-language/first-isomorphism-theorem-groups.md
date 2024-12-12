# 

Source: https://proofwiki.org/wiki/First_Isomorphism_Theorem/Groups



Theorem
Let $\phi: G_1 \to G_2$ be a group homomorphism.
Let $\map \ker \phi$ be the kernel of $\phi$.

Then:

$\Img \phi \cong G_1 / \map \ker \phi$
where $\cong$ denotes group isomorphism.


Proof
Let $K = \map \ker \phi$.
By Kernel is Normal Subgroup of Domain, $G_1 / K$ exists.
We need to establish that the mapping $\theta: G_1 / K \to G_2$ defined as:

$\forall x \in G_1: \map \theta {x K} = \map \phi x$
is well-defined.
That is, we need to ensure that:

$\forall x, y \in G_1: x K = y K \implies \map \theta {x K} = \map \theta {y K}$

Let $x, y \in G_1: x K = y K$.
Then:














\(\ds x K\)

\(=\)







\(\ds y K\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x^{-1} y\)

\(\in\)







\(\ds K = \map \ker \phi\)





Left Cosets are Equal iff Product with Inverse in Subgroup‎








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi {x^{-1} y}\)

\(=\)







\(\ds e_{G_2}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\map \phi x}^{-1} \map \phi y\)

\(=\)







\(\ds e_{G_2}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)









Thus we see that $\theta$ is well-defined.

Since we also have that:

$\map \phi x = \map \phi y \implies x K = y K$
it follows that:

$\map \theta {x K} = \map \theta {y K} \implies x K = y K$
So $\theta$ is injective.

We also note that:

$\Img \theta = \set {\map \theta {x K}: x \in G}$
So:














\(\ds \Img \theta\)

\(=\)







\(\ds \set {\map \theta {x K}: x \in G}\)




















\(\ds \)

\(=\)







\(\ds \set {\map \phi x: x \in G}\)




















\(\ds \)

\(=\)







\(\ds \Img \phi\)










We also note that $\theta$ is a homomorphism:










\(\ds \forall x, y \in G: \, \)



\(\ds \)

\(\)







\(\ds \map \theta {x K y K}\)




















\(\ds \)

\(=\)







\(\ds \map \theta {x y K}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x y}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \map \phi y\)




















\(\ds \)

\(=\)







\(\ds \map \theta {x K} \map \theta {y K}\)










Thus $\theta$ is a monomorphism whose image equals $\Img \phi$.
The result follows.
$\blacksquare$


Also known as
Some sources call this the homomorphism theorem.
Others combine this result with Group Homomorphism Preserves Subgroups, Kernel of Group Homomorphism is Subgroup and Kernel is Normal Subgroup of Domain.
Still others do not assign a special name to this theorem at all.


Also see
Isomorphism Theorems


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image: The Homomorphism Theorem
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $24$: Corollary
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 66$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 52.1$ The first isomorphism theorem
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Theorem $8.13: \ (3)$





# 

Source: https://proofwiki.org/wiki/Double_Orthocomplement_of_Closed_Linear_Subspace

Theorem
Let $H$ be a Hilbert space.
Let $A \subseteq H$ be a closed linear subspace of $H$.

Then:

$\paren {A^\perp}^\perp = A$


Proof

This article needs to be linked to other articles.In particular: identity operatorYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $I : H \to H$ be the identity operator (viz., $I h = h$).
Also, let $P : H \to A$ be the orthogonal projection.
Then $I - P : H \to A^\perp$ is the Orthogonal Projection onto Orthocomplement.
By Kernel of Orthogonal Projection:

$\map \ker {I - P} = \paren {A^\perp}^\perp$
$\Box$

From Orthogonal Projection is Projection:

$h \in P \sqbrk H \implies h = P h$
where $P \sqbrk H$ denotes the image of $H$ under $P$.
Also:

$0 = \paren {I - P} h \iff h = P h$
Therefore,:

$\map \ker {I - P} = P \sqbrk H$
$\Box$

Finally, from Range of Orthogonal Projection:

$P \sqbrk H = A$
$\Box$

To conclude:

$\paren {A^\perp}^\perp = \map \ker {I - P} = P \sqbrk H = A$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Corollary $2.9$





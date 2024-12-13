# 

Source: https://proofwiki.org/wiki/Orthogonal_Projection_onto_Orthocomplement

Theorem
Let $H$ be a Hilbert space.
Let $A$ be a closed linear subspace of $H$.
Let $P_A: H \to H$ be the orthogonal projection onto $A$.
Let $P_{A^\perp}: H \to H$ be the orthogonal projection onto $A^\perp$, the orthocomplement of $A$.
Let $I: H \to H$ be the identity operator on $H$.

Then:

$P_{A^\perp} = I - P_A$



This article, or a section of it, needs explaining.In particular: $I - P_A$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Let $h \in H$.
By definition of orthogonal projection, $P_A h = a \in A$ such that $h - a \in A^\perp$.
Then the claim is that for all $h \in H$:

$\paren {I - P_A } h = h - P_A h$
is in $A^\perp$, and:

$h - \paren {h - P_A h} \in \paren {A^\perp}^\perp$

That $h - P_A h \in A^\perp$ is part of the definition of $P_A$.
For the other criterion, note:

$h - \paren {h - P_A h} = P_A h \in A$
By Double Orthocomplement is Closed Linear Span: Corollary:

$\paren{ A^\perp }^\perp = A$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Exercise $2$





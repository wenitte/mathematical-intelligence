# 

Source: https://proofwiki.org/wiki/Double_Orthocomplement_is_Closed_Linear_Span

  This article is a landmark page.  It was the 4500th proof on $\mathsf{Pr} \infty \mathsf{fWiki}$!


Theorem
Let $H$ be a Hilbert space.
Let $A \subseteq H$ be a subset of $H$.

Then the following identity holds:

$\paren {A^\perp}^\perp = \vee A$
Here $A^\perp$ denotes orthocomplementation, and $\vee A$ denotes the closed linear span.


Corollary
Let $A \subseteq H$ be a closed linear subspace of $H$.

Then:

$\paren {A^\perp}^\perp = A$


Proof
From Orthocomplement is Closed Linear Subspace:

$\paren {A^\perp}^\perp$ is a closed linear subspace of $H$.
Also:

$\paren {A^\perp}^\perp \supseteq A$
Indeed, for each $a \in A$, we have:

$\forall a' \in A^\perp : \innerprod a {a'} = 0$
by definition of $A^\perp$.
This also means that:

$a \in \paren{A^\perp}^\perp$
by definition of $\paren{A^\perp}^\perp$.
Hence:

$\vee A \subseteq \paren{A^\perp}^\perp$
$\Box$

For the converse direction, note:

$A \subseteq \vee A$
Now apply Orthocomplement Reverses Subset twice:

$\paren {A^\perp}^\perp \subseteq \paren {\paren {\vee A}^\perp}^\perp$
By Double Orthocomplement of Closed Linear Subspace:

$\paren{A^\perp}^\perp \subseteq \vee A$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Corollary $2.10$





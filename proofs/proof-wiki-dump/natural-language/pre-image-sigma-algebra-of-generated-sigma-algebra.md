# 

Source: https://proofwiki.org/wiki/Pre-Image_Sigma-Algebra_of_Generated_Sigma-Algebra

Theorem
Let $f: X \to Y$ be a mapping.
Let $\GG \subseteq \powerset Y$ be a collection of subsets of $Y$.

Then the following equality of $\sigma$-algebras on $X$ holds:

$f^{-1} \sqbrk {\map \sigma \GG} = \map \sigma {f^{-1} \sqbrk \GG}$
where

$\sigma$ denotes a generated $\sigma$-algebra
$f^{-1} \sqbrk {\map \sigma \GG}$ denotes the pre-image $\sigma$-algebra
$f^{-1} \sqbrk \GG$ is the preimage of $\GG$ under $f$


Proof
Since $\GG \subseteq \map \sigma \GG$, it follows immediately that:

$f^{-1} \sqbrk \GG \subseteq f^{-1} \sqbrk {\map \sigma \GG}$
By Pre-Image Sigma-Algebra on Domain is Sigma-Algebra, the latter is a $\sigma$-algebra, and so by Generated Sigma-Algebra Preserves Subset, it follows that:

$\map \sigma {f^{-1} \sqbrk \GG} \subseteq f^{-1} \sqbrk {\map \sigma \GG}$

Conversely, by definition of generated $\sigma$-algebra, we have:

$f^{-1} \sqbrk \GG \subseteq \map \sigma {f^{-1} \sqbrk \GG}$
Hence from Mapping Measurable iff Measurable on Generator, it follows that $f$ is $\map \sigma {f^{-1} \sqbrk \GG} \, / \, \map \sigma \GG$-measurable.
But this by definition of measurable mapping means that:

$f^{-1} \sqbrk {\map \sigma \GG} \subseteq \map \sigma {f^{-1} \sqbrk \GG}$

Hence the result, by definition of set equality.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $8$





# 

Source: https://proofwiki.org/wiki/Ordinal_is_Proper_Subset_of_Successor

Theorem
Let $\alpha$ be an ordinal.
Then:

$\alpha \subsetneqq \alpha^+$
where $\alpha^+$ denotes the successor set of $\alpha$.

That is:

$\alpha$ is a proper subset of $\alpha^+$.


Proof
Aiming for a contradiction, suppose $\alpha = \alpha^+$.
By definition:

$\alpha^+ = \alpha \cup \set \alpha$
and so:

$\alpha \subseteq \alpha^+$
and:

$\alpha \in \alpha^+$
which leads to:

$\alpha \in \alpha$
But from Ordinal is not Element of Itself:

$\alpha \notin \alpha$
Hence by Proof by Contradiction:

$\alpha \ne \alpha^+$
But we have:

$\alpha \subseteq \alpha^+$
Hence:

$\alpha \subsetneqq \alpha^+$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 1$ Ordinal numbers: Corollary $1.9$





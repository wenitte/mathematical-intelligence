# 

Source: https://proofwiki.org/wiki/Natural_Number_Ordering_is_Preserved_by_Successor_Mapping

Theorem
Let $\N$ be the natural numbers.
Let $m, n \in \N$.
Then:

$n \le m \implies n^+ \le m^+$


Proof
Let $\N$ be defined as the von Neumann construction $\omega$.
By definition of the ordering on von Neumann construction:

$m \le n \iff m \subseteq n$
From Von Neumann Construction of Natural Numbers is Minimally Inductive, $\omega$ is minimally inductive class under the successor mapping.
From Successor Mapping on Natural Numbers is Progressing, this successor mapping is a progressing mapping.
From Characteristics of Minimally Inductive Class under Progressing Mapping: Mapping Preserves Subsets:

$\forall m, n \in \omega: m \subseteq n \implies m^+ \subseteq n^+$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 5$ Applications to natural numbers: Theorem $5.3 \ (3)$





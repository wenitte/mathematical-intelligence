# 

Source: https://proofwiki.org/wiki/Natural_Number_m_is_Less_than_n_implies_n_is_not_Greater_than_Successor_of_n

Theorem
Let $\N$ be the natural numbers.
Let $m, n \in \N$.
Then:

$m < n \implies m + 1 \le n$


Proof using Naturally Ordered Semigroup
Let $\N$ be considered as the naturally ordered semigroup:

$\struct {\N, +, \le}$
The result follows from Sum with One is Immediate Successor in Naturally Ordered Semigroup.


Proof using Von Neumann Construction
Let $\N$ be defined as the von Neumann construction $\omega$.
By definition of the ordering on von Neumann construction:

$m \le n \iff m \subseteq n$
From Von Neumann Construction of Natural Numbers is Minimally Inductive, $\omega$ is minimally inductive class under the successor mapping.
The result is then a direct application of Characteristics of Minimally Inductive Class under Progressing Mapping: Image of Proper Subset is Subset:

$m \subset n \implies m^+ \subseteq n$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/No_Natural_Number_between_Number_and_Successor/Proof_using_Von_Neumann_Construction

Theorem
Let $\N$ be the natural numbers.
Let $n \in \N$.
Then no natural number $m$ exists strictly between $n$ and its successor $n + 1$:

$\neg \exists m \in \N: \paren {n < m < n + 1}$

That is:

If $n \le m \le n + 1$, then $m = n$ or $m = n + 1$.


Proof
Let $\N$ be defined as the von Neumann construction $\omega$.
By definition of the ordering on von Neumann construction:

$m \le n \iff m \subseteq n$
From Von Neumann Construction of Natural Numbers is Minimally Inductive, $\omega$ is minimally inductive class under the successor mapping.

The result follows from the Sandwich Principle:

$\forall m, n \in \omega: m \subseteq n \subseteq m^+ \implies m = n \lor n = m^+$
where $m^+$ is identified as $m + 1$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 5$ Applications to natural numbers: Theorem $5.3 \ (1)$





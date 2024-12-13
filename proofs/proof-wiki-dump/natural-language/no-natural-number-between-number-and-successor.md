# 

Source: https://proofwiki.org/wiki/No_Natural_Number_between_Number_and_Successor

Theorem
Let $\N$ be the natural numbers.
Let $n \in \N$.
Then no natural number $m$ exists strictly between $n$ and its successor $n + 1$:

$\neg \exists m \in \N: \paren {n < m < n + 1}$

That is:

If $n \le m \le n + 1$, then $m = n$ or $m = n + 1$.


Proof using Minimally Inductive Set
We use the model that $\N \cong \omega$ where $\omega$ is the minimally inductive set.
Aiming for a contradiction, suppose such an ordinal $m$ exists.

Then, by Ordering on Ordinal is Subset Relation:

$n \in m$
and from Transitive Set is Proper Subset of Ordinal iff Element of Ordinal:

$m \in n^+$

Applying the definition of a successor set, we have:

$n \in m \lor n = m$
But this creates a membership loop, in that:

$m \in n \in m \lor m \in m$

By No Membership Loops, we have created a contradiction.
The result follows from Proof by Contradiction.
$\blacksquare$


Proof using Von Neumann Construction
Let $\N$ be defined as the von Neumann construction $\omega$.
By definition of the ordering on von Neumann construction:

$m \le n \iff m \subseteq n$
From Von Neumann Construction of Natural Numbers is Minimally Inductive, $\omega$ is minimally inductive class under the successor mapping.

The result follows from the Sandwich Principle:

$\forall m, n \in \omega: m \subseteq n \subseteq m^+ \implies m = n \lor n = m^+$
where $m^+$ is identified as $m + 1$.
$\blacksquare$






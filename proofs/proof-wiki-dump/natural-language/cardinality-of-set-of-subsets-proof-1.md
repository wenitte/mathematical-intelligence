# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Subsets/Proof_1

Theorem
Let $S$ be a set such that $\card S = n$.
Let $m \le n$.

Then the number of subsets $T$ of $S$ such that $\card T = m$ is:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m}!}$


Proof
For each $X \subseteq \N_n$ and $Y \subseteq S$, let $\map B {X, Y}$ be the set of all bijections from $X$ onto $Y$.
Let $\Bbb S$ be the set of all subsets of $S$ with $m$ elements.
By Cardinality of Power Set of Finite Set and Cardinality of Subset of Finite Set, $\Bbb S$ is finite, so let $s = \card {\Bbb S}$.
Let $\beta: \map B {\N_n, S} \to \Bbb S$ be the mapping defined as:

$\forall f \in \map B {\N_n, S}: \map \beta f = \map f {\N_m}$

For each $Y \in \Bbb S$, the mapping:

$\Phi_Y: \map {\beta^{-1} } Y \to \map B {\N_m, Y} \times \map B {\N_n - \N_m, S - Y}$
defined as:

$\map {\Phi_Y} f = \tuple {f_{\N_m}, f_{\N_n - \N_m} }$
is also (clearly) a bijection.

By Cardinality of Set of Bijections:

$\card {\map B {\N_m, Y} } = m!$
and:

$\card {\map B {\N_n - \N_m, S - Y} } = \paren {n - m}!$
So by Cardinality of Cartesian Product of Finite Sets:

$\card {\map {\beta^{-1} } Y} = m! \paren {n - m}!$
It is clear that $\set {\map {\beta^{-1} } Y: Y \in \Bbb S}$ is a partition of $\map B {\N_n, S}$.
Therefore by Number of Elements in Partition:

$\card {\map B {\N_n, S} } = m! \paren {n - m}! s$
Consequently, as $\card {\map B {\N_n, S} } = n!$ by Cardinality of Set of Bijections, it follows that:

$m! \paren {n - m}! s = n!$
and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.8$





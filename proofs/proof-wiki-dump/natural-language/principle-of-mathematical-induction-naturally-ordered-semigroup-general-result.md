# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Naturally_Ordered_Semigroup/General_Result

Theorem
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
Let $p \in S$.

Let $T \subseteq S$ such that:

$x \in T \implies p \preceq x \land \paren {x \in T \implies x \circ 1 \in T}$

Then:

$S \setminus S_p \subseteq T$
where:

$\setminus$ denotes set difference
$S_p$ denotes the set of all elements of $S$ preceding $p$.


Proof
Let $S_p$ be the set of all elements of $S$ preceding $p$:

$S_p = \set {x \in S: x \prec p}$
Let $T' = T \cup S_p$.
Then the set $T'$ satisfies the conditions of the Principle of Mathematical Induction for a Naturally Ordered Semigroup.
From that result:

$T' = S$
By Set Difference with Union is Set Difference:

$S \setminus S_p = T \setminus S_p$
By Set Difference is Subset:

$T \setminus S_p \subseteq T$
completing the proof.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Corollary $16.5.1$





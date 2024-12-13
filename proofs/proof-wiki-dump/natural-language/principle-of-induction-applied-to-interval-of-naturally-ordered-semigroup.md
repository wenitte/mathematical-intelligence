# 

Source: https://proofwiki.org/wiki/Principle_of_Induction_applied_to_Interval_of_Naturally_Ordered_Semigroup

Theorem
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
Let $\closedint p q$ be a closed interval of $\struct {S, \circ, \preceq}$.
Let $T \subseteq \closedint p q$ such that the minimal element of $\closedint p q$ is in $T$.
Let:

$x \in T: x \prec q \implies x \circ 1 \in T$

Then:

$T = \closedint p q$


Proof
Let $T' = T \cup \set {x \in S: q \prec x}$.
Then $T'$ satisfies the conditions of the Principle of Mathematical Induction.
Therefore:

$T' = \set {x \in S: p \preceq x}$
Therefore:

$T = \closedint p q$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Corollary $16.5.2$





# 

Source: https://proofwiki.org/wiki/Restriction_of_Total_Ordering_is_Total_Ordering

Theorem
Let $\struct {S, \preceq}$ be a total ordering.
Let $T \subseteq S$.
Let $\preceq \restriction_T$ be the restriction of $\preceq$ to $T$.

Then $\preceq \restriction_T$ is a total ordering of $T$.


Proof
By Restriction of Ordering is Ordering, $\preceq \restriction_T$ is an ordering.
Let $x, y \in T$.
As $T \subseteq S$ it follows by definition of subset that:

$x, y \in S$
As $\preceq$ is a total ordering:

$\tuple {x, y} \in {\preceq}$
or:

$\tuple {y, x} \in {\preceq}$

Suppose $\tuple {x, y} \in {\preceq}$.
As $x, y \in T$, it follows by definition of cartesian product that:

$\tuple {x, y} \in T \times T$
Thus:

$\tuple {x, y} \in \paren {T \times T} \cap {\preceq}$

By definition of the restriction of $\preceq$ to $T$:

$\paren {T \times T} \cap {\preceq} = {\preceq \restriction_T}$
That is:

$\tuple {x, y} \in {\preceq \restriction_T}$

A similar argument shows that:

$\tuple {y, x} \in {\preceq} \implies \tuple {y, x} \in {\preceq \restriction_T}$

Thus $\preceq \restriction_T$ is a total ordering of $T$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings
1967: Garrett Birkhoff: Lattice Theory (3rd ed.): $\text I.1$: Theorem $1$





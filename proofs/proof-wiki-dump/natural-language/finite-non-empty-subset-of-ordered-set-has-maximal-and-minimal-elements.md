# 

Source: https://proofwiki.org/wiki/Finite_Non-Empty_Subset_of_Ordered_Set_has_Maximal_and_Minimal_Elements



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$ be a finite, non-empty subset of $S$.

Then $T$ has a maximal element and a minimal element.


Corollary
Let $\struct {S, \preceq}$ be a finite ordered set.
Let $x \in S$.

Then there exists a maximal element $M \in S$ and a minimal element $m \in S$ such that:

$m \preceq x \preceq M$


Proof
We will show that each finite subset of $S$ has a minimal element.
The existence of a maximal element then follows from duality.

Proof by induction:
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

Every set with $n$ elements has a minimal element.


Basis for the Induction
Let $T$ have exactly one element $x$.
Since $x \nprec x$ it follows that $x$ is minimal.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

Every set with $k$ elements has a minimal element.

from which it is to be shown that:

Every set with $k + 1$ elements has a minimal element.


Induction Step
Suppose that every subset of $S$ with $k$ elements has a minimal element.
Let $T$ have $k + 1$ elements.
Then:

$T = T_0 \cup \set x$
where $T_0$ has $k$ elements and $x \in T \setminus T_0$.
Then $T_0$ has a minimal element $m_0$.
If $m_0$ is not a minimal element of $T$, then:

$x \prec m_0$
Thus $x$ is a minimal element of $T$.
Thus either $m_0$ or $x$ is a minimal element of $T$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

For every finite, non-empty subset $T$ of $S$, $T$ has a maximal element and a minimal element
The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1967: Garrett Birkhoff: Lattice Theory (3rd ed.): $\S\text I.3$: Theorem $3$





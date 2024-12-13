# 

Source: https://proofwiki.org/wiki/Infimum_of_Infima

Theorem
Let $\left({S, \preceq}\right)$ be an ordered set.
Let $\mathbb T$ be a collection of subsets of $S$.
Suppose all $T \in \mathbb T$ admit an infimum $\inf T$ in $S$.

Then:

$\inf \bigcup \mathbb T = \inf \left\{{\inf T: T \in \mathbb T}\right\}$
as soon as one of these two quantities exists.


Proof
Suppose that $s = \inf \bigcup \mathbb T \in S$.
By Set is Subset of Union, $T \subseteq \bigcup \mathbb T$ for all $T \in \mathbb T$.
Hence by Infimum of Subset:

$\forall T \in \mathbb T: s \preceq \inf T$

Suppose now that $a \in S$ satisfies:

$\forall T \in \mathbb T: a \preceq \inf T$
Then by transitivity of $\preceq$:

$\forall t \in T: a \preceq t$
Since this holds for any $T \in \mathbb T$, also:

$\forall t \in \bigcup \mathbb T: a \preceq t$
Hence $a \preceq s$, by definition of infimum.

That is, $s = \inf \left\{{\inf T: T \in \mathbb T}\right\}$.
$\Box$

Suppose now that $r = \inf \left\{{\inf T: T \in \mathbb T}\right\} \in S$.
By definition of infimum, for all $T \in \mathbb T$ and $t \in T$:

$\inf T \preceq t$
By transitivity of $\preceq$:

$\forall T \in \mathbb T: \forall t \in T: r \preceq t$
Hence for all $t \in \bigcup \mathbb T$:

$r \preceq t$

Suppose that $a \in S$ satisfies:

$\forall t \in \bigcup \mathbb T: a \preceq t$
In particular, for any $T \in \mathbb T$, since $T \subseteq \bigcup \mathbb T$:

$a \preceq \inf T$
and therefore by definition of infimum, also:

$a \preceq r$

That is, $r = \inf \bigcup \mathbb T$.
$\blacksquare$






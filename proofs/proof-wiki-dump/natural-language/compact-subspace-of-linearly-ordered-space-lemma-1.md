# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Linearly_Ordered_Space/Lemma_1

Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.
Let $Y \subseteq X$ be a non-empty subset of $X$.
Let $Y$ be a compact subspace of $\struct {X, \tau}$.

Then $\struct {Y, \preceq \restriction_Y}$ is a complete lattice, where $\restriction$ denotes restriction.


Proof
Aiming for a contradiction, suppose $Y$ is not a complete lattice.
Then there is an $S \subseteq Y$ with no least upper bound in $Y$.
Let $U = \set {b \in Y: b \text { is an upper bound of } S}$.
Note that $U$ may be empty.
Let:

$\UU = \set {u^\succeq: u \in U}$
$\LL = \set {s^\preceq: s \in S}$.
where:

$u^\succeq$ is the upper closure of $u$ in $U$
$s^\preceq$ is the lower closure of $s$ in $S$.
Then $\UU \cup \LL$ covers $Y$:

Let $y \in Y$.
Suppose $y$ is an upper bound for $S$.
Then because $S$ has no least upper bound in $Y$, there exists a $y' \in U$ such that $y' \prec y$.
Thus $y \in y'^\succeq$, so, in the case where $y$ is an upper bound for $S$:

$\ds y \in \bigcup \UU$
Otherwise, that is if $y$ is not  an upper bound for $S$, there exists an $s \in S$ such that $y \prec s$.
Hence in this case:

$\ds y \in \bigcup \LL$

$\UU \cup \LL$ has no finite subcover:
Let $F_U$ and $F_L$ be finite subsets of $U$ and $S$, respectively.
Define:

$\FF_U = \set {u^\succeq: u \in F_S}$
$\FF_L = \set {s^\preceq: s \in F_L}$
We will show that $\FF_U \cup \FF_L$ does not cover $Y$.

Suppose to the contrary that $\FF_U \cup \FF_L$ is a cover for $Y$.
Since $Y$ is non-empty, $F_L$ or $F_U$ is non-empty.
If $F_L$ is non-empty, it has a maximum $m$.
Since $S$ has no least upper bound, it has no maximum
Therefore there is an $s \in S$ such that $m \prec s$.
Thus $\ds s \notin \bigcup \FF_L$.
By the definition of upper bound, no upper bound of $S$ precedes $m$.
So $\ds m \notin \bigcup \FF_U$.
Thus $\FF_L \cup \FF_U$ does not cover $Y$.
This is a contradiction of our supposition that it does.
Hence it cannot be the case that $\FF_U \cup \FF_L$ is a cover for $Y$.

If $F_U$ is non-empty, it has a minimum $m$.
Then since $S$ has no least upper bound in $Y$, there is a $u \in U$ such that $u \prec m$.
Thus $\ds u \notin \bigcup \FF_U$.
But since $u$ is an upper bound of $S$, it is not succeeded by any element of $S$.
So $\ds u \notin \bigcup \FF_L$.
Thus $\FF_L \cup \FF_U$ does not cover $Y$, a contradiction.

So $\UU \cup \LL$ is an open cover of $Y$ with no finite subcover
So $Y$ is not compact, which contradicts the supposition.
By Proof by Contradiction, it follows that $\struct {Y, \preceq \restriction_Y}$ is a complete lattice.
$\blacksquare$






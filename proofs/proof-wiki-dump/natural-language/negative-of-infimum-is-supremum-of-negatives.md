# 

Source: https://proofwiki.org/wiki/Negative_of_Infimum_is_Supremum_of_Negatives



Theorem
Let $T$ be a non-empty subset of the real numbers $\R$.
Let $T$ be bounded below.

Then:

$(1): \quad \set {x \in \R: -x \in T}$ is bounded above
$(2): \quad \ds -\inf_{x \mathop \in T} x = \map {\sup_{x \mathop \in T} } {-x}$
where $\sup$ and $\inf$ denote the supremum and infimum respectively.


Proof
As $T$ is non-empty and bounded below, it follows by the Continuum Property that $T$ admits an infimum.

Let $B = \inf T$.
Let $S = \set {x \in \R: -x \in T}$.
Since $\forall x \in T: x \ge B$ it follows that:

$\forall x \in T: -x \le -B$
Hence $-B$ is an upper bound for $S$, and so $\set {x \in \R: -x \in T}$ is bounded above.

Let $C$ be the supremum of $S$.
Then by definition of supremum:

$C \le -B$
On the other hand:

$\forall y \in S: y \le C$
Therefore:

$\forall y \in S: -y \ge -C$
Since $T = \set {x \in \R: -x \in S}$ it follows that $-C$ is a lower bound for $T$.
Therefore $-C \le B$ and so $C \ge -B$.
So $C \ge -B$ and $C \le -B$ and the result follows.
$\blacksquare$


Also see
Negative of Supremum is Infimum of Negatives


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (3)$





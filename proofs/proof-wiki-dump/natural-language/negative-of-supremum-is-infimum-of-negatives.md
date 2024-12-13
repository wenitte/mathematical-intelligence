# 

Source: https://proofwiki.org/wiki/Negative_of_Supremum_is_Infimum_of_Negatives



Theorem
Let $S$ be a non-empty subset of the real numbers $\R$.
Let $S$ be bounded above.

Then:

$(1): \quad \set {x \in \R: -x \in S}$ is bounded below
$(2): \quad \ds -\sup_{x \mathop \in S} x = \map {\inf_{x \mathop \in S} } {-x}$
where $\sup$ and $\inf$ denote the supremum and infimum respectively.


Proof
As $S$ is non-empty and bounded above, it follows by the Continuum Property that $S$ admits a supremum.

Let $B = \sup S$.
Let $T = \set {x \in \R: -x \in S}$.
By definition, $B$ is an upper bound for $S$.
From Negative of Upper Bound of Set of Real Numbers is Lower Bound of Negatives:

$-B$ is a lower bound for $T$.
Thus $\set {x \in \R: -x \in S}$ is bounded below.

Let $C$ be the infimum of $T$.
Then by definition of infimum:

$C \ge -B$
On the other hand:

$\forall y \in T: y \ge C$
Therefore:

$\forall y \in T: -y \le -C$
Since $S = \set {x \in \R: -x \in T}$ it follows that $-C$ is an upper bound for $S$.
Therefore $-C \ge B$ and so $C \le -B$.
So $C \le -B$ and $C \ge -B$ and the result follows.
$\blacksquare$


Also see
Negative of Infimum is Supremum of Negatives


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (3)$





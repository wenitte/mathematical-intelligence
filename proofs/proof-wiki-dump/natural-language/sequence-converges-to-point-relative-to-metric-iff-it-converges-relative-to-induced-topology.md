# 

Source: https://proofwiki.org/wiki/Sequence_Converges_to_Point_Relative_to_Metric_iff_it_Converges_Relative_to_Induced_Topology



Theorem
Let $M = \struct {S, d}$ be a metric space or a pseudometric space.
Let $T = \struct {S, \tau}$ be the topological space induced by $d$.
Let $\sequence {x_n}$ be a infinite sequence in $S$.
Let $l \in S$.

Then $\sequence {x_n}$ converges to $l$ relative to $d$ if and only if $\sequence {x_n}$ converges to $l$ relative to $\tau$.


Proof
Necessary Condition
Suppose that $\sequence {x_n}$ converges to $l$ relative to $d$.
When $\map {B_\epsilon} l$ denotes the open $\epsilon$-ball of $l$, this means:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies x_n \in \map {B_\epsilon} l$
Let $U \in \tau$ with $l \in U$.
By definition of induced topology, there exists $\epsilon_0 \in \R_{>0}$ such that:

$\map {B_{\epsilon_0} } l \subseteq U$
Then there exists $N_0 \in \R$ such that for all $n > N_0$:

$x_n \in \map {B_{\epsilon_0} } l \subseteq U$
Hence, $\sequence {x_n}$ converges to $l$ in the induced topology $\tau$.
$\Box$


Sufficient Condition
Suppose that $\sequence {x_n}$ converges to $l$ in $\tau$.
Let $\epsilon \in \R_{>0}$.
Then $l \in \map {B_\epsilon} l$, and $\map {B_\epsilon} l \in \tau$.
Then there exists $N \in \N$ such that for all $n > N$, we have $x_n \in \map {B_\epsilon} l$.
Hence, $\sequence {x_n}$ converges to $l$ relative to $d$.
$\blacksquare$






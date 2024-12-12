# 

Source: https://proofwiki.org/wiki/Closure_of_Open_Ball_in_Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\map {B_\epsilon} x$ be an open $\epsilon$-ball in $M$.

Let $y \in \map \cl {\map {B_\epsilon} x}$, where $\cl$ denotes the closure of $\map {B_\epsilon} x$.
Then $\map d {x, y} \le \epsilon$.


Proof
Suppose $\map d {x, y} > \epsilon$.
Then $\map {B_{\map d {x, y} - \epsilon} } y$ is an open set containing $y$ and not meeting $\map {B_\epsilon} x$.
Hence:

$y \notin \map \cl {\map {B_\epsilon} x}$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.23$





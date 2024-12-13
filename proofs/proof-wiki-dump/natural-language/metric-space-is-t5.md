# 

Source: https://proofwiki.org/wiki/Metric_Space_is_T5

Theorem
Let $M = \struct {A, d}$ be a metric space.
Then $M$ is a $T_5$ space.


Proof
Let $S, T \subseteq A$ such that $S$ and $T$ are separated in $A$.
Then:

each point $x \in S$ has an open $\epsilon$-ball $\map {B_{\epsilon_x} } x$ which is disjoint from $T$
each point $y \in T$ has an open $\epsilon$-ball $\map {B_{\epsilon_y} } y$ which is disjoint from $S$.
Then:

$U_S = \ds \bigcup_{x \mathop \in S} \map {B_{\epsilon_x / 2} } x$
$U_T = \ds \bigcup_{y \mathop \in T} \map {B_{\epsilon_y / 2} } y$
are disjoint open neighborhoods of $S$ and $T$ respectively.


This needs considerable tedious hard slog to complete it.In particular: that's cutting the cornerTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence the result by the definition of $T_5$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces





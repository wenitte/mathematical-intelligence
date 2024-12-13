# 

Source: https://proofwiki.org/wiki/Product_Space_is_Path-connected_iff_Factor_Spaces_are_Path-connected



Theorem
Let $\SS = \family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces for $i$ in some indexing set $I$ such that $\forall i \in I: S_i \ne \O$.
Let $\ds T = \struct {S, \tau} = \prod_{i \mathop \in I} \struct {S_i, \tau_i}$ be the product space of $\SS$.

Then $T$ is a path-connected space if and only if each of $\struct {S_i, \tau_i}$ is a path-connected space.


Proof
Necessary Condition
Suppose $S_i$ is path-connected for each $i \in I$. 
Let $x \ne y \in S$ be arbitrary.
Since each $S_i$ is path-connected, we have a continuous mapping:

$f_i: \closedint 0 1 \to S_i$
such that $\map {f_i} 0 = x_i$ and $\map {f_i} 1  = y_i$ for all $i \in I$.

We then define:

$f : \closedint 0 1 \to S$
by setting:

$\forall t \in \closedint 0 1: \map f t_i = \map {f_i} t$
We have that $f_i = \pr_i \circ f$ are all continuous.
So, by Continuous Mapping to Product Space, it follows that $f$ is continuous.

Also:

$\map f 0_i = \map {f_i} 0 = x_i$
and:

$\map f 1_i = \map {f_i} 1 = y_i$
Therefore $\map f 0 = x$ and $\map f 1 = y$.

So there exists a continuous mapping:

$f: \closedint 0 1 \to S$
such that $\map f 0 = x$ and $\map f 1 = y$.
Since $x$ and $y$ were arbitrary, we have shown that $S$ is path-connected.
$\Box$


Sufficient Condition
Conversely, suppose $T$ is a path-connected space.
Let $j$ be an arbitrary $j \in I$.
Let $x_j$ and $y_j$ be points in $S_j$ such that $x_j \ne y_j$.

We have that $\forall i \in I: S_i \ne \O$.
Using the axiom of choice, a choice function can be set up to allow the choice of some $q_i \in S_i$ for each $i \ne j$.
We then define:

$\forall s \in T: \map {\pr_i} s = q_i$
From Constant Mapping is Continuous, it follows that each of $\pr_i: T \to S_i$ where $i \ne j$ is continuous:

Thus there exist points in $x, y \in S$ such that: 

$\map {\pr_i} x = q_i$
$\map {\pr_i} y = q_i$
for all $i \ne j$, and:

$\map {\pr_j} x = x_j$
$\map {\pr_j} y = y_j$

Since $T$ is path-connected, there exists a continuous mapping:

$f: \closedint {0} {1} \to S$
such that $\map f 0 = x$ and $\map f 1 = y$.

By Continuous Mapping to Product Space:

$\pr_j \circ f: \closedint 0 1 \to S_j$
is also continuous.

Furthermore:

$\map {\pr_j \circ f} 0 = \map {\pr_j} x = x_j$
and:

$\map {\pr_j \circ f} 1 = \map {\pr_j} y = y_j$
Thus since $x_j$ and $y_j$ were arbitrary, we have shown that $S_j$ is path-connected.
Since $j$ was arbitrary, we have shown that all $S_i$ are path-connected.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Also see
Finite Product Space is Connected iff Factors are Connected


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.3$: Path-connectedness (in passing)





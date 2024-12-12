# 

Source: https://proofwiki.org/wiki/Finite_Product_Space_is_Connected_iff_Factors_are_Connected



Theorem
Let $T_1 = \struct {S_1, \tau_1}, T_2 = \struct {S_2, \tau_2}, \dotsc, T_n = \struct {S_n, \tau_n}$ be topological spaces.
Let $T = \ds \prod_{i \mathop = 1}^n T_i$ be the product space of $T_1, T_2, \ldots, T_n$.

Then $T$ is connected if and only if each of $T_1, T_2, \ldots, T_n$ are connected.


General Case
Let $I$ be an indexing set.
Let $\family {T_\alpha}_{\alpha \mathop \in I}$ be an indexed family of topological spaces.
Let $T = \ds \prod_{\alpha \mathop \in I} T_\alpha$ be the Cartesian space of $\family {T_\alpha}_{\alpha \mathop \in I}$.
Let $T = \ds \overline {\bigcup_{\alpha \mathop \in I} S_\alpha}$.


This article, or a section of it, needs explaining.In particular: Notation in the above -- explain what the overline means in this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\tau$ be a topology on $T$ such that the subsets ${S'}_\alpha \subseteq \ds \prod T_\alpha$ where ${S'}_\alpha = \set {\family {y_\beta} \in T: y_\beta = x \beta \text { for all } \beta \ge \alpha}$ is homeomorphic to $S_{\alpha - 1} \times T_\alpha$.

Then $T$ is connected if and only if each of $T_\alpha: \alpha \in I$ are connected.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

$T$ is connected if and only if each of $T_1, T_2, \ldots, T_n$ are connected.


Basis for the Induction
$\map P 2$ is the case:

The product space $T_1 \times T_2$ is connected if and only if $T_1$ and $T_2$ are connected.


Necessary Condition
Let $T_1 \times T_2$ be connected.
By Projection from Product Topology is Continuous, $T_1$ and $T_2$ are continuous images under the projections $\pr_1$ and $\pr_2$.
Hence by Continuous Image of Connected Space is Connected, $T_1$ and $T_2$ are connected.
$\Box$


Sufficient Condition
Suppose that $T_1$ and $T_2$ are connected.
Define:

$C_y = T_1 \times \set y$ for each $y \in T_2$
$B = \set {x_0} \times T_2$ for some fixed $x_0 \in T_1$.
Each $C_y$ is homeomorphic to $T_1$ by Topological Product with Singleton.
By Connectedness is a Topological Property, each $C_y$ is therefore connected.
By the same argument, $B$ is also connected.
Also:

$C_y \cap B = \set {\tuple {x_0, y} }$ and hence is non-empty
$\ds T_1 \times T_2 = B \cup \bigcup_{y \mathop \in T_2} C_y$.
So by the corollary to Union of Connected Sets with Non-Empty Intersections is Connected, it follows that $T_1 \times T_2$ is connected.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \prod_{i \mathop = 1}^k T_i$ is connected if and only if each of $T_1, T_2, \ldots, T_k$ are connected.

from which it is to be shown that:

$\ds \prod_{i \mathop = 1}^{k + 1} T_i$ is connected if and only if each of $T_1, T_2, \ldots, T_{k + 1}$ are connected.


Induction Step
This is the induction step:
By definition of product space:

$\ds \prod_{i \mathop = 1}^{k + 1} T_i = \paren {\prod_{i \mathop = 1}^k T_i} \times T_{k + 1}$
But from the basis for the induction:

$\ds \prod_{i \mathop = 1}^{k + 1} T_i$ is connected if and only if $\ds \prod_{i \mathop = 1}^k T_i$ is connected and $T_{k + 1}$ is connected
and from the induction hypothesis:

$\ds \prod_{i \mathop = 1}^k T_i$ is connected if and only if each of $T_1, T_2, \ldots, T_k$ are connected.
Hence:

$\ds \prod_{i \mathop = 1}^{k + 1} T_i$ is connected if and only if each of $T_1, T_2, \ldots, T_{k + 1}$ are connected.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction:

For all $n \in \Z_{\ge 2}$, $T$ is connected if and only if each of $T_1, T_2, \ldots, T_n$ are connected.
$\blacksquare$


Also see
Product Space is Path-connected iff Factor Spaces are Path-connected


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Functions and Products





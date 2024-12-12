# 

Source: https://proofwiki.org/wiki/General_Intersection_Property_of_Topological_Space



Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $S_1, S_2, \ldots, S_n$ be open sets of $\struct {S, \tau}$.

Then:

$\ds \bigcap_{i \mathop = 1}^n S_i$
is also an open set of $\struct {S, \tau}$.
That is, the intersection of any finite number of open sets of a topology is also in $\tau$.

Conversely, if the intersection of any finite number of open sets of a topology is also in $\tau$, then:

$(1): \quad$ The intersection of any two elements of $\tau$ is an element of $\tau$
$(2): \quad S$ is itself an element of $\tau$.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

For any sets $S_1, S_2, \ldots, S_n \in \tau$, it follows that $\ds \bigcap_{i \mathop = 1}^n S_i \in \tau$.

Let $\mathbb S$ be any finite subset of $\tau$.

From Intersection of Empty Set, we have that:

$\mathbb S = \O \implies \bigcap \mathbb S = S$
From the definition of a topology, we have that $S \in \tau$.
Hence $\map P 0$ is true.

From Intersection of Singleton, we have that:

$\mathbb S = S_1 \implies \bigcap \mathbb S = S_1$
Thus $\map P 1$ is trivially true.


Basis for the Induction
$\map P 2$ is the case $S_1 \cap S_2 \in \O$, which is our axiom:

The intersection of any two elements of $\tau$ is an element of $\tau$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

For any sets $S_1, S_2, \ldots, S_k \in \tau$, it follows that $\ds \bigcap_{i \mathop = 1}^k S_i \in \tau$.

Then we need to show:

For any sets $S_1, S_2, \ldots, S_{k + 1} \in \tau$, it follows that $\ds \bigcap_{i \mathop = 1}^{k + 1} S_i \in \tau$.


Induction Step
This is our induction step:
Consider the set $\ds \bigcap_{i \mathop = 1}^{k + 1} S_i$.
This is $\ds \paren {\bigcap_{i \mathop = 1}^k S_i} \cap S_{k + 1}$.
But from the induction hypothesis, we know that:

$\ds \paren {\bigcap_{i \mathop = 1}^k S_i} \in \tau$
So from the base case, it follows that:

$\ds \bigcap_{i \mathop = 1}^{k + 1} S_i \in \tau$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for any sets $S_1, S_2, \ldots, S_n \in \tau$, it follows that $\ds \bigcap_{i \mathop = 1}^n S_i \in \tau$.
$\Box$

The converse follows directly from the above.
In particular, the fact that $S$ is itself an element of $\tau$ follows from the definition of Intersection of Empty Set.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.1$: Topological Spaces: Definition $3.1.1$





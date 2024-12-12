# 

Source: https://proofwiki.org/wiki/Continuous_Function_on_Compact_Space_is_Bounded

Theorem
Let $\struct {X, \tau}$ be a compact topological space.
Let $\struct {Y, \norm {\, \cdot \, } }$ be a normed vector space.
Let $f: X \to Y$ be continuous.

Then $f$ is bounded.


Proof 1
Aiming for a contradiction, suppose $f$ is not bounded.
Let $g : X \to \R$ be defined by:

$\map g x = \norm {\map f x}$
From Norm is Continuous and Composite of Continuous Mappings is Continuous, it follows that $g$ is continuous.
For all $n \in \N$, set $A_n := g^{-1} \sqbrk {\map {B_n} 0}$, where $\map {B_n} 0$ denotes the open ball in $\R$ with radius $n$ and center $0$.
From Open Ball is Open Set in Normed Vector Space and the definition of continuity, it follows that all $A_n$ are open in $X$.
For all $x \in X$, we have:

$x \in A_n$ for all $n \ge \norm {\map f x}$
It follows that:

$\ds X \subseteq \bigcup_{n \mathop \in \N} A_n$
By definition of open cover, $\set {A_n}_{n \mathop \in \N}$ is an open cover of $X$.
As $X$ is compact, there exist $m \in \N$ and $n_1, \dots, n_m \in \N$ such that $\set {A_{n_k} }_{k \mathop \in \set {1, \ldots, m} }$ is a finite subcover of $X$.
It follows that:

$\ds X \subseteq \bigcup_{k \mathop \in \set {1, \ldots, m} } A_{n_k}$
As $f$ is not bounded, there exists $x_0 \in X$ such that:

$\norm {\map f {x_0} } > \max \set {n_1, \ldots, n_m}$
It follows that:

$x_0 \notin \ds \bigcup_{k \mathop \in \set {1, \ldots, m} } A_{n_k}$
which is a contradiction.
$\blacksquare$


Proof 2
From Continuous Image of Compact Space is Compact, $f \sqbrk X$ is a compact subset of $Y$. 
From Compact Subset of Normed Vector Space is Closed and Bounded, $f \sqbrk X$ is bounded.
Hence there exists a real number $M > 0$ such that:

$\norm {\map f x} \le M$ for all $x \in X$.
So $f$ is bounded.
$\blacksquare$






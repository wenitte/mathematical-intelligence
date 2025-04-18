# 

Source: https://proofwiki.org/wiki/Open_Sets_in_Weak-*_Topology_of_Topological_Vector_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a topological vector space over $\GF$. 
Let $X^\ast$ be the topological dual space of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$.
Let $U \subseteq X$. 

Then $U$ is open in $\struct {X^\ast, w^\ast}$ if and only if for each $f \in X^\ast$ there exists $x_1, x_2, \ldots, x_n \in X$ and $\epsilon > 0$ such that:

$\set {g \in X^\ast : \cmod {\map f {x_i} - \map g {x_i} } < \epsilon \text { for each } 1 \le i \le n}$


Proof
For each $x \in X$, define $p_x : X^\ast \to \hointr 0 \infty$ by: 

$\map {p_x} f = \cmod {\map f x}$
for each $f \in X^\ast$, and set:

$\PP = \set {p_x : x \in X}$
From the definition of the weak-$\ast$ topology, $w^\ast$ is generated by $\set {x^\wedge : x \in X}$.
So from from Initial Topology on Vector Space Generated by Linear Functionals is Locally Convex, $w^\ast$ is the standard topology on the locally convex space $\struct {X^\ast, \PP}$.
From Open Sets in Standard Topology of Locally Convex Space, we obtain that $U$ is open in $\struct {X^\ast, w^\ast}$ if and only if for each $f \in X^\ast$ there exists $x_1, x_2, \ldots, x_n \in X$ and $\epsilon > 0$ such that:

$\set {g \in X^\ast : \cmod {\map f {x_i} - \map g {x_i} } < \epsilon \text { for each } 1 \le i \le n}$
$\blacksquare$






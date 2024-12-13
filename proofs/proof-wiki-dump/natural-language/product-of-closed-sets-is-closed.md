# 

Source: https://proofwiki.org/wiki/Product_of_Closed_Sets_is_Closed

Theorem
Let $\family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be a family of topological spaces where $I$ is an arbitrary indexing set.
Let $\ds S = \prod_{i \mathop \in I} S_i$.
Let $T = \struct {S, \TT}$ be the product space of $\family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ with the product topology $\TT$.
Suppose we have an indexed family of sets $\family {C_i}_{i \mathop \in I}$, where each $C_i$ is closed in $\struct {S_i, \tau_i}$.

Then $\ds \prod_{i \mathop \in I} C_i$ is closed in $\struct {S, \TT}$.


Proof
First note that:














\(\ds \prod_{i \mathop \in I} C_i\)

\(=\)







\(\ds \set {x \in S : \forall i \in I, x_i \in C_i}\)





Definition of Cartesian Product














\(\ds \)

\(=\)







\(\ds \bigcap_{i \mathop \in I} \set {x \in S: x_i \in C_i}\)










Thus by Intersection of Closed Sets is Closed in Topological Space, our result is proven if we can show that $\forall i \in I: \set {x \in S: x_i \in C_i}$ is closed in $T$.

Let $y \in I$.
We see that:














\(\ds S \setminus \set {x \in S: x_y \in C_y}\)

\(=\)







\(\ds \set {x \in S: x_y \notin C_y}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in S: x_y \in \paren {S_y \setminus C_y} }\)





Definition of Set Complement














\(\ds \)

\(=\)







\(\ds \pr_y^{-1} \sqbrk {S_y \setminus C_y}\)





Definition of Projection (Mapping Theory)



Since $C_y$ is closed, $\paren {S_y \setminus C_y}$ is open in $\struct {S_y, \tau_y}$ by definition.
Thus:

$\pr_y^{-1} \sqbrk {S_y \setminus C_y} \in \BB$
where $\BB$ is the natural sub-basis of $T$:

$\BB = \set {\pr_i^{-1} \sqbrk U: i \in I, U \in \tau_i}$

Therefore $\pr_y^{-1} \sqbrk {S_y \setminus C_y} = S \setminus \set {x \in S: x_y \in C_y}$ is open in $T$.
This implies that $\set {x \in S: x_y \in C_y}$ must be closed in $T$ by definition.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology: $\text{I}: \ \S 11$: Product Spaces





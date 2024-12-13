# 

Source: https://proofwiki.org/wiki/Open_Projection_and_Closed_Graph_Implies_Quotient_is_Hausdorff

Theorem
Let $\RR \subseteq X \times X$ be an equivalence relation on a topological space $\struct {X, \tau}$.
Let $X / \RR$ be the quotient space.
Let $p$ denote the quotient mapping.
Let:

$\RR$ be closed in $X \times X$
$p$ be an open mapping.

Then $X / \RR$ is Hausdorff.


Proof
Let $\eqclass x \RR, \eqclass y \RR \in X / \RR$ such that $\eqclass x \RR \ne \eqclass y \RR$.
Then $\tuple {x, y} \notin \RR$.
Since $\RR$ is closed, $\paren {X \times X} \setminus \RR$ is open.
Let:

$\BB = \set { U \times V : U, V \in \tau}$
By Natural Basis of Product Topology, $\BB$ is a basis for the product topology on $X \times X$.
Then choose $U, V \in \tau$ such that $\tuple {x, y} \in U \times V \subseteq \paren {X \times X} \setminus \RR$.
Thus $x \in U$, so:

$\eqclass x \RR = \map p x \in p \sqbrk U$
Similarly, $y \in V$, so:

$\eqclass y \RR = \map p y \in p \sqbrk V$
Since $p$ is open, $p \sqbrk U$ and $p \sqbrk V$ are open.

Aiming for a contradiction, suppose that $p \sqbrk U \cap p \sqbrk V \ne \O$.
Then there exist $z \in U$ and $w \in V$ such that $\eqclass z \RR = \eqclass w \RR$.
Then $z \RR w$, and so $\tuple {z, w} \in \RR$.
However, $\tuple {z, w} \in U \times V$, contradicting $U \times V \subseteq \paren {X \times X} \setminus \RR$.
Thus:

$p \sqbrk U \cap p \sqbrk V = \O$
Hence the result.
$\blacksquare$


Also see
Hausdorff Space iff Diagonal Set on Product is Closed





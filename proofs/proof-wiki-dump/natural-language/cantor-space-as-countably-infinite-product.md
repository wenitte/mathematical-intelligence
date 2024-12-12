# 

Source: https://proofwiki.org/wiki/Cantor_Space_as_Countably_Infinite_Product

Theorem
Let $A_n = \struct {\set {0, 2}, \tau_n}$ be the discrete space of the two points $0$ and $2$.
Let $\ds A = \prod_{n \mathop = 1}^\infty A_n$.
Let $\struct {A, \tau}$ be the product space where $\tau$ is the product topology on $A$.

Then $A$ is homeomorphic to the Cantor space.


Proof
In $\CC$, basis elements are sets of the form $\set {y: \size {x - y} < \epsilon}$ for $x \in \CC$ and some $\epsilon \in \R_{>0}$.
In $\ds \prod_{n \mathop = 1}^\infty A_n$, sets of the form $\set {\sequence {a_i} \in \prod A_n: a_i \text { is fixed for } 1 \le i \le n}$ forms a basis for the product topology.
Consider the function $f$ taking each point from $\tuple {a_1, a_2, \ldots, a_n, \ldots}$ in $\prod A_n$ to the point $0 \cdotp a_1 a_2 \ldots a_n \ldots_3$ in $\CC$.
As $f$ takes basis elements to basis elements, both $f$ and $f^{-1}$ are seen to be continuous.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $29$. The Cantor Set: $8$





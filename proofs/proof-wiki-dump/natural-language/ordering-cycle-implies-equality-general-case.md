# 

Source: https://proofwiki.org/wiki/Ordering_Cycle_implies_Equality/General_Case



Theorem
Let $\struct {S,\preceq}$ be an ordered set.
Let $x_0, x_1, \dots, x_n \in S$.
Suppose that for $k = 0, 1, \dots, n - 1: x_k \preceq x_{k + 1}$.
Suppose also that $x_n \preceq x_0$.

Then $x_0 = x_1 = \dots = x_n$.


Proof
Since $\preceq$ is an ordering it is transitive and antisymmetric.
By Transitive Chaining, it follows from the first premise that for all $k$ with $0 \le k \le n$:

$x_0 \preceq x_k$
and also:

$x_k \preceq x_n$
The other premise states that $x_n \preceq x_0$.
By transitivity of $\preceq$, this combines with the above to:

$x_k \preceq x_0$
Since $\preceq$ is antisymmetric, this means that $x_0 = x_k$ for $0 \le k \le n$.
That is, $x_0 = x_1 = \dots = x_n$.
$\blacksquare$


Also known as
1967: Garrett Birkhoff: Lattice Theory (3rd ed.) refers to this property as anti-circularity.


Sources
1967: Garrett Birkhoff: Lattice Theory (3rd ed.): $\text I.1$: Lemma $2$





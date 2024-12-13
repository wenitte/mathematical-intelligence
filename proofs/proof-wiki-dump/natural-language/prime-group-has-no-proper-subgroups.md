# 

Source: https://proofwiki.org/wiki/Prime_Group_has_no_Proper_Subgroups



Theorem
A nontrivial group $G$ has no proper subgroups except the trivial group if and only if $G$ is finite and its order is prime.


Proof
Sufficient Condition
Suppose $G$ is finite and of prime order $p$.
From Lagrange's Theorem, the order of any subgroup of $G$ must divide the order $p$ of $G$.
From the definition of prime, any subgroups of $p$ can therefore only have order $1$ or $p$.
Hence $G$ can have only itself and the trivial group as subgroups.
$\Box$


Necessary Condition
Suppose $G$ is not finite and prime.
Let the identity of $G$ be $e$.
Let $h \in G$ be an element of $G$ such that $h \ne e$.
Then $H = \gen h$ is a cyclic subgroup of $G$.
If $H \ne G$ then $H$ is a non-trivial proper subgroup of $G$, and the proof is complete.

Otherwise, $H = G$ is a cyclic group and there are two possibilities:

$(1): \quad G$ is infinite
$(2): \quad G$ is finite (and of non-prime order).
First, suppose $G$ is infinite.
From Infinite Cyclic Group is Isomorphic to Integers, $G$ is isomorphic to $\struct {\Z, +}$.
From Subgroups of Additive Group of Integers, $\struct {\Z, +}$ has proper subgroups, for example: $\gen 2$.
Because $G \cong \struct {\Z, +}$, then so does $G$ have proper subgroups, and the proof is complete.

Suppose $G$ is finite, and of order $n$ where $n$ is not prime .
Then:

$\exists d \in \N: d \divides n, 1 < d < n$
From Subgroup of Finite Cyclic Group is Determined by Order, $G$ has a proper subgroup of order $d$ and again, the proof is complete.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.7 \ \text{(a)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{GG}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 38 \gamma$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $20$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.4$: Cyclic groups: Exercise $9$





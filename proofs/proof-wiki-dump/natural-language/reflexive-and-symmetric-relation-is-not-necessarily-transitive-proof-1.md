# 

Source: https://proofwiki.org/wiki/Reflexive_and_Symmetric_Relation_is_not_necessarily_Transitive/Proof_1

Theorem
Let $S$ be a set.
Let $\alpha \subseteq S \times S$ be a relation on $S$.
Let $\alpha$ be both reflexive and symmetric.

Then it is not necessarily the case that $\alpha$ is also transitive.


Proof
Proof by Counterexample:
Let $S = \set {a, b, c}$.
Let:

$\alpha = \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {b, a}, \tuple {b, c}, \tuple {c, b} }$
By inspection it is seen that $\alpha$ is both reflexive and symmetric.
However, we have:

$a \mathrel \alpha b$ and $b \mathrel \alpha c$
but it is not the case that $a \mathrel \alpha c$.
Hence $\alpha$ is both reflexive and symmetric but not transitive.
$\blacksquare$






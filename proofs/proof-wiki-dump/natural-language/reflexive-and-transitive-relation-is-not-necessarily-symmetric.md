# 

Source: https://proofwiki.org/wiki/Reflexive_and_Transitive_Relation_is_not_necessarily_Symmetric

Theorem
Let $S$ be a set.
Let $\alpha \subseteq S \times S$ be a relation on $S$.
Let $\alpha$ be both reflexive and transitive.

Then it is not necessarily the case that $\alpha$ is also symmetric.


Proof 1
Proof by Counterexample:
Let $S = \set {a, b, c}$.
Let:

$\alpha = \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {b, c}, \tuple {a, c} }$
By inspection it is seen that $\alpha$ is both reflexive and transitive.
However, we have:

$a \mathrel \alpha b$
but it is not the case that $b \mathrel \alpha a$.
Hence $\alpha$ is both reflexive and transitive but not symmetric.
$\blacksquare$


Proof 2
Proof by Counterexample:
Let $S = \Z$ be the set of integers.

Let $\alpha$ be the relation on $S$ defined as:

$\forall x, y \in S: x \mathrel \alpha y \iff x \le y$

It is seen that:

$\forall x \in \Z: x \le x$
and so:

$\forall x \in \Z: x \mathrel \alpha x$
Thus $\alpha$ is reflexive.

Then it is seen that:

$\forall x, y, z \in \Z: x \le y, y \le z \implies x \le z$
Thus $\alpha$ is transitive.

Now let $x = 1$ and $y = 2$.
Then:

$x \le y$ but it is not the case that $y \le x$
and so $\alpha$ is not symmetric.

Hence $\alpha$ is both reflexive and transitive but not symmetric.
$\blacksquare$





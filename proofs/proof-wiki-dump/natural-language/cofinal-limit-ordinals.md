# 

Source: https://proofwiki.org/wiki/Cofinal_Limit_Ordinals



Theorem
Let $x$ and $y$ be ordinals.
Let $\mathrm {cof}$ denote the cofinal relation.
Let $K_{II}$ denote the class of all limit ordinals.

Then:

$\map {\mathrm {cof} } {x, y} \implies \paren {x \in K_{II} \iff y \in K_{II} }$


Proof
Necessary Condition
Suppose $y \in K_{II}$.
$x \ne 0$ by Cofinal to Zero iff Ordinal is Zero.

If $x = z^+$ for some $z$, then $z = \bigcup x$ by Union of Successor Ordinal.
Therefore, $z$ would be the least upper bound of $x$.

Since $\map {\mathrm {cof} } {x, y}$, it follows by the definition of cofinal that:

$\forall a \in x: \exists b \in y: \map f b \ge a$
So $\map f b \ge z$ for some $b \in y$.

But since $y$ is a limit ordinal, $b^+ \in y$ by Successor of Ordinal Smaller than Limit Ordinal is also Smaller.
Therefore, $\map f {b^+} \in x$ and $\map f {b^+} > \map f b \ge z$, which contradicts the fact that $z$ is an upper bound of $x$.
Therefore, $x \ne z^+$ for any $z$ and $x \in K_{II}$.
$\Box$


Sufficient Condition
Suppose $x \in K_{II}$.
$y \ne 0$ by Cofinal to Zero iff Ordinal is Zero.

Moreover, if $y = z^+$ for some ordinal $z$, then $z = \bigcup y$ by Union of Successor Ordinal.
Therefore, $z$ would be the least upper bound of $y$.

Since $\map {\mathrm {cof} } {x, y}$, it follows by the definition of cofinal that:

$\forall a \in x: \exists b \in y: \map f b \ge a$

But $z \in y$, so by the definition of $f$:

$\map f z \in x$
Therefore, from Successor of Ordinal Smaller than Limit Ordinal is also Smaller:

$\map f z^+ \in x$
This means that:

$\exists b \in y: \map f b \ge \map f z^+$

This would mean that by Ordinal is Less than Successor:

$\map f b > \map f z$
But this means that $b \ge z$ since otherwise, by the definition of strictly increasing mapping:

$\map f b < \map f z$
Furthermore, $b \ne z$, since otherwise, by Substitutivity of Equality:

$\map f b = \map f z$.
It follows that $b > z$.
This contradicts the fact that from Union of Ordinals is Least Upper Bound, $z$ is an upper bound of $y$.
Therefore, $y \ne z^+$ for any $z$ and $y \in K_{II}$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.55$





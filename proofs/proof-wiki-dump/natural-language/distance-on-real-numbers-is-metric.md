# 

Source: https://proofwiki.org/wiki/Distance_on_Real_Numbers_is_Metric



Theorem
Let $x, y \in \R$ be real numbers.
Let $\map d {x, y}$ be the distance between $x$ and $y$:

$\map d {x, y} = \size {x - y}$

Then $\map d {x, y}$ is a metric on $\R$.
Thus it follows that $\tuple {\R, d}$ is a metric space.


Proof
We check the metric space axioms in turn.


Metric Space Axiom $(\text M 1)$
The statement of this axiom is:

Metric Space Axiom $(\text M 1)$: $\forall x \in X: \size {x - x} = 0$

This follows from the definition of absolute value.
$\Box$


Metric Space Axiom $(\text M 2)$: Triangle Inequality
The statement of this axiom is:

Metric Space Axiom $(\text M 2)$: Triangle Inequality: $\forall x, y, z \in X: \size {x - y} + \size {y - z} \ge \size {x - z}$

We have:

$\paren {x - y} + \paren {y - z} = \paren {x - z}$
The result follows from the Triangle Inequality for Real Numbers.
$\Box$


Metric Space Axiom $(\text M 3)$
The statement of this axiom is:

Metric Space Axiom $(\text M 3)$: $\forall x, y \in X: \size {x - y} = \size {y - x}$

As $x - y = -\paren {y - x}$, it follows from the definition of absolute value that $\size {x - y} = \size {y - x}$.
$\Box$


Metric Space Axiom $(\text M 4)$
The statement of this axiom is:

Metric Space Axiom $(\text M 4)$: $\forall x, y \in X: x \ne y \implies \size {x - y} > 0$

This follows from the definition of absolute value.
$\Box$

Having verified all the axioms, we conclude $d$ is a metric.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: Exercise $\S 1.20 \ (3)$





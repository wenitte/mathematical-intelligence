# 

Source: https://proofwiki.org/wiki/Arc_Length_on_Circle_forms_Metric



Theorem
Let $A \subseteq \R^2$ be the set defined as:

$A = \set {\tuple {x_1, x_2}: x_1^2 + y_2^2 = 1}$
Thus from Equation of Unit Circle, $A$ is the unit circle embedded in the Cartesian plane.
Let $d: A^2 \to \R$ be the mapping defined as:

$\forall \tuple {x, y} \in A^2: \map d {x, y} = \begin {cases} 0 & : x = y \\ \pi & : x = -y \\ l & : \text {otherwise} \end {cases}$
where:

$x$ and $y$ are of the form $\tuple {x_1, x_2}$
$l$ denotes the length of the minor arc of $A$ between $x$ and $y$.

Then $d$ is a metric for $A$.


Proof
It is to be demonstrated that $d$ satisfies all the metric space axioms.


Proof of Metric Space Axiom $(\text M 1)$
$\map d {x, x} = 0$ by definition.
So Metric Space Axiom $(\text M 1)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x$, $y$ and $z$ be points on $A$.
Suppose $z$ be such that either:

it lies on the minor arc from $x$ and $y$
$x$ and $y$ lie on a diameter of $A$.
Then $x z$ and $z y$ are both minor arcs of $A$.
Hence:

$\map d {x, z} + \map d {z, y} = \map d {x, y}$

Suppose otherwise, that $z$ lies on the major arc of $A$.
Then by inspection:

$\map d {x, z} + \map d {z, y} > \map d {x, y}$

So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$
By inspection:

$\map d {x, y} = \map d {y, x}$
for all $x, y \in A$.
So Metric Space Axiom $(\text M 3)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$
By inspection:

$\map d {x, y} \ge 0$
for all $x, y \in A$.

So Metric Space Axiom $(\text M 4)$ holds for $d$.
$\Box$

Thus $d$ satisfies all the metric space axioms and so is a metric.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 8$





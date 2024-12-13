# 

Source: https://proofwiki.org/wiki/Metric_Induced_by_a_Pseudometric

Theorem
Let $X$ be a set on which there is a pseudometric $d: X \times X \to \R$.
For any $x, y \in X$, let $x \sim y$ denote that $\map d {x, y} = 0$.
Let $\eqclass x \sim$ denote the equivalence class of $x$ under $\sim$.
Let $X^*$ be the quotient of $X$ by $\sim$.
Then the mapping $d^*: X^* \times X^* \to \R$ defined by:

$\map {d^*} {\eqclass x \sim, \eqclass y \sim} = \map d {x, y}$
is a metric.
Hence $\struct {X^*, d^*}$ is a metric space.


Proof
From Pseudometric Defines an Equivalence Relation we have that $\sim$ is indeed an equivalence relation.

First we verify that $d^*$ is well-defined.
Let $z \in \eqclass x \sim$ and $w \in \eqclass y \sim$.
From Equivalence Class Equivalent Statements:

$\eqclass z \sim = \eqclass x \sim$ and $\eqclass w \sim = \eqclass y \sim$















\(\ds \map d {z, w}\)

\(\le\)







\(\ds \map d {z, x} + \map d {x, y} + \map d {y, w}\)




















\(\ds \)

\(=\)







\(\ds \map d {x, y}\)





Definition of $\sim$














\(\ds \map d {x, y}\)

\(\le\)







\(\ds \map d {x, z} + \map d {z, w} + \map d {w, y}\)




















\(\ds \)

\(=\)







\(\ds \map d {z, w}\)





Definition of $\sim$








\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(=\)







\(\ds \map d {z, w}\)









So $d^*$ is independent of the elements chosen from the equivalence classes.

Now we need to show that $d^*$ is a metric.
To do that, all we need to do is show that $\map {d^*} {a, b} > 0$ where $a \ne b$.
So let $\map {d^*} {a, b} = 0$ where $a = \eqclass x \sim, b = \eqclass y \sim$.
Then $\map d {x, y} = 0$ so $y \in \eqclass x \sim$ and so $a = b$.
Hence the result.
$\blacksquare$






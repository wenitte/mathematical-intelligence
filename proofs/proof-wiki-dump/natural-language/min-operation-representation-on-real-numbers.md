# 

Source: https://proofwiki.org/wiki/Min_Operation_Representation_on_Real_Numbers



Theorem
Let $x, y \in \R$.

Then:

$\min \set{x, y} = \dfrac 1 2 \paren {x + y - \size {x - y} }$
where $\min$ denotes the min operation.


Proof
From the Trichotomy Law for Real Numbers exactly one of the following holds:

$x < y$ and so $\min \set {x, y} = x$
$x = y$ and so $\min \set {x, y} = x = y$
$y < x$ and so $\min \set {x, y} = y$

By the definition of the absolute value function for each case respectively we have:

$\size {x - y} = y - x$
$\size {x - y} = 0$
$\size {x - y} = x - y$

Thus the equation holds by $+$ being commutative and associative as for each case:

$\dfrac 1 2 \paren {x + y - \paren {y - x} } = x$
$\dfrac 1 2 \paren {x + y + 0} = x = y$
$\dfrac 1 2 \paren {x + y - \paren {x - y} } = y$
$\blacksquare$


Also see
Max Operation Representation on Real Numbers


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 18 \ \text {(a)}$





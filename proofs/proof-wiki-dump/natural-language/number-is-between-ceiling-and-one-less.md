# 

Source: https://proofwiki.org/wiki/Number_is_between_Ceiling_and_One_Less

Theorem
$\ceiling x - 1 < x \le \ceiling x$
where $\ceiling x$ denotes the ceiling of $x$.


Proof
By definition of ceiling of $x$:

$\forall x \in \R: \ceiling x = \map \inf {\set {m \in \Z: m \ge x} }$

By definition of infimum:

$\ceiling x \ge x$
Also by definition of infimum:

$\ceiling x - 1 \not \ge x$
as $\ceiling x$ is the smallest integer with that property.
That is:

$x > \ceiling x - 1$
Hence the result.
$\blacksquare$






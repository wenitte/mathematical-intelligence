# 

Source: https://proofwiki.org/wiki/Real_Number_is_between_Ceiling_Functions

Theorem
$\forall x \in \R: \ceiling {x - 1} \le x < \ceiling x$
where $\ceiling x$ is the ceiling of $x$.


Proof
$\ceiling x$ is defined as:

$\ceiling x = \map \inf {\set {m \in \Z: m \ge x} }$
So $\ceiling x \ge x$ by definition.

Now $\ceiling {x - 1} < \ceiling x$, so by the definition of the infimum:

$\ceiling {x - 1} > x$
The result follows.
$\blacksquare$






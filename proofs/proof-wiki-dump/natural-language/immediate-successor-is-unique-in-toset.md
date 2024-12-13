# 

Source: https://proofwiki.org/wiki/Immediate_Successor_is_Unique_in_Toset

Theorem
Let $(S, \preceq)$ be a totally ordered set.
Let $x, y \in S$.
Suppose that $y$ is an immediate successor of $x$.

Then $y$ is the only immediate successor of $x$.


Proof
Aiming for a contradiction, suppose that $x$ has another immediate successor, $z ≠ y$.
Then by definition:

$x \prec y$
$x \prec z$
Since $\preceq$ is a total ordering and $y ≠ z$:

$y \prec z$ or $z \prec y$.
If $y \prec z$ then $x \prec y \prec z$, contradicting the fact that $z$ is an immediate successor of $x$.
If $z \prec y$ then $x \prec z \prec y$, contradicting the fact that $y$ is an immediate successor of $x$.
Thus we conclude that there can be no such $z$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.): Proposition $4.1.3$





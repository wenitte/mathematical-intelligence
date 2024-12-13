# 

Source: https://proofwiki.org/wiki/Intersection_of_Lower_Closure_of_Element_with_Ideal_equals_Meet_of_Element_and_Ideal



Theorem
Let $\struct {S, \preceq}$ be a meet semilattice.
Let $I$ be an ideal in $\struct {S, \preceq}$.
Let $x \in S$.

Then:

$\paren {x^\preceq} \cap I = \set {x \wedge i: i \in I}$
where $x^\preceq$ denotes the lower closure of $x$.


Proof
First Inclusion
Let $z \in \paren {x^\preceq} \cap I$
By definition of intersection:

$z \in x^\preceq$ and $z \in I$
By definition of lower closure of element:

$z \preceq x$
By Preceding iff Meet equals Less Operand:

$x \wedge z = z$
Thus:

$z \in \set {x \wedge i: i \in I}$
$\Box$


Second Inclusion
Let $z \in \set {x \wedge i: i \in I}$
Then

$\exists i \in I: z = x \wedge i$
By Meet Precedes Operands:

$z \preceq x$ and $z \preceq i$
By definition of ideal in ordered set:

$I$ is a lower section.
By definitions of lower section and lower closure of element:

$z \in I$ and $z \in x^\preceq$
Thus by definition of intersection:

$z \in \struct {x^\preceq} \cap I$
$\Box$

Thus the result by definition of set equality.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:36





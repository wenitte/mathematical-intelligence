# 

Source: https://proofwiki.org/wiki/Not_Preceding_implies_Approximating_Relation_and_not_Preceding


It has been suggested that this page be renamed.In particular: It's tough to suggest an alternative, but this title doesn't cut it.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $x, y \in S$ such that

$x \npreceq y$
Let $\RR$ be an approximating relation on $S$.

Then

$\exists u \in S: \tuple {u, x} \in \RR \land u \npreceq y$


Proof
By definition of approximating relation:

$x = \map \sup {x^\RR}$
By definition of supremum:

$y$ is upper bound for $x^\RR \implies x \preceq y$
By definition of upper bound:

$\exists u \in S: u \in x^\RR \land u \npreceq y$
Thus by definition of $\RR$-segment:

$\exists u \in S: \tuple {u, x} \in \RR \land u \npreceq y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:48





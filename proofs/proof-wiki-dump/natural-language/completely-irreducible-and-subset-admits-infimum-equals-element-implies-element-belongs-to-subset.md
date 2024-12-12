# 

Source: https://proofwiki.org/wiki/Completely_Irreducible_and_Subset_Admits_Infimum_Equals_Element_implies_Element_Belongs_to_Subset

Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $x \in S$ such that

$x$ is completely irreducible.
Let $X \subseteq S$ such that

$X$ admits an infimum and $x = \inf X$

Then $x \in X$


Proof
Aiming for a contradiction, suppose

$x \notin X$
By Completely Irreducible Element iff Exists Element that Strictly Succeeds First Element

$\exists q \in S: x \prec q \land \left({\forall s \in S: x \prec s \implies q \preceq s}\right) \land x^\succeq = \left\{ {x}\right\} \cup q^\succeq$
where $x^\succeq$ denotes the upper closure of $x$.
We will prove that

$X \subseteq q^\succeq$
Let $y \in X$.
By definitions of infimum and lower bound:

$x \preceq y$
By definition of strictly precede:

$x \prec y$
By existence of $q$:

$q \preceq y$
Thus by definition of upper closure of element:

$y \in q^\succeq$
$\Box$
By Infimum of Upper Closure of Element:

$\inf\left({q^\succeq}\right) = q$
By Infimum of Subset:

$q \preceq x$
Thus this contrsdicts $x \prec q$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL16:24





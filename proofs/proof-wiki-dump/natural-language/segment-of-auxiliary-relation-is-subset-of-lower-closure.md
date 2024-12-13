# 

Source: https://proofwiki.org/wiki/Segment_of_Auxiliary_Relation_is_Subset_of_Lower_Closure

Theorem
Let $\struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $R$ be auxiliary relation on $S$.
Let $x \in S$.

Then

$x^R \subseteq x^\preceq$
where

$x^R$ denotes the $R$-segment of $x$,
$x^\preceq$ denotes the lower closure of $x$.


Proof
Let $a \in x^R$.
By definition of $R$-segment of $x$:

$\tuple {a, x} \in R$
By definition of auxiliary relation:

$a \preceq x$
Thus by definition of lower closure of element:

$a \in x^\preceq$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:12





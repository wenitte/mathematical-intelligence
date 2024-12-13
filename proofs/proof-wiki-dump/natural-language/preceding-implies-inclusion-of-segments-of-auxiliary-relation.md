# 

Source: https://proofwiki.org/wiki/Preceding_implies_Inclusion_of_Segments_of_Auxiliary_Relation

Theorem
Let $\left({S, \vee, \preceq}\right)$ be a bounded below join semilattice.
Let $R$ be an auxiliary relation on $S$.
Let $x, y \in S$ such that

$x \preceq y$

Then

$x^R \subseteq y^R$
where $x^R$ denotes the $R$-segment of $x$.


Proof
Let $a \in x^R$.
By definition of $R$-segment of $x$:

$\left({a, x}\right) \in R$
By definition of reflexivity:

$a \preceq a$
By definition of auxiliary relation:

$\left({a, y}\right) \in R$
Thus by definition of $R$-segment of $y$:

$a \in y^R$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:17





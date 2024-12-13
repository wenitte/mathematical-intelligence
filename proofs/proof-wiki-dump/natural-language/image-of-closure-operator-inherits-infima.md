# 

Source: https://proofwiki.org/wiki/Image_of_Closure_Operator_Inherits_Infima

Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $f$ be a closure operator on $L$.

Then $R = \struct {f \sqbrk S, \precsim}$ inherits infima,
where

$\mathord \precsim = \mathord \preceq \cap \paren {f \sqbrk S \times f \sqbrk S}$
$f \sqbrk S$ denotes the image of $f$.


Proof
Let $X$ be subset of $f \sqbrk S$ such that

$X$ admits an infimum in $L$.
By Closure Operator does not Change Infimum of Subset of Image:

$\map f {\inf_L X} = \inf_L X$
By definition of image of mapping:

$\inf_L X \in f \sqbrk S$
Thus by Infimum in Ordered Subset:

$X$ admits an infimum in $R$ and $\inf_R X = \inf_L X$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL10:funcreg 9





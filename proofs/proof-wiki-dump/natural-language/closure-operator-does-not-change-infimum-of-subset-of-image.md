# 

Source: https://proofwiki.org/wiki/Closure_Operator_does_not_Change_Infimum_of_Subset_of_Image

Theorem
Let $L = \left({S, \preceq}\right)$ be an ordered set.
Let $c: S \to S$ be a closure operator on $L$.
Let $X$ be a subset of $c\left[{S}\right]$ such that

$X$ admits an infimum,
where $c\left[{S}\right]$ denotes the image of $c$.

Then $\inf X = c\left({\inf X}\right)$


Proof
We will prove that

$c\left({\inf X}\right)$ is lower bound for $X$.
Let $x \in X$.
By definition of subset:

$x \in c\left[{S}\right]$
By definition of image of mapping:

$\exists y \in S: x = c\left({y}\right)$
By definition of closure operator/idempotent:

$x = c\left({x}\right)$
By definition of infimum:

$\inf X$ is lower bound for $X$.
By definition of lower bound:

$\inf X \preceq x$
Thus by definition of closure operator/increasing:

$c\left({\inf X}\right) \preceq x$
$\Box$
By definition of infimum:

$c\left({\inf X}\right) \preceq \inf X$
By definition of closure operator/inflationary:

$c\left({\inf X}\right) \succeq \inf X$
Thus by definition of antisymmetry:

$c\left({\inf X}\right) = \inf X$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:28





# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_Preserves_Infima_and_Suprema



Theorem
Let $L = \left({S, \preceq}\right)$, $L' = \left({S', \preceq'}\right)$ be ordered sets.
Let $f:S \to S'$ be an order isomorphism between $L$ and $L'$.

Then $f$ preserves infima and suprema.


Proof
$f$ preserves infima
Let $X$ be a subset of $S$ such that

$X$ admits an infimum in $L$.
By definition of infimum:

$\inf X$ is lower bound for $X$.
Thus by Order Isomorphism Preserves Lower Bounds:

$f\left({\inf X}\right)$ is lower bound for $f\left[{X}\right]$.
We will prove that

$\forall x \in S': x$ is lower bound for $f\left[{X}\right] \implies x \preceq' f\left({\inf X}\right)$
Let $x \in S'$ such that

$x$ is lower bound for $f\left[{X}\right]$.
By definitions of order isomorphism and bijection:

$f$ is a surjection.
By definition of surjection:

$S' = f\left[{S}\right]$
By definition of image of set:

$\exists y \in S: x = f\left({y}\right)$
By Order Isomorphism Preserves Lower Bounds:

$y$ is lower bound for $X$.
By definition of infimum:

$y \preceq \inf X$
Thus by definition of order isomorphism:

$x \preceq' f\left({\inf X}\right)$
$\Box$
Thus by definition of infimum:

$f\left[{X}\right]$ admits an infimum in $L'$ and $\inf\left({f\left[{X}\right]}\right) = f\left( {\inf X}\right)$
$\Box$

$f$ preserves suprema
This fallows by mutatis mutandis.
$\blacksquare$


Sources
Mizar article WATBEL13:20





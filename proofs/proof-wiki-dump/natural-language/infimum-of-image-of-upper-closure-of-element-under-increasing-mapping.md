# 

Source: https://proofwiki.org/wiki/Infimum_of_Image_of_Upper_Closure_of_Element_under_Increasing_Mapping

Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \precsim}$ be ordered set.
Let $f: S \to T$ be an increasing mapping.
Let $x \in S$.

Then $\map \inf {f \sqbrk {x^\succeq} } = \map f x$


Proof
By Infimum of Upper Closure of Element:

$\inf x^\succeq = x$
By definition of infimum:

$x$ is lower bound for $x^\succeq$
Thus by Increasing Mapping Preserves Lower Bounds:

$\map f x$ is lower bound for $f \sqbrk {x^\succeq}$
By definition of reflexivity:

$x \preceq x$
By definition of upper closure of element:

$x \in x^\succeq$
By definition of image of set:

$\map f x \in f \sqbrk {x^\succeq}$
Thus by definition:

$\forall y \in T: y$ is lower bound for $f \sqbrk {x^\succeq} \implies y \precsim \map f x$
Thus by definition of infimum:

$\map \inf {f \sqbrk {x^\succeq} } = \map f x$
$\blacksquare$


Sources
Mizar article WAYBEL_9:6





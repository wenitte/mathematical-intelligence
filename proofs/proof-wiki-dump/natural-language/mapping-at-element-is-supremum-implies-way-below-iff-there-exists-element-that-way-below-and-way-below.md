# 

Source: https://proofwiki.org/wiki/Mapping_at_Element_is_Supremum_implies_Way_Below_iff_There_Exists_Element_that_Way_Below_and_Way_Below



Theorem
Let $\left({S, \vee, \wedge, \preceq}\right)$ be a complete lattice.
Let $\left({T, \vee_2, \wedge_2, \precsim}\right)$ be a continuous complete lattice.
Let $f: S \to T$ be a mapping such that

$\forall x \in S: f\left({x}\right) = \sup \left\{ {f\left({w}\right): w \in S \land w \ll x}\right\}$
Let $x \in S, y \in T$.

Then

$y \ll f\left({x}\right) \iff \exists w \in S: w \ll x \land y \ll f\left({w}\right)$


Proof
By Mapping at Element is Supremum implies Mapping is Increasing:

$f$ is an increasing mapping.
Sufficient Condition
Let $y \ll f\left({x}\right)$
By Way Below Closure is Directed in Bounded Below Join Semilattice:

$x^\ll$ is directed
where $x^\ll$ denotes the way below closure of $x$.
By Image of Directed Subset under Increasing Mapping is Directed:

$f\left[{x^\ll}\right]$ is directed
where $f\left[{x^\ll}\right]$ denotes the image of $x^\ll$ under $f$.
By assumption:

$f\left({x}\right) = \sup \left\{ {f\left({w}\right): w \in S \land w \ll x}\right\}$
By definitions of image of set and way below closure:

$f\left[{x^\ll}\right] = \left\{ {f\left({w}\right): w \in S \land w \ll x}\right\}$
By Way Below iff Second Operand Preceding Supremum of Directed Set There Exists Element of Directed Set First Operand Way Below Element:

$\exists z \in f\left[{x^\ll}\right]: y \ll z$
By definition of image of set:

$\exists w \in x^\ll: f\left({w}\right) = z$
Thus by definition of way below closure:

$w \ll x$
Thus $y \ll f\left({w}\right)$
$\Box$

Necessary Condition
Let

$\exists w \in S: w \ll x \land y \ll f\left({w}\right)$
By Way Below implies Preceding:

$w \preceq x$
By definition of increasing mapping:

$f\left({w}\right) \precsim f\left({x}\right)$
Thus by Preceding and Way Below implies Way Below:

$y \ll f\left({x}\right)$
$\blacksquare$


Sources
Mizar article WAYBEL17:14





# 

Source: https://proofwiki.org/wiki/Image_of_Mapping_of_Infima_is_Generator_Set_of_Filter

Theorem
Let $\left({S, \wedge, \preceq}\right)$ be a meet semilattice.
Let $f, g:\N \to S$ be mappings such that

$\forall n \in \N: g\left({n}\right) = \inf \left\{ {f\left({m}\right): m \in \N \land m \le n}\right\}$
Let $F$ be a filter such that

$f\left[{\N}\right]$ is generator set of $F$,
where $f\left[{\N}\right]$ denotes the image of $f$.

Then $g\left[{\N}\right]$ is generator set of $F$.


Proof
By Set is Coarser than Image of Mapping of Infima:

$f\left[{\N}\right]$ is coarser than $g\left[{\N}\right]$.
By definition of generator set of filter:

$F = \left({\operatorname{fininfs}\left({f\left[{\N}\right]}\right)}\right)^\succeq$
where

$\operatorname{fininfs}\left({f\left[{\N}\right]}\right)$ denotes the finite infima set of $f\left[{\N}\right]$,
for subset $A$ of $S$: $A^\succeq$ denotes upper closure of $A$.
By Finite Infima Set and Upper Closure is Smallest Filter:

$f\left[{\N}\right] \subseteq F$
We will prove that

$g\left[{\N}\right] \subseteq F$
Let $x \in g\left[{\N}\right]$.
By definition of image of mapping:

$\exists n \in \N: x = g\left({n}\right)$
By definition of $g$:

$x = \inf \left\{ {f\left({m}\right): m \in \N \land m \le n}\right\}$
By definition:

$\left\{ {f\left({m}\right): m \in \N \land m \le n}\right\}$ is a finite set.
By definition of subset:

$\left\{ {f\left({m}\right): m \in \N \land m \le n}\right\} \subseteq F$
By definition of reflexivity:

$f\left({n}\right) \in \left\{ {f\left({m}\right): m \in \N \land m \le n}\right\}$
Thus by Filtered in Meet Semilattice with Finite Infima:

$x \in F$
$\Box$
By Subset of Set is Coarser than Set

$g\left[{\N}\right]$ is coarser than $F$.
Thus by Coarser Between Generator Set and Filter is Generator Set of Filter:

$g\left[{\N}\right]$ is generator set of $F$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:32





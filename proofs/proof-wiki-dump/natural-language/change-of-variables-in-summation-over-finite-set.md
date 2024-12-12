# 

Source: https://proofwiki.org/wiki/Change_of_Variables_in_Summation_over_Finite_Set

Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $S$ and $T$ be finite sets.
Let $f: S \to \mathbb A$ be a mapping.
Let $g: T \to S$ be a bijection.

Then we have an equality of summations over finite sets:

$\ds \sum_{s \mathop \in S} \map f s = \sum_{t \mathop \in T} \map f {\map g t}$


Proof
Let $n$ be the cardinality of $S$ and $T$.
Let $\N_{<n}$ be an initial segment of the natural numbers.
Let $h : \N_{<n} \to T$ be a bijection.
By definition of summation:

$\ds \sum_{t \mathop \in T} \map f {\map g t} = \sum_{i \mathop = 0}^{n - 1} \map f {\map g {\map h i} }$
By Composite of Bijections is Bijection, the composition $g \circ h : \N_{<n} \to S$ is a bijection.
By definition of summation:

$\ds \sum_{s \mathop\in S} \map f s = \ds \sum_{i \mathop = 0}^{n - 1} \map f {\map g {\map h i} }$
$\blacksquare$


Also see
Change of Variables in Indexed Summation
Finite Summation does not Change under Permutation





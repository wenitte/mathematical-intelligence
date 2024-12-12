# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_15

Theorem
Let $X$ be a set.

Let $X \times X$ denote the cartesian product of $X$ with itself.

Let $\sequence {V_n}_{n \in \N}$ be a sequence of subsets of $X \times X$ containing the diagonal $\Delta_X$ of $X \times X$:

$\forall n \in \N_{> 0}$ the composite relation $V_n \circ V_n$ is a subset of $V_{n - 1}$, that is, $V_n \circ V_n \subseteq V_{n - 1}$

For all $n \in \N_{> 0}$, let:

$U_n = V_n \circ V_{n - 1}, \circ \cdots \circ V_1$

Then:

$\forall n \in \N_{>0}: \set{\map {U_n} x : x \in X}$ refines $\set{\map {V_0} x : x \in X}$


Proof
From Composite of Reflexive Relations is Reflexive:

$\forall n \in \N_{>0} : U_n$ is reflexive.

From Set of Images of Reflexive Relation is Cover of Set:

$\set{\map {V_0} x : x \in X}$ is a cover of $X$.
and

$\forall n \in \N_{>0} : \set{\map {U_n} x : x \in X}$ is a cover of $X$.


Lemma 14
$\forall n \in \N_{>0}: U_n \subseteq V_0$
$\Box$

Let $n \in \N_{>0}$.

Let $x \in X$.

From Corollary to Image under Subset of Relation is Subset of Image under Relation:

$\map {U_n} x \subseteq \map {V_0} x$

Since $n$ and $x$ were arbitrary, we have:

$\forall n \in \N_{>0}, x \in X : \map {U_n} x \subseteq \map {V_0} x$

By definition of refinement:

$\forall n \in \N : \set{\map {U_n} x : x \in X}$ refines $\set{\map {V_0} x : x \in X}$
$\blacksquare$






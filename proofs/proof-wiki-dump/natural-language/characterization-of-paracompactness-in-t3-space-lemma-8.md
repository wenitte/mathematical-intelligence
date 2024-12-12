# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_8


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let every open cover of $T$ be even.

Let $\UU$ be an open cover of $T$.

Then:

there exists a $\sigma$-discrete refinement $\AA$ of $\UU$
Proof
Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

By definition of even cover there exists a neighborhood $V$ of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$:

$\set{\map V x : x \in X}$ is a refinement of $\UU$
where:

$V$ is seen as a relation on $X \times X$
$\map V x$ denotes the image of $x$ under $V$.

In what follows subsets of $X \times X$ will be treated at times as a relation on $X \times X$.

Lemma 13
there exists a sequence $\sequence{V_n}_{n \in \N}$ of neighborhoods of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:
$V_0 = V$
$\forall n \in \N_{> 0} : V_n$ is symmetric as a relation on $X \times X$
$\forall n \in \N_{> 0}$ the composite relation $V_n \circ V_n$ is a subset of $V_{n - 1}$, that is, $V_n \circ V_n \subseteq V_{n - 1}$
$\Box$

For all $n \in \N_{> 0}$, let:

$U_n = V_n \circ V_{n - 1}, \circ \cdots \circ V_1$
Then:

$\forall n \in \N_{> 0} : U_{n + 1} = V_{n + 1} \circ U_n$
Lemma 14
$\forall n \in \N_{>0}: U_n \subseteq V_0$
$\Box$

Lemma 15
$\forall n \in \N_{>0}: \set{\map {U_n} x : x \in X}$ refines $\set{\map {V_0} x : x \in X}$
$\Box$

We have by hypothesis:

$\set{\map {V_0} x : x \in X}$ refines $\UU$
From Refinement of a Refinement is Refinement of Cover: 

$(1) \quad \forall n \in \N_{>0} : \set{\map {U_n} x : x \in X}$ refines $\UU$

From Zermelo's Well-Ordering Theorem, let:

$\preccurlyeq$ well-order $X$

For each $n \in \N_{> 0}, x \in X$, let:

$\map {A_n} x = \map {U_n} x \setminus \ds \bigcup_{y \preccurlyeq x, y \ne x} \map {U_{n + 1}} y$
Lemma 16
$\forall n \in \N_{> 0}, \forall y, z \in X : y \ne z \leadsto \map {A_n} z \cap V_{n+1} \sqbrk {\map {A_n} y} = \O$
$\Box$

For each $n \in \N_{> 0}$, let:

$\AA_n = \set{\map {A_n} x : x \in X}$


Lemma 17
$\forall n \in \N_{> 0} : \AA_n$ is a discrete set of subsets.
$\Box$

Let:

$\AA = \ds \bigcup_{n \in \N, n \ne 0} \AA_n$
Lemma 18
$\AA$ is a cover of $X$
$\Box$

$\AA$ Refines $\UU$
Let $x \in X$ and $n \in \N_{>0}$.

From Set Difference is Subset:

$\map {A_n} x \subseteq \map {U_n} x$

From (1) and definition of refinement:

$\exists U \in \UU : \map {U_n} x \subseteq U$

From Subset Relation is Transitive:

$\exists U \in \UU : \map {A_n} x \subseteq U$

Since $x$ and $n$ were arbitrary, then $\AA$ refines $\UU$ by definition.
$\Box$

It follows that $\AA$ is a $\sigma$-discrete refinement of $\UU$ by definition.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.






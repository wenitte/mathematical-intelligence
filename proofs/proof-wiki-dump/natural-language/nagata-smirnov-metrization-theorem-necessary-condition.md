# 

Source: https://proofwiki.org/wiki/Nagata-Smirnov_Metrization_Theorem/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a metrizable topological space.

Then:

$T$ is regular and has a basis that is $\sigma$-locally finite.


Proof
$T$ is Regular
We show that $T$ is regular.

By definition of metrizable topological space:

there exists a metric $d: S \times S \to \R_{\gt 0}$ on $S$ such that the topology induced by $d$ is $\tau$
From Metric Space is Fully Normal, Fully Normal Space is Normal Space and Normal Space is Regular Space:

$T$ is a regular space


Construction of Basis $\VV$
We construct a $\sigma$-locally finite basis $\VV$.

For each $n \in \N$, let:

$\UU_n = \set{\map {B_{1 / 2^n}} x : x \in S}$
That is, $\UU_n$ is the set of all open balls of radius $\dfrac 1 {2^n}$.
From Open Balls of Same Radius form Open Cover:

$\forall n \in \N: \UU_n$ is an open cover of $T$
From Metric Space is Paracompact:

$T$ is a paracompact space
By definition of paracompact space:

$\forall n \in \N : \exists$ a open refinement $\VV_n$ of $\UU_n$ which is locally finite

Let $\VV = \ds \bigcup_{n \in \N} \VV_n$.
By definition, $\VV$ is $\sigma$-locally finite.


$\VV$ is Basis
We show that $\VV$ is a basis.

Let $U \in \tau$.
Let $x \in U$.
From Sequence of Powers of Number less than One:

the sequence $\sequence{\dfrac 1 {2^n}}$ is a null sequence
From Null Sequence induces Local Basis in Metric Space:

$\exists n \in N : \map {B_{1 / 2^n}} x \subseteq U$

By definition of open refinement:

$\VV_{n + 1}$ is an open cover
By definition of open cover:

$\exists V \in \VV_{n + 1} : x \in V$
By definition of open refinement:

$\exists U \in \UU_{n + 1} : V \subseteq U$
By definition of $\UU_{n + 1}$:

$\exists y \in S : U = \map {B_{1 / 2^{n + 1}}} y$

We have:

$x \in V \subseteq \map {B_{1 / 2^{n + 1}}} y$
From Open Ball Contains Open Ball Less Than Half Its Radius:

$\map {B_{1 / {2^{n + 1}}}} y \subseteq \map {B_{1 / 2^n}} x$
Hence:

$x \in V \subseteq \map {B_{1 / {2^{n + 1}}}} y \subseteq \map {B_{1 / 2^n}} x$

By definition $\VV$ is a basis.
Hence $\VV$ is a basis that is $\sigma$-locally finite.
$\blacksquare$






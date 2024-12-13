# 

Source: https://proofwiki.org/wiki/Metrization_of_Regular_Second_Countable_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a $T_1$ space.

The following statements are equivalent:

$(1): \quad T$ is regular and second-countable
$(2): \quad T$ is homeomorphic to a metric subspace of the Hilbert cube $I^\omega$
$(3): \quad T$ is metrizable and separable


Proof
Condition $(1)$ implies Condition $(2)$
Follows immediately from Regular Second-Countable Space is Homeomorphic to Subspace of Hilbert Cube.
$\Box$

Condition $(2)$ implies Condition $(3)$
Let $T$ be homeomorphic to a subspace of the Hilbert cube $\struct{I^\omega, d_2}$ 
where $d_2$ is the metric: $\ds \forall x = \sequence {x_i}, y = \sequence {y_i} \in I^\omega: \map {d_2} {x, y} := \paren {\sum_{k \mathop \in \N_{>0} } \paren {x_k - y_k}^2}^{\frac 1 2}$

By definition of metrizable topology:

$\struct{I^\omega, \tau_{d_2}}$ is metrizable
where $\tau_{d_2}$ is the topology induced by $d_2$.

From Subspace of Metrizable Space is Metrizable Space:

$T$ is homeomorphic to a metrizable space
It follows that $T$ is metrizable by definition.

From Hilbert Cube is Separable:

the Hilbert cube $\struct{I^\omega, d_2}$ is separable
From Subspace of Separable Metric Space is Separable:

$T$ is homeomorphic to a separable  space
From Continuous Image of Separable Space is Separable:

$T$ is separable
$\Box$

Condition $(3)$ implies Condition $(1)$
Let $T$ be metrizable and separable.

By definition of metrizable space:

there exists a metric $d$ on $S$ such that the topology $\tau$ on $S$ is the topology induced by $d$
From Metric Space is Separable iff Second-Countable

$\struct{S, d}$ is a second-countable space

From Metric Space is Fully Normal:

$\struct{S, \tau}$ is a fully normal space
From Fully Normal Space is Normal Space:

$\struct{S, \tau}$ is a normal space
From Normal Space is Regular Space:

$\struct{S, \tau}$ is a regular space
$\blacksquare$


Also known as
In some sources this theorem is known as Urysohn's Metrization Theorem as it includes the sufficient condition to the necessary conditions of metrization that is the subject of what is more commonly known as Urysohn's Metrization Theorem.


Also see
Urysohn's Metrization Theorem


Sources
1955: John L. Kelley: General Topology: Chapter $4$: Embedding and Metrization
1970: Stephen Willard: General Topology: Chapter $7$: Metrizable Spaces: $\S23$: Metrization: Definition $23.1$





# 

Source: https://proofwiki.org/wiki/Pseudometric_induces_Topology



Theorem
Let $S \ne \O$ be a non-empty set.
Consider a pseudometric space $\struct {S, d}$ where $d: S \times S \to \R_{\ge 0}$ is a pseudometric.

Then $\struct {S, d}$ gives rise to a topological space $\struct {S, \tau_d}$ whose topology $\tau_d$ is defined (or induced) by $d$.


Proof
Let $\tau_d$ be the set of all $X \subseteq S$ which are open in the sense that:

$\forall y \in X: \exists \epsilon > 0: \map {B_\epsilon} y \subseteq X$
where $\map {B_\epsilon} y$ is the open $\epsilon$-ball of $y$.

Equivalently:

$\forall x \in X: \exists \epsilon \in \R_{>0}: \forall y \in S: \map d {x, y} < \epsilon \implies y \in X$

We need to show that $\tau_d$ forms a topology on $S$.

We examine each of the open set axioms in turn.


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\family {U_i}_{i \mathop \in I}$ be an indexed family of open sets of $S$.
Let $\ds V = \bigcup_{i \mathop \in I} U_i$ be the union of $\family {U_i}_{i \mathop \in I}$.
Then by the definition of union:

$\forall x \in V: \exists i \in I: x \in U_i$
and so by the definition of open set:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \subseteq U_i \subseteq V$
Hence $V$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $U$ and $V$ be open sets of $S$.
Let $x \in U \cap V$.
Then:

$\exists \epsilon_U \in \R_{>0}: \map {B_{\epsilon_U} } x \subseteq U$
$\exists \epsilon_V \in \R_{>0}: \map {B_{\epsilon_V} } x \subseteq V$
Let $\epsilon := \min \set {\epsilon_U, \epsilon_V}$.
Then:

$\map {B_\epsilon} x \subseteq U \cap V$
Hence $U \cap V$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
From Open Sets in Pseudometric Space:

$\O \in \tau_d$
and:

$S \in \tau_d$
$\Box$

All the open set axioms are fulfilled, and the result follows.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Also see
Pseudometrizable: any topological space which is homeomorphic to such a $\struct {S, \tau_d}$.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Metric Uniformities





# 

Source: https://proofwiki.org/wiki/Characterization_of_Compact_Element_in_Frame_or_Locale


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be a frame or locale.
Let $a \in S$.

The following statements are equivalent::

$(1)\quad a$ is a compact element
$(2)\quad \forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$
$(3)\quad \forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$
$(4)\quad \forall A \subseteq S : a = \sup A \implies \exists F \subseteq A : F$ is finite $: a = \sup F$


Proof
Recall, a frame or locale is a complete lattice satisfying the infinite join distributive law:












  \(\ds \forall a \in L, S \subseteq L:\)

\(\ds a \wedge \bigvee S = \bigvee \set {a \wedge s : S \in S} \)   







  

where $\bigvee S$ denotes the supremum $\sup S$.

From Characterization of Compact Element in Complete Lattice:

Statements $(1)$, $(2)$ and $(3)$ are equivalent.
Statement $(3)$ implies Statement $(4)$
Let $a$ satisfies:

$\forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$

Let $A \subseteq S : a = \sup A$.
We have by hypothesis:

$\exists F \subseteq A : F$ is finite $: a \preceq \sup F$
From Supremum of Subset:

$\sup F \preceq \sup A = a$
By Ordering Axiom $(2)$: Transitivity:

$a = \sup F$

The result follows.
$\Box$

Statement $(4)$ implies Statement $(3)$
Let $a$ satisfies:

$\forall A \subseteq S : a = \sup A \implies \exists F \subseteq A : F$ is finite $: a = \sup F$

Let $A \subseteq S : a \preceq \sup A$.
From Predecessor is Infimum:

$a = a \wedge \sup A$
By the infinite join distributive law:

$a = \sup \set{a \wedge x : x \in A}$
We have by hypothesis:

$\exists F \subseteq A : F$ is finite $: a = \sup \set{a \wedge x : x \in F}$
By the infinite join distributive law:

$a = a \wedge \sup F$
From Predecessor is Infimum:

$a \preceq \sup F$
The result follows.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter $\text {II}$: Introduction to Locales, $\S3.1$





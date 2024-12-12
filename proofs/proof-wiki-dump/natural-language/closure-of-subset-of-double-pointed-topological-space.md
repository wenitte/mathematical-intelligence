# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Double_Pointed_Topological_Space

Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $D$ be a doubleton endowed with the indiscrete topology.
Let $\struct {S \times D, \tau}$ be the double pointed topology on $S$.
Let $X \subseteq S \times D$ be a subset of $S \times D$.

Then the closure of $X$ in $\tau$ is:

$\map \cl X = \map \cl {\map {\pr_1} X} \times D$
where $\pr_1$ denotes the first projection on $S \times D$.


Proof
By Closed Sets of Double Pointed Topology, $\map \cl {\map {\pr_1} X} \times D$ is closed in $\tau$.
Furthermore, for $\tuple {s, d} \in X$, one has:

$s \in \map {\pr_1} X \subseteq \map \cl {\map {\pr_1} X}$
by definition of closure.
Since also $d \in D$, we conclude that:

$X \subseteq \map \cl {\map {\pr_1} X} \times D$

By $(3)$ of Equivalence of Definitions of Topological Closure, it now suffices to prove that:


This article, or a section of it, needs explaining.In particular: Check the link above -- probably better to link directly to the specific definition of Closure, and also belowYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\map \cl {\map {\pr_1} X} \times D \subseteq C$
for any closed set $C$ with $X \subseteq C$.
By Closed Sets of Double Pointed Topology, for some $C'$ closed in $\tau$, we have:

$C = C' \times D$
so that $C' = \map {\pr_1} C$.
By Image Preserves Subsets, it follows that:

$\map {\pr_1} X \subseteq C'$
and by $(3)$ of Equivalence of Definitions of Topological Closure, this means:

$\map \cl {\map {\pr_1} X} \subseteq C'$
whence by Cartesian Product of Subsets:

$\map \cl {\map {\pr_1} X} \times D \subseteq C' \times D = C$

Hence the result.
$\blacksquare$


Also see
Interior of Subset of Double Pointed Topological Space





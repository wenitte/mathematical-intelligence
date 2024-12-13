# 

Source: https://proofwiki.org/wiki/Non-Homeomorphic_Sets_may_be_Homeomorphic_to_Subsets_of_Each_Other


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $H_1 \subseteq S_1$ and $H_2 \subseteq S_2$.

Then it is possible for:

$(1): \quad T_1$ to be homeomorphic to $H_2$
$(2): \quad T_2$ to be homeomorphic to $H_1$
but:

$(3): \quad T_1$ and $T_2$ to not be homeomorphic.


Proof
Let $\struct {\R, \tau_d}$ be the real number line under the usual (Euclidean) topology.
Let $S_1 := \closedint 0 1$ be the closed unit interval.
Let $S_2 := \openint 0 1$ be the open unit interval.
Let $H_1 := \openint 0 1$ and $H_2 := \closedint {\dfrac 1 4} {\dfrac 3 4}$.

Then:

$(1): \quad \struct {S_1, \tau_d}$ is homeomorphic to $\struct {H_2, \tau_d}$ by the mapping $f: S_1 \to H_2$ defined as $\map f x = \dfrac x 2 + \dfrac 1 4$
$(2): \quad \struct {S_2, \tau_d}$ is trivially homeomorphic to $\struct {H_1, \tau_d}$

From Continuous Image of Compact Space is Compact, if $S_1$ and $S_2$ are homeomorphic then both must be compact.
From Closed Real Interval is Compact in Metric Space, $S_1$ is compact.
But from Open Real Interval is not Compact, $S_2$ is not compact.
Hence:

$(3): \quad \struct {S_1, \tau_d}$ and $\struct {S_2, \tau_d}$ are not homeomorphic.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 38$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $7$





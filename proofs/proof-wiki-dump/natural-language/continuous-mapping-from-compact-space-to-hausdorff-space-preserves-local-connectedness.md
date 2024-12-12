# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_from_Compact_Space_to_Hausdorff_Space_Preserves_Local_Connectedness

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a compact topological space.
Let $T_2 = \struct {S_2, \tau_2}$ be a $T_2$ (Hausdorff) space.
Let $f: T_1 \to T_2$ be a continuous mapping.
Let $T_1$ be locally connected.

Then $T_2$ is also locally connected.


Proof
Let $H$ be a component of an open set $U$ of $T_2$.
By definition of continuous mapping, $f^{-1} \sqbrk U$ is an open set of $T_1$.
Let $G$ be a component of $f^{-1} \sqbrk U$.
Thus by Continuous Image of Connected Space is Connected, $f \sqbrk G$ is connected in $T_2$.
Thus either:

$f \sqbrk G \subseteq H$
or:

$f \sqbrk G \cap H = \O$
Thus every component of $f^{-1} \sqbrk H$ is a component of $f^{-1} \sqbrk U$.

From Component of Locally Connected Space is Open, $f^{-1} \sqbrk H$ is open.
Let $S_1 \setminus G$ denote the complement of $f^{-1} \sqbrk H$ relative to $S_1$.
By definition of closed set, $S_1 \setminus f^{-1} \sqbrk H$ is closed in $T_1$.
From Closed Subspace of Compact Space is Compact, $S_1 \setminus f^{-1} \sqbrk H$ is also compact in $T_1$.
From Continuous Image of Compact Space is Compact, $f \sqbrk {S_1 \setminus f^{-1} \sqbrk H} = S_2 \setminus H$ is compact in $T_2$.
From Compact Subspace of Hausdorff Space is Closed, $S_2 \setminus H$ is closed in $T_2$.
Thus by definition of closed set, $H$ is open in $T_2$.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Functions and Products





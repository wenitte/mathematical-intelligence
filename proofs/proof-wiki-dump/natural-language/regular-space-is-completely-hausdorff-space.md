# 

Source: https://proofwiki.org/wiki/Regular_Space_is_Completely_Hausdorff_Space

Theorem
Let $\struct {S, \tau}$ be a regular space.

Then $\struct {S, \tau}$ is also a $T_{2 \frac 1 2}$ (completely Hausdorff) space.


Proof
Let $T = \struct {S, \tau}$ be a regular space.
Let $x, y \in S$ with $x \ne y$.
From the definition of a completely Hausdorff Space:

$T$ is completely Hausdorff if $x$ and $y$ are separated by closed neighborhoods.

From the definition:

$\struct {S, \tau}$ is a $T_3$ space
$\struct {S, \tau}$ is a $T_0$ (Kolmogorov) space.

From Regular Space is $T_2$ Space, there exist disjoint open sets containing $x$ and $y$ respectively:

$\exists U_x, U_y \in \tau: x \in U_x, y \in U_y, U_x \cap U_y = \O$
From definition of $T_3$ space, each open set contains a closed neighborhood around each of its points, specifically for $x$ and $y$:

$\exists N_x: \relcomp S {N_x} \in \tau: \exists V_x \in \tau: x \in V_x \subseteq N_x \subseteq U_x$
$\exists N_y: \relcomp S {N_y} \in \tau: \exists V_y \in \tau: y \in V_y \subseteq N_y \subseteq U_y$
From Subsets of Disjoint Sets are Disjoint:

$N_x \cap N_y = \O$
Hence $x$ and $y$ are separated by closed neighborhoods.
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Completely Hausdorff Spaces





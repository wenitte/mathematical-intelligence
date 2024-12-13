# 

Source: https://proofwiki.org/wiki/Open_Subset_of_Locally_Compact_Hausdorff_Space_is_Locally_Compact_Hausdorff_Space

Theorem
Let $\struct {X, \tau_X}$ be a locally compact Hausdorff space.
Let $Y \subseteq X$ be open.
Let $\tau_Y$ be the subspace topology on $Y$ inherited from $\struct {X, \tau_X}$.

Then $\struct {Y, \tau_Y}$ is a locally compact Hausdorff space.


Proof
From $T_2$ Property is Hereditary, $\struct {Y, \tau_Y}$ is Hausdorff.
Let $y \in Y$. 
Let $\CC$ be a neighborhood basis of $y$ in $\struct {X, \tau_X}$ consisting of compact sets. 
Let $U$ be a neighborhood of $y$ in $\struct {Y, \tau_Y}$.
Then there exists an open neighborhood $V$ of $y$ in $\struct {Y, \tau_Y}$ such that:

$V \subseteq U$
From Open Set in Open Subspace:

$V$ is open in $\struct {X, \tau_X}$.
Hence from the definition of a neighborhood basis, there exists $C \in \CC$ such that $y \in C \subseteq V$.
Again from Open Set in Open Subspace, we have that:

$C$ is compact in $\struct {Y, \tau_Y}$.
Hence $C$ is compact in $\struct {Y, \tau_Y}$ with $C \subseteq U$.
Since $C$ is compact and $U$ is arbitrary, we have that $\CC$ is a neighborhood basis for $y$ in $\struct {Y, \tau_Y}$.
$\blacksquare$






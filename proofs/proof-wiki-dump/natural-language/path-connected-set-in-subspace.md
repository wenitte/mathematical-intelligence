# 

Source: https://proofwiki.org/wiki/Path-Connected_Set_in_Subspace

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq B \subseteq S$.
Let $T_B = \struct {B, \tau_B}$ be the topological space where $\tau_B$ is the subspace topology on $B$.

Then

$A$ is path-connected in $T_B$ if and only if $A$ is path-connected in $T$.


Proof
Let $\tau_A$ be the subspace topology on $A$ induced by $\tau$.
Let $\tau'_A$ be the subspace topology on $A$ induced by $\tau_B$.
By the definition of a path-connected set, $A$ is path-connected in $T$ if and only if every two points in $A$ are path-connected in $\struct {A, \tau_A}$.
Similarly, $A$ is path-connected in $T_B$ if and only if every two points in $A$ are path-connected in $\struct {A, \tau'_A}$.
From Subspace of Subspace is Subspace, we have $\tau_A = \tau'_A$.
Hence every two points in $A$ are path-connected in $\struct {A, \tau_A}$ if and only if every two points in $A$ are path-connected in $\struct {A, \tau'_A}$.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Connected_Set_in_Subspace

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq B \subseteq S$.
Let $T_B = \struct {B, \tau_B}$ be the topological space where $\tau_B$ is the subspace topology on $B$.

Then

$A$ is connected in $T_B$ if and only if $A$ is connected in $T$.


Proof
Let $\tau_A$ be the subspace topology on $A$ induced by $\tau$.
Let $\tau'_A$ be the subspace topology on $A$ induced by $\tau_B$.
By the definition of a connected set, $A$ is connected in $T$ if and only if $\struct {A, \tau_A}$ is a connected topological space.
Similarly, $A$ is connected in $T_B$ if and only if $\struct {A, \tau'_A}$ is a connected topological space.
From Subspace of Subspace is Subspace, we have $\tau_A = \tau'_A$.
Hence $A$ is connected in $T_B$ if and only if $A$ is connected in $T$.
$\blacksquare$






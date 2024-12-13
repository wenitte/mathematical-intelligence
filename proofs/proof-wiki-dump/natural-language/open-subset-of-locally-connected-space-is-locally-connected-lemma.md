# 

Source: https://proofwiki.org/wiki/Open_Subset_of_Locally_Connected_Space_is_Locally_Connected/Lemma

Lemma to Open Subset of Locally Connected Space is Locally Connected
Let $T = \struct {S, \tau}$ be a topological space.
Let $U$ be a connected set.
Let $A$ be a subset of $T$ such that $U \subseteq A$.
Let $\tau_A$ be the subspace topology on $A$ induced from $T$.
Then $U$ is connected in the topological subspace $\struct {A, \tau_A}$.


Proof
Let $\tau_U$ denote the subspace topology on $U$ induced from $T$.
By the definition of a connected set, the topological space $\struct {U, \tau_U}$ is connected.
Let ${\tau_U}'$ denote the subspace topology on $U$ induced from $\struct {A, \tau_A}$.
By Subspace of Subspace is Subspace, ${\tau_U}' = \tau_U$.
Thus the topological spaces $\struct {U, {\tau_U}'}$ and $\struct {U, \tau_U}$ are identical.
In particular, since $\struct {U, \tau_U}$ is connected, so is $\struct {U, {\tau_U}'}$.
Applying the definition of a connected set once more, it follows that $U$ is connected when considered as a subset of $A$.
$\blacksquare$






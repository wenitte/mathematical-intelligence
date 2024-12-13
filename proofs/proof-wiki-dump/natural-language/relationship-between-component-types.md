# 

Source: https://proofwiki.org/wiki/Relationship_between_Component_Types



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $p \in S$.

Let:

$A$ be the arc component of $p$
$P$ be the path component of $p$
$C$ be the component of $p$
$Q$ be the quasicomponent of $p$.

Then:

$A \subseteq P \subseteq C \subseteq Q$

In general, the inclusions do not hold in the other direction.


Proof
Let $f \in A$.
By Arc in Topological Space is Path we have that $f \in P$.
That is, $A \subseteq P$.
$\Box$




Let $f \in P$.
From Path-Connected Space is Connected we have directly that $P \subseteq C$.
$\Box$




Let $f \in C$.

From Connected Space is Connected Between Two Points we have directly that $C \subseteq Q$.
$\Box$

Hence the result.
$\blacksquare$


This needs considerable tedious hard slog to complete it.In particular: Plenty to do.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Also see
Path Component is not necessarily Arc Component
Component is not necessarily Path Component
Quasicomponent is not necessarily Component


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness





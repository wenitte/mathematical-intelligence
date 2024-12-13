# 

Source: https://proofwiki.org/wiki/Quasicomponent_of_Compact_Hausdorff_Space_is_Connected

Theorem
Let $\struct {X, \tau}$ be a compact Hausdorff space.
Let $C$ be a quasicomponent of $\struct {X, \tau}$.

Then $C$ is connected.


Proof
Let $p \in C$.
Aiming for a contradiction, suppose $C$ is not connected.
Therefore, by definition of connected, there exist disjoint closed sets $A, B$ of $\struct {X, \tau}$ such that $C = A \cup B$.
By Compact Hausdorff Space is T4, there exist disjoint open sets $U, V$ of $\struct {X, \tau}$ such that $U \supseteq A$ and $V \supseteq B$.
By Quasicomponent is Intersection of Clopen Sets, $C$ is the intersection of all clopen sets of $\struct {X, \tau}$ containing $p$.
Since $U$ and $V$ are open, $X \setminus \paren {U \cup V}$ is closed.
Hence $X \setminus \paren {U \cup V}$ is compact.


This article, or a section of it, needs explaining.In particular: Where from?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let $S$ be the set of clopen sets of $\struct {X, \tau}$ containing $p$.
Let $S'$ be the set of complements relative to $\struct {X, \tau}$ of elements of $S$.
Then $S'$ is an open cover of $X \setminus \paren {U \cup V}$.


This article, or a section of it, needs explaining.In particular: Needs explaining as to why - might be worth elaborating the fact that $X \setminus \paren {U \cup V} \subseteq X \setminus C$ in order for the above to hold.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus by compactness has a finite subcover $T'$.


This article, or a section of it, needs explaining.In particular: specifically, what has, and why - compactness of what? Above sentence is incomplete.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $T$ be the set of complements of elements of $T'$.


This article, or a section of it, needs explaining.In particular: complements relative to what?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $\ds C \subseteq \bigcap T \subseteq U \cup V$.


This article, or a section of it, needs explaining.In particular: why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Furthermore, since $T$ is a finite set of clopen sets of $\struct {X, \tau}$]], $\bigcap T$ is clopen.
Let $\ds U' = U \cap \bigcap T$ and let $\ds V' = V \cap \bigcap T$.
Then $C \subseteq U' \cup V' = T$.


This article, or a section of it, needs explaining.In particular: Where from?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $T$ is clopen, so is $U'$.
But $C$ contains points in $U'$ and points not in $U'$, contradicting the fact that $C$ is a quasicomponent of $\struct {X, \tau}$.


This article, or a section of it, needs explaining.In particular: What specifically is the nature of the relation between $U'$ and $C$ which invalidates one or more criteria for $C$ to be a quasicomponent?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It follows that $C$ is connected.
$\blacksquare$






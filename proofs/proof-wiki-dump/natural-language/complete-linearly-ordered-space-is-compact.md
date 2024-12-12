# 

Source: https://proofwiki.org/wiki/Complete_Linearly_Ordered_Space_is_Compact


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page or section be merged into Linearly Ordered Space is Compact iff Complete.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.
Let $\struct {X, \preceq}$ be a complete lattice.

Then $\struct {X, \tau}$ is compact.


Proof
By Space is Compact iff exists Basis such that Every Cover has Finite Subcover, it is sufficient to prove that an open cover of $X$ consisting of open intervals and rays has a finite subcover.
Let $\AA$ be an open cover of $X$ consisting of open rays and open intervals.
Let $m = \inf X$.
This infimum exists because $\struct {X, \preceq}$ is complete.
Let $C$ be the set of all $x \in X$ such that a finite subset of $\AA$ covers $\closedint m x$.
$C$ is non-empty because $m \in C$.
Let $s = \sup C$.
Since $\AA$ covers $X$, there is a $U \in \AA$ such that $s \in U$.
Then we must have $U = \openint a b$, $U = {\dot\uparrow} a$, or $U = {\dot\downarrow} b$.
Suppose that $U = \openint a b$.
Let $V \in \UU$ contain $b$.
Then by the definition of supremum, there is an $x \succ a$ such that there is a finite $\FF \subseteq \AA$ that covers $\closedint m x$.
Then $\FF \cup \set {U, V}$ covers $\closedint m b$, contradicting the fact that $s$ is an upper bound of $C$.

Suppose next that $U = \dot\downarrow b$.
Then for some $V \in \AA$, $b \in V$.
Then $\closedint m b$ is covered by $\set {U, V}$, contradicting the fact that $s$ is the supremum of $C$.

Thus $U = \dot\uparrow a$.
By the definition of supremum, $a$ is not an upper bound of $C$.
So there is an $x \succ a$ such that there is a finite subset $\FF$ of $\AA$ that covers $\closedint m x$.
Thus $\FF \cup \set U$ is a finite subcover of $A$.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology: $\S 1$: Problem $\text I$, $\S 5$: Problem $\text C$





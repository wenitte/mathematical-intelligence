# 

Source: https://proofwiki.org/wiki/Closed_Unit_Interval_is_not_Countably_Infinite_Union_of_Disjoint_Closed_Sets

Theorem
Let $\mathbb I = \closedint 0 1$ be the closed unit interval.
Then $\mathbb I$ cannot be expressed as the union of a countably infinite set of pairwise disjoint closed sets.


Proof
Aiming for a contradiction, suppose $\ds \mathbb I = \bigcup_{i \mathop = 1}^\infty C_i$ where $\set {C_i}$ is a set of pairwise disjoint closed sets.
Let:

$\ds B = \bigcup \partial C_i = \mathbb I \setminus \bigcup C_i^\circ$
where $\partial C_i$ is the boundary of $C_i$ and $C_i^\circ$ is the interior of $C_i$.
Let $J \subseteq \mathbb I$ be a subinterval of $\mathbb I$.
Then $J$ is non-meager, and so some $C_k$ is dense in some open interval $L \subseteq J$.
Since $C_k$ is closed we have that $L \subseteq C_k^\circ$ and so $L \cap B = \O$.
So $J$ contains an open subset $L$ disjoint from $B$.
So $B$ is nowhere dense in $\mathbb I$.
So every open interval $U$ containing some $x \in \partial C_j$ must intersect $B \setminus \partial C_j$.
This is because $U$ is an open neighborhood of $x$ and therefore contains some point $u \in \mathbb I \setminus C_j$, say $u \in C_m$.
Then if $U \cap B \cap \partial C_m = \O$ it follows that $C_m^\circ \cap U$ is a non-empty open set in $U$. which is also relatively closed.


This article, or a section of it, needs explaining.In particular: Closed relative to what?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Now $B$ is itself non-meager, since it is a closed subset of $\mathbb I$.
Thus some $\partial C_k$ is dense in some non-empty open set $U \cap B$, for some open interval $U$ in $\mathbb I$.
Since $\partial C_k$ is closed, this means $\partial C_k \cap U = B \cap U$.
But this is impossible, since if $U \cap C_k \ne \O$ then $U \cap \paren {B \setminus \partial C_k} \ne \O$.

This contradiction shows that $\mathbb I$ cannot be expressed as $\ds \bigcup_{i \mathop = 1}^\infty C_i$.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Notes: Part $\text {II}$: Examples: $18$





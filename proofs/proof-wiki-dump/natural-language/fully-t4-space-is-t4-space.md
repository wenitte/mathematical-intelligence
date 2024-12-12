# 

Source: https://proofwiki.org/wiki/Fully_T4_Space_is_T4_Space

Theorem
Let $T = \struct {S, \tau}$ be a fully $T_4$ space.
Then $T$ is a $T_4$ space.


Proof
Recall that $\struct {S, \tau}$ is a $T_4$ space if and only if:

$\forall A, B \in \map \complement \tau, A \cap B = \O: \exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
That is, for any two disjoint closed sets $A, B \subseteq X$ there exist disjoint open sets $U, V \in \tau$ containing $A$ and $B$ respectively.

Consider the open cover $\UU = \set {\map \complement A, \map \complement B}$.
Since $T$ is fully $T_4$, there exists a star refinement $\VV$ of $\UU$.
Define $\VV_A$ and $\VV_B$ by:

$\VV_A := \set {V \in \VV: A \cap V \ne \O}$
$\VV_B := \set {V \in \VV: B \cap V \ne \O}$
and subsequently $U_A$ and $U_B$ by:

$U_A := \bigcup \VV_A$
$U_B := \bigcup \VV_B$

Now given $a \in A$, since $\VV$ is a cover, there exists $V \in \VV$ such that $a \in V$.
But then $V \in \VV_A$, so that:

$a \in U_A$
Hence $A \subseteq U_A$, and similarly $B \subseteq U_B$.

Aiming for a contradiction, suppose that $x \in U_A \cap U_B$.
Then there exist $V_A \in \VV_A, V_B \in \VV_B$ such that:

$x \in V_A, x \in V_B$
By definition of $\VV_A$ and $\VV_B$, there exist:

$a \in A \cap V_A$
$b \in B \cap V_B$

Now recall the definition of the star $x^*$ of $x$:

$x^* := \bigcup \set {V \in \VV: x \in V}$
Since $T$ is fully $T_4$, either $x^* \subseteq \map \complement A$ or $x^* \subseteq \map \complement B$.
But $a \in V_A \subseteq x^*$, so $x^* \nsubseteq \map \complement A$.
Similarly $b \in V_B \subseteq x^*$, so $x^* \nsubseteq \map \complement B$.

From this contradiction it is inferred that $x \in U_A \cap U_B$ cannot exist.
That is:

$U_A \cap U_B = \O$
and it follows that $T$ is a $T_4$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Paracompactness





# 

Source: https://proofwiki.org/wiki/Open_Continuous_Image_of_Paracompact_Space_is_not_always_Countably_Metacompact

Theorem
Let $T_A = \struct {X_A, \tau_A}$ be a topological space which is paracompact.
Let $T_B = \struct {X_B, \tau_B}$ be another topological space.
Let $\phi: T_A \to T_B$ be a mapping which is both continuous and open.

Then it is not necessarily even the case that $T_B$ is countably metacompact, let alone paracompact.


Proof
Let $T_X = \struct {X, \tau}$ be a countable discrete space.
Let $T_Y = \struct {\set {0, 1}, \tau_0}$ be a Sierpiński space.
Let $T_A = T_X \times T_Y$ be the product space of $T_X$ and $T_Y$ whose product topology is $\tau_A$
Then $T_A$ is paracompact from Product of Countable Discrete Space with Sierpiński Space is Paracompact.

Let $T_B = \struct {S, \tau_p}$ be a countable particular point space.
Then $T_B$ is not countably metacompact from Infinite Particular Point Space is not Countably Metacompact

Let $\phi: T_A \to T_B$ be a mapping defined as:

$\forall \tuple {x, y} \in T_A: \map \phi {x, y} = \begin {cases}
p & : y = 0 \\
x & : y = 1 \end {cases}$

Then $\phi$ is open and continuous as follows:
Let $U \in \tau_A$ such that $U \ne \O$.
By construction of $T_A$, $U$ is of the form $\tuple {U_A, U_B}$ where $U_A \in \tau$ and $U_B \in \tau_0$.
By definition of $\tau_0$, $U_B \in \set {\set 0, \set {0, 1} }$.
It follows that $U$ contains elements of the form $\tuple {x, 0}$.
Hence by definition of $\phi$ we have that:

$\exists \tuple {x, y} \in U: \map \phi {x, y} = p$
and so:

$p \in \phi \sqbrk U$
By definition of $T_B$ it follows that $\phi \sqbrk U$ is an open set of $T_B$.
Thus $\phi$ maps from open sets to open sets and so $\phi$ is an open mapping.
$\Box$

Let $V \in T_B$ be an open set such that $V \ne \O$.
Then by definition:

$p \in V$
Let $F = \phi^{-1} \sqbrk V$.
As $p \in V$ we have that $F$ is of the form:

$F = A \times B$
where:

$A \subseteq X$
and:

$B \in \set {\set 0, \set {0, 1} }$
Because $T_X$ is a countable discrete space, $A$ is open in $T_X$.
By definition of $T_Y$, $B$ is open in $T_Y$.
Hence by definition of product space, $A \times B = F$ is open in $T_A$.
Thus the preimage of $V$ under $\phi$ is an open set.
Hence $\phi$ is a continuous mapping.
$\Box$

So we have constructed a mapping $\phi$ which is both open and continuous from a paracompact space to a space which is not countably metacompact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $9 \text { - } 10$. Infinite Particular Point Topology: $19$





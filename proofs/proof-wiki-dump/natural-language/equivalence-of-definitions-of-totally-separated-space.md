# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Totally_Separated_Space



Theorem
The following definitions of the concept of Totally Separated Space are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is totally separated if and only if:

For every $x, y \in S: x \ne y$ there exists a separation $U \mid V$ of $T$ such that $x \in U, y \in V$.
Definition 2
A topological space $T = \struct {S, \tau}$ is totally separated if and only if each of its quasicomponents is a singleton set.


Proof
Let $T = \struct {S, \tau}$ be totally separated by definition 1:

For every $x, y \in S: x \ne y$ there exists a separation $U \mid V$ of $T$ such that $x \in U, y \in V$.

Aiming for a contradiction, suppose there exist $x, y \in S$ such that $x \ne y$ such that $x$ and $y$ are in the same quasicomponent of $T$.
Then, by definition of quasicomponent, every separation of $T$ includes a single open set $U \in \tau$ which contains both $x$ and $y$.
But this contradicts our stipulation that there exists a separation $U \mid V$ of $T$ such that $x \in U, y \in V$.

So there exists no quasicomponent of $T$ with more than one element.
That is, $T = \struct {S, \tau}$ is totally separated by definition 2.
$\Box$

Let $T = \struct {S, \tau}$ be totally separated by definition 2:

Each of its quasicomponents is a singleton set.

Aiming for a contradiction, suppose there exist $x, y$ such that there exists no separation $U \mid V$ of $T$ such that $x \in U, y \in V$.
That is, each separation of $T$ contains an open set $U \in \tau$ which contains both $x$ and $y$.
That is, there exists a quasicomponent which contains both $x$ and $y$.
But this contradicts our stipulation that every quasicomponent of $T$ is a singleton.

So for every $x, y \in S: x \ne y$ there exists a separation $U \mid V$ of $T$ such that $x \in U, y \in V$.
That is, $T = \struct {S, \tau}$ is totally separated by definition 1.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Disconnectedness





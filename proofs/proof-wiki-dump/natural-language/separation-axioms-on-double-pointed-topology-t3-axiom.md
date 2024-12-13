# 

Source: https://proofwiki.org/wiki/Separation_Axioms_on_Double_Pointed_Topology/T3_Axiom

Theorem
Let $T_1 = \struct {S, \tau_S}$ be a topological space.
Let $D = \struct {A, \set {\O, A} }$ be the indiscrete topology on an arbitrary doubleton $A = \set {a, b}$.
Let $T = \struct {T_1 \times D, \tau}$ be the double pointed topological space on $T_1$.

Then $T \times D$ is a $T_3$ space if and only if $T$ is also a $T_3$ space.


Proof
Let $S' = S \times \set {a, b}$.
Let $F' \subseteq S'$ such that $F'$ is closed in $T \times D$.
Then $F' = F \times \set {a, b}$ or $F' = F \times \O$ by definition of the double pointed topology.
If $F' = F \times \O$ then $F' = \O$ from Cartesian Product is Empty iff Factor is Empty, and the result is trivial.

So suppose $F' = F \times \set {a, b}$.
From Open and Closed Sets in Multiple Pointed Topology it follows that $F$ is closed in $T$.

Let $y' = \tuple {y, q} \in \relcomp {S'} {F'}$.
Then $y \notin F$.

Suppose that $T$ is a $T_3$ space.
Then by definition:

For any closed set $F$ of $T$ and any point $y \in S$ such that $y \notin F$ there exist disjoint open sets $U, V \in \tau$ such that $F \subseteq U$, $y \in V$.
Then $y' \in V \times \set {a, b}$ and $F' \subseteq U \times \set {a, b}$ and:

$U \times \set {a, b} \cap V \times \set {a, b} = \O$
demonstrating that $T \times D$ is a $T_3$ space.

Now suppose that $T \times D$ is a $T_3$ space.
Then $\exists U', V' \in S': y' \in V'$ and $F' \subseteq U'$ such that $U' \cap V' = \O$.
As $D$ is the indiscrete topology it follows that:

$U' = U \times \set {a, b}$
$V' = V \times \set {a, b}$
for some $U, V \subseteq T$.
From Open and Closed Sets in Multiple Pointed Topology it follows that $U$ and $V$ are open in $T$.
As $U' \cap V' = \O$ it follows that $U \cap V = \O$.
It follows that $F$ and $y$ fulfil the conditions that make $T$ a $T_3$ space.

Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Notes: Part $1$: Basic Definitions: Section $2$. Separation Axioms: $1$





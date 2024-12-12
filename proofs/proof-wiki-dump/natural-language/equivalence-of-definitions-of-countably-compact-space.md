# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Countably_Compact_Space



Theorem
The following definitions of the concept of Countably Compact Space are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is countably compact if and only if:

every countable open cover of $T$ has a finite subcover.
Definition 2
A topological space $T = \struct {S, \tau}$ is countably compact if and only if:

every countable set of closed sets of $T$ whose intersection is empty has a finite subset whose intersection is empty.
That is, $T$ satisfies the countable finite intersection axiom.

Definition 3
A topological space $T = \struct {S, \tau}$ is countably compact if and only if:

every infinite sequence in $S$ has an accumulation point in $S$.
Definition 4
A topological space $T = \left({S, \tau}\right)$ is countably compact if and only if:

every countably infinite subset of $S$ has an $\omega$-accumulation point in $S$.
Definition 5
A topological space $T = \struct {S, \tau}$ is countably compact if and only if:

every infinite subset of $S$ has an $\omega$-accumulation point in $S$.


Proof
$(1) \iff (2)$: Countably Compact Space satisfies Countable Finite Intersection Axiom
Let every countable open cover of $S$ have a finite subcover.
Let $\AA$ be any set of closed sets of $T$ satisfying $\bigcap \AA = \O$.
We define the set:

$\VV := \set {S \setminus A : A \in \AA}$
which is clearly an open cover of $S$.

From De Morgan's Laws: Difference with Union:

$\ds S \setminus \bigcup \VV = \bigcap \set {S \setminus V : V \in \VV} = \bigcap \set{A : A \in \AA} = \O$
and therefore $S = \bigcup \VV$.

By definition, there exists a finite subcover $\tilde \VV \subseteq \VV$.
We define:

$\tilde \AA := \set {S \setminus V : V \in \tilde \VV}$
Then $\tilde \AA \subseteq \AA$ by definition of $\VV$.

Because $\tilde \VV$ covers $S$, it follows directly that:

$\ds \bigcap \tilde \AA = \bigcap \set {S \setminus V : V \in \tilde \VV} = S \setminus \bigcup \tilde \VV = \O$

Thus, in every countable set $\AA$ of closed sets of $T$ satisfying $\ds \bigcap \AA = \O$ exists a finite subset $\tilde \AA$ such that $\ds \bigcap \tilde \AA = \O$.
That is, $S$ satisfies the Countable Finite Intersection Axiom.
$\Box$

The converse works exactly as the previous, but with the roles of the open cover and $\AA$ reversed.
$\Box$


$(1) \implies (4)$: Countably Infinite Set in Countably Compact Space has $\omega$-Accumulation Point
Proof by Contradiction.
Aiming for a contradiction, suppose that $A$ does not have an $\omega$-accumulation point in $X$.

Let $\SS \subseteq \powerset A$ be the set of all finite subsets of $A$.
By Set of Finite Subsets of Countable Set is Countable, we have that $\SS$ is countable.

For all (finite) $F \in \SS$, define:

$U_F = \paren {F \cup \paren {X \setminus A} }^\circ$
where ${}^\circ$ denotes the interior.
By Image of Countable Set under Mapping is Countable, we have that $\CC = \set {U_F: F \in \SS}$ is countable.

By the definition of an $\omega$-accumulation point, it follows that:

$\forall x \in X: \exists U \in \tau: x \in U: \exists F \in \SS: U \cap A = F$
By Set Difference Union Intersection, we have:

$U = \paren {U \cap A} \cup \paren {U \setminus A} \subseteq F \cup \paren {X \setminus A}$
By Set Interior is Largest Open Set, it follows that $\CC$ is a countable open cover for $X$.

Hence, by the definition of a countably compact space, there exists a finite subcover $\CC'$ of $\CC$ for $X$.
By the Principle of Finite Choice, there exists an indexed family $\family {G_V}_{V \mathop \in \CC'}$ of elements of $\SS$ such that:

$\forall V \in \CC': V = U_{G_V} = \paren {G_V \cup \paren {X \setminus A} }^\circ$
Define:

$\ds B = \bigcup_{V \mathop \in \CC'} G_V \subseteq A$
By Union of Finite Sets is Finite, it follows that $B$ is finite.

We can use the definition of a cover to conclude that:

$X \subseteq B \cup \paren {X \setminus A}$
By Relative Complement inverts Subsets, it follows that:

$\paren {X \setminus B} \cap A = \O$
Hence, $A \subseteq B$.
But then by Subset of Finite Set is Finite, it follows that $A$ is finite, a contradiction.
This is proven in Countably Infinite Set in Countably Compact Space has $\omega$-Accumulation Point.
$\Box$


$(4) \implies (3)$
Let $\sequence {x_n}_{n \mathop \in \N}$ be an infinite sequence in $S$.
Let $A \subseteq S$ be the range of $\sequence {x_n}$.

If $A$ is finite, then consider the equality:

$\ds \N = \bigcup_{y \mathop \in A} \set {n \in \N: x_n = y}$
Therefore, there exists a $y \in A$ such that $\set {n \in \N: x_n = y}$ is an infinite set.
Hence, $y$ is an accumulation point of $\sequence {x_n}$.

Otherwise, $A$ is countably infinite.
By assumption, $A$ has an $\omega$-accumulation point $x \in S$.
It follows that $x$ is an accumulation point of $\sequence {x_n}$.
$\Box$


$(5) \implies (4)$
$\Box$


$(3) \implies (1)$
We use a Proof by Contradiction.

Aiming for a contradiction, suppose $S$ has a countably infinite open cover $\set {U_n: n \in \N}$ which does not have a finite subcover.
Then, using the axiom of countable choice, we can obtain a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S$ such that:

$\ds \forall n \in \N: x_n \notin \bigcup_{k \mathop = 0}^n U_k$

Let $x \in S$.
Then, by the definition of a cover, there exists an $n \in \N$ such that $x \in U_n$.
By construction:

$U_n \subseteq \set {x_0, x_1, \ldots, x_{n - 1} }$
Hence $x$ is not an accumulation point of $\sequence {x_n}$.
$\Box$


$(4) \implies (5)$
Follows directly from Infinite Set has Countably Infinite Subset and the definition of an $\omega$-accumulation point.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties





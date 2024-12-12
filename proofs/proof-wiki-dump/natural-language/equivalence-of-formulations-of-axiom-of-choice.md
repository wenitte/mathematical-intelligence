# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Choice



Theorem
The following formulations of the Axiom of Choice are equivalent:

Formulation 1
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.

Formulation 2
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of sets all of which are non-empty, indexed by $I$ which is also non-empty.
Then there exists an indexed family $\family {x_i}_{i \mathop \in I}$ such that:

$\forall i \in I: x_i \in X_i$

That is, the Cartesian product of a non-empty family of sets which are non-empty is itself non-empty.

Formulation 3
Let $\SS$ be a set of non-empty pairwise disjoint sets.
Then there exists a set $C$ such that for all $S \in \SS$, $C \cap S$ has exactly one element.
Symbolically:

$\forall s: \paren {\paren {\O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O} \implies \exists c: \forall t \in s: \exists x: t \cap c = \set x}$
Formulation 4
Let $A$ be a non-empty set.
Then there exists a mapping $f: \powerset A \to A$ such that:

for every non-empty proper subset $x$ of $A$: $\map f x \in x$
where $\powerset A$ denotes the power set of $A$.


Proof
Formulation 1 implies Formulation 2
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of sets all of which are non-empty, indexed by $I$ which is also non-empty.
By hypothesis, Formulation 1 holds.
That is, there exists a choice function on every set of non-empty sets.
Let $f$ be a choice function on $\set{X_i}$.
Let $x_i = \map f {X_i}$.
By definition of choice function, each $x_i \in X_i$.
Therefore, $\family {x_i}_{i \mathop \in I}$ satisfies Formulation 2.
$\Box$


Formulation 2 implies Formulation 1
Suppose that Formulation 2 holds.
That is, the Cartesian product of a non-empty family of non-empty sets is non-empty.
Let $\CC$ be a non-empty set of non-empty sets.
$\CC$ may be converted into an indexed set by using $\CC$ itself as the indexing set and using the identity mapping on $\CC$ to do the indexing.
Then the Cartesian product of all the sets in $\CC$ has at least one element.
An element of such a Cartesian product is a mapping, that is a family whose domain is the indexing set which in this context is $\CC$.
The value of this mapping at each index is an element of the set which bears that index.
So we have a mapping $f$ whose domain is $\CC$ such that:

$A \in \CC \implies \map f A \in A$

Now let $\CC$ be the set of all non-empty subsets of some set $X$.
Then the assertion means that there exists a mapping $f$ whose domain is $\powerset X \setminus \set \O$ such that:

$A \in \powerset X \setminus \set \O \implies \map f A \in A$
That is, Formulation 1 holds.
$\Box$


Formulation 1 implies Formulation 3
Let $\SS$ be the set:

$\SS = \set {s: \O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O}$
Let $c$ be a choice function on $\SS$ and consider the image set $c \sqbrk \SS$:

$c \sqbrk \SS = \set {\map c s: \O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O}$
By the definition of choice function:

$\map c s \in s$
By construction of $\SS$, for any $s \in \SS$:

$s \cap c \sqbrk \SS = \set {\map c s}$
$\Box$


Formulation 3 implies Formulation 1
Let $\BB$ be a non-empty indexed family of non-empty sets indexed by $\II$.
Consider sets of the following form:

$\CC = \set {\tuple {B_i, x}: i \in \II, B_i \in \BB, x \in B_i}$
That is, it is the set of ordered pairs of which the first coordinate is a set $B_i \in \BB$ and the second coordinate is an element of $B_i$.
This is, by construction, a subset of the cartesian product:

$\CC \subseteq \ds \BB \times \bigcup_{i \mathop \in \II} B_i$
By hypothesis all sets $B$ are non-empty.
Thus there exists at least one $\tuple {B_i, x}$ element in $\CC$ for each $B_i \in \CC$.
By Equality of Ordered Pairs, if $B_j \ne B_k$ in $\BB$, then $\tuple {B_i, x} \ne \tuple {B_j, x}$ for all such pairs in $\CC$.
So any two sets $\set {\tuple {B_j, x}: x \in B_j}$ and $\set {\tuple {B_k, x} :x \in B_k}$ are disjoint, by the inequality of their first coordinates.
Then $\CC$ is an indexed family of disjoint non-empty sets in $\BB \times \bigcup_{i \mathop \in \II} B_i$.
Hence $\CC$ satisfies the hypotheses of the third formulation of the Axiom of Choice.

Let $c$ be a set satisfying:

$\forall r \in \CC: c \cap r = \set t$
All elements of $c$ are ordered pairs:

the first coordinate of which is a set in $B_i \in \BB$
and:

the second coordinate of which is an element $x \in B_i$.
Viewed as a relation, each set in $\BB$ bears $c$ to an element in that set.
Every set in $\BB$ bears $c$ to exactly one element inside that set.
So $c$ is in fact a mapping and satisfies the criteria of a choice function as expounded in formulation $(1)$.
$\Box$


Formulation 1 iff Formulation 4
We note from Set equals Union of Power Set that:

$x = \ds \map \bigcup {\powerset x}$
Setting $\powerset A =: s$, we see that from Formulation $1$:

$\ds \paren {\O \notin \powerset A \implies \exists \paren {f: \powerset A \to \bigcup \powerset A}: \forall x \in \powerset A: \map f x \in x}$

That is:

for every non-empty proper subset of $A$
there exists a mapping $f: \powerset A \to A$ such that:

for every non-empty proper subset $x$ of $A$: $\map f x \in x$.
That is Formulation $4$ of the Axiom of Choice
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $3$. The Axiom of Choice and Its Equivalents





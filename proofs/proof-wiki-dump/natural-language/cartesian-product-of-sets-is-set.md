# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Sets_is_Set

Theorem
Let $V$ be a basic universe.
Let $A$ and $B$ be sets in $V$.

Then their cartesian product $A \times B$ is also a set.


Proof
Let $A$ and $B$ be sets in $V$.
Because $V$ is a basic universe, the basic universe axioms apply.

Hence by the axiom of pairing $\set {A, B}$ is a set.
Then by the axiom of unions $\bigcup \set {A, B}$ is also a set.
We have that $A \cup B = \bigcup \set {A, B}$.
By the axiom of powers $\powerset {A \cup B}$ is a set.
Therefore, also by the axiom of powers, so is $\powerset {\powerset {A \cup B} }$.

It remains to be shown that $A \times B$ is a subclass of $\powerset {\powerset {A \cup B} }$.
Let $x \in A \times B$.
Then:

$x = \tuple {a, b}$
for some $a \in A$ and $b \in B$.
By definition of ordered pair:

$x = \set {\set a, \set {a, b} }$
From Set is Subset of Union:

$A \subseteq A \cup B$ and $B \subseteq A \cup B$
Hence by definition of subset:

$a \in A \cup B$
and:

$b \in A \cup B$
Thus:

$\set a \subseteq A \cup B$
and:

$\set {a, b} \subseteq A \cup B$
Thus by definition of power set:

$\set a \in \powerset {A \cup B}$
and:

$\set {a, b} \in \powerset {A \cup B}$
Hence:

$\set {\set a, \set {a, b} } \subseteq \powerset {A \cup B}$
That is:

$\tuple {a, b} \subseteq \powerset {A \cup B}$
and so:

$x \subseteq \powerset {A \cup B}$
which means:

$x \in \powerset {\powerset {A \cup B} }$
Hence by definition of subclass:

$A \times B \subseteq \powerset {\powerset {A \cup B} }$

We have that $\powerset {\powerset {A \cup B} }$ is a set.
By the Axiom of Swelledness it follows that $A \times B$ is also a set.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 7$ Cartesian products: Theorem $7.1$





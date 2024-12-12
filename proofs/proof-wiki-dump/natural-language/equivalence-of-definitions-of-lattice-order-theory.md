# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lattice_(Order_Theory)



Theorem
The following definitions of the concept of lattice in the context of order theory are equivalent:

Definition 1
Let $\struct {S, \preceq}$ be an ordered set.
Suppose that $S$ admits all finite non-empty suprema and finite non-empty infima.
Denote with $\vee$ and $\wedge$ the join and meet operations on $S$, respectively.

Then the ordered structure $\struct {S, \vee, \wedge, \preceq}$ is called a lattice.

Definition 2
Let $\struct {S, \vee, \wedge, \preceq}$ be an ordered structure.

Then $\struct {S, \vee, \wedge, \preceq}$ is called a lattice if and only if:

$(1): \quad \struct {S, \vee, \preceq}$ is a join semilattice
and:

$(2): \quad \struct {S, \wedge, \preceq}$ is a meet semilattice.
Definition 3
Let $\struct {S, \vee}$ and $\struct {S, \wedge}$ be semilattices on a set $S$.
Suppose that $\vee$ and $\wedge$ satisfy the absorption laws, that is, for all $a, b \in S$:

$a \vee \paren {a \wedge b} = a$
$a \wedge \paren {a \vee b} = a$
Let $\preceq$ be the ordering on $S$ defined by:

$\forall a, b \in S: a \preceq b$ if and only if $a \vee b = b$
as on Semilattice Induces Ordering.

Then the ordered structure $\struct {S, \vee, \wedge, \preceq}$ is called a lattice.


Proof
$1$ implies $2$
Let $\struct {S, \vee, \wedge, \preceq}$ adhere to Definition 1.
Then since all finite non-empty suprema exist, we have:

$a \vee b = \sup \set {a, b} \in S$
for all $a, b \in S$, where $\vee$ denotes join.
Hence $\struct {S, \vee, \preceq}$ is a join semilattice.

Similarly, since all finite non-empty infima exist, we have:

$a \wedge b = \inf \set {a, b} \in S$
for all $a, b \in S$, where $\wedge$ denotes meet.
Thus $\struct {S, \wedge, \preceq}$ is a meet semilattice.

In conclusion, $\struct {S, \vee, \wedge, \preceq}$ satisfies Definition 2.
$\Box$


$2$ implies $1$
Let $\struct {S, \vee, \wedge, \preceq}$ adhere to Definition 2.
We will prove that:

$\struct {S, \vee, \preceq}$ is a join semilattice
implies that:

$\struct {S, \preceq}$ admits all finite non-empty suprema

From Supremum of Singleton, $\struct {S, \preceq}$ admits suprema of singletons.
By definition of join, it also admits suprema of doubletons.

Suppose now inductively that $\sup T \in S$ for all subsets $T$ of $S$ that have $n$ elements, where $n \ge 2$ is a natural number.
Let now $V \subseteq S$ have $n + 1$ elements.
Then $V = T \cup \set s$ for some $s \in S$ and $T \subseteq S$ with $n$ elements.
By Supremum of Suprema, we have that:

$\sup V = \sup \set {\sup T, \sup \set s}$
By definition of join, this means $\sup V = \sup T \vee s$.
Therefore, since $\struct {S, \vee, \preceq}$ is a join semilattice, $\sup V \in S$.
By induction, $\sup T \in S$ for all finite non-empty $T \subseteq S$.
That is, $S$ admits all finite non-empty suprema.

By the Global Duality Principle and Dual Pairs (Order Theory), it follows that if:

$\struct {S, \wedge, \preceq}$ is a meet semilattice
then it also true that:

$\struct {S, \preceq}$ admits all finite non-empty infima

Hence $\struct {S, \vee, \wedge, \preceq}$ satisfies Definition 1.
$\Box$


$2$ implies $3$
Suppose that $\struct {S, \vee, \wedge, \preceq}$ adheres to Definition 2.
By virtue of Join Semilattice is Semilattice and Meet Semilattice is Semilattice, $\struct {S, \vee}$ and $\struct {S, \wedge}$ are semilattices.
From Ordering Induced by Join Semilattice, the ordering mentioned in Definition 3 coincides with $\preceq$.

The absorption laws stated are proved on Join Absorbs Meet and Meet Absorbs Join.

Hence $\struct {S, \vee, \wedge, \preceq}$ adheres to Definition 3.
$\Box$


$3$ implies $2$
Suppose that $\struct {S, \vee, \wedge, \preceq}$ adheres to Definition 3.
Then $\preceq$ is thus defined by, for all $a, b \in S$:

$a \preceq b$ if and only if $a \vee b = b$

Suppose now that $a \vee b = b$.
Then by absorption:

$a = a \wedge \paren {a \vee b} = a \wedge b$
Conversely, if $a \wedge b = a$, then by the other absorption law:

$a \vee b = \paren {a \wedge b} \vee b = b$
We conclude that also $a \preceq b$ if and only if $a \wedge b = a$.

Next, to prove $a \vee b$ is a supremum for $\set {a, b}$.
We have by absorption that $a = a \wedge \paren {a \vee b}$ so that $a \preceq a \vee b$, and similarly for $b$.
Thus $a \vee b$ is an upper bound for $\set {a, b}$.

Suppose that $c$ is an upper bound for $\set {a, b}$.
Then:














\(\ds c\)

\(=\)







\(\ds a \vee c\)





because $a \preceq c$














\(\ds \)

\(=\)







\(\ds a \vee \paren {b \vee c}\)





because $b \preceq c$














\(\ds \)

\(=\)







\(\ds \paren {a \vee b} \vee c\)





$\vee$ is associative



whence $a \vee b \preceq c$.
Thus $a \vee b \in S$ is a supremum for $\set {a, b}$.

Finally, we will show that $a \wedge b$ is an infimum for $\set {a, b}$.
By Local Duality, $a \wedge b$ must be shown to be a supremum for $\set {a, b}$ with respect to the dual ordering $\succeq$ of $\preceq$.

Since we have established that $a \succeq b$ if and only if $a \wedge b = b$, this directly follows from the above by interchanging $\wedge$ and $\vee$.
Thus we have demonstrated $\struct {S, \vee, \wedge, \preceq}$ satisfies Definition 2.
$\blacksquare$






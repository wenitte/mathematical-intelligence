# 

Source: https://proofwiki.org/wiki/Right_Order_Topology_on_Strictly_Positive_Integers_as_Neighborhood_Space



Theorem
Let $\Z_{>0}$ denote the set of (strictly) positive integers.
Let $n \in \Z_{>0}$.
Let $U \subseteq \Z_{>0}$ be defined as being a neighborhood of $n$ if and only if

$\forall m \in \Z: m \ge n \implies m \in U$

Then the set $\NN$ of all $U$ for all $n \in \Z_{>0}$ forms a neighborhood space which is the same as the right order space on $\Z_{>0}$.


Proof
First it is noted that a neighborhood of $n$ is exactly an element of the right order topology on $\Z_{>0}$.
It remains to be shown that $\NN$ actually forms a neighborhood space.

Let $\NN_n$ denote the set of all neighborhood of a given $n \in \Z_{>0}$.
Checking the neighborhood space axioms in turn:


Neighborhood Space Axiom $\text N 1$
We have that $n \ge n$.
Hence the set defined as:

$U_n = \set {m \in \Z: m \ge n}$
is an element of $\NN_n$.
Thus $\NN_n$ is not empty.

$n \in U_n$.
Hence $\NN$ satisfies neighborhood space axiom $\text N 1$.
$\Box$


Neighborhood Space Axiom $\text N 2$
Let $U \in \NN_n$.
Then $U$ is of the form:

$\forall m \in \Z: m \ge n \implies m \in U$
As $n \ge n$, it follows that $n \in U$.
Hence $\NN$ satisfies neighborhood space axiom $\text N 2$.
$\Box$


Neighborhood Space Axiom $\text N 3$
Let $U \in \NN_n$.
Then:

$\forall m \in \Z: m \ge n \implies m \in U$
Let $V \subseteq \Z_{>0}$ such that $V \supseteq U$.
By definition of superset:

$x \in U \implies x \in V$
Hence:

$\forall m \in \Z: m \ge n \implies m \in V$
and it is seen that $V \in \NN_n$.
Hence $\NN$ satisfies neighborhood space axiom $\text N 3$.
$\Box$


Neighborhood Space Axiom $\text N 4$
Let $U, V \in \NN_n$.
Then by definition:

$\forall m \in \Z: m \ge n \implies m \in U$
$\forall m \in \Z: m \ge n \implies m \in V$
and so by definition of set intersection:

$\forall m \in \Z: m \ge n \implies m \in U \cap V$
Hence $\NN$ satisfies neighborhood space axiom $\text N 4$.
$\Box$


Neighborhood Space Axiom $\text N 5$
Let $U \in \NN_n$.
Then by definition:

$\forall m \in \Z: m \ge n \implies m \in U$
Let $U_n$ be the set defined as:

$U_n = \set {m \in \Z: m \ge n}$
It follows that $U_n \subseteq U$.
Let $y \in U_n$.
Then:

$y \ge n$
Let $\NN_y$ denote the set of all neighborhoods of $y$.
We have that:

$\forall m \in \Z: m \ge y \implies m \ge n$
and so:

$U_n \in \NN_y$.
Hence $\NN$ satisfies neighborhood space axiom $\text N 5$.
$\Box$

It follows from Correspondence between Neighborhood Space and Topological Space that $\NN$ is the right order space on $\Z_{>0}$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces





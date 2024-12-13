# 

Source: https://proofwiki.org/wiki/Intersection_of_Sets_of_Integer_Multiples



Theorem
Let $m, n \in \Z$ such that $m n \ne 0$.
Let $m \Z$ denote the set of integer multiples of $m$.
Then:

$m \Z \cap n \Z = \lcm \set {m, n} \Z$
where $\lcm$ denotes lowest common multiple.


Proof
Let $x \in m \Z \cap n \Z$.
Then by definition of set intersection:

$m \divides x$ and $n \divides x$
So from LCM Divides Common Multiple:

$\lcm \set {m, n} \divides x$
and so $x \in \lcm \set {m, n} \Z$
That is:

$m \Z \cap n \Z \subseteq \lcm \set {m, n} \Z$
$\Box$

Now suppose $x \in \lcm \set {m, n} \Z$.
Then $\lcm \set {m, n} \divides x$.
Thus by definition of lowest common multiple:

$m \divides x$
and:

$n \divides x$
and so:

$x \in m \Z \land x \in n \Z$
That is:

$x \in m \Z \cap n \Z$
and so:

$\lcm \set {m, n} \Z \subseteq m \Z \cap n \Z$
$\Box$

The result follows by definition of set equality.
$\blacksquare$


Examples
Example: $2 \Z \cap 7 \Z$
$2 \Z \cap 7 \Z = 14 \Z$


Example: $\paren {3 \Z \cap 6 \Z} \cup 18 \Z$
$\paren {3 \Z \cap 6 \Z} \cup 18 \Z = 6 \Z$


Example: $6 \Z \cap 15 \Z$
$6 \Z \cap 15 \Z = 30 \Z$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $10$





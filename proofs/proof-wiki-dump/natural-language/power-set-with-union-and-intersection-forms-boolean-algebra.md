# 

Source: https://proofwiki.org/wiki/Power_Set_with_Union_and_Intersection_forms_Boolean_Algebra



Theorem
Let $S$ be a set, and let $\powerset S$ be its power set.
Denote with $\cup$, $\cap$ and $\complement$ the operations of union, intersection and complement on $\powerset S$, respectively.

Then $\struct {\powerset S, \cup, \cap, \complement}$ is a Boolean algebra.


Proof
Taking the criteria for definition 1 of a Boolean algebra in turn:


$(\text {BA} 0):$ Closure
$\powerset S$ is closed under both $\cup$ and $\cap$:

Power Set is Closed under Intersection
Power Set is Closed under Union
Power Set is Closed under Complement
$\Box$


$(\text {BA} 1):$ Commutativity
Both $\cup$ and $\cap$ are commutative from Intersection is Commutative and Union is Commutative.
$\Box$


$(\text {BA} 2):$ Distributivity
Both $\cup$ and $\cap$ distribute over the other, from Union Distributes over Intersection and Intersection Distributes over Union.
$\Box$


$(\text {BA} 3):$ Identity Elements
Both $\cup$ and $\cap$ have identities:
From Power Set with Intersection is Monoid‎, $S$ is the identity for $\cap$. 
From Power Set with Union is Monoid, $\O$ is the identity for $\cup$.
$\Box$


$(\text {BA} 4):$ Complements
From Union with Complement:

$\forall A \in S: A \cup \map \complement A = S$
which is the identity for $\cap$.

From Intersection with Complement:

$\forall A \in S: A \cap \map \complement A = \O$
which is the identity for $\cup$.
$\Box$

All the criteria for a Boolean algebra are therefore fulfilled.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.5$
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $1$. Elementary Operations on Sets
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$: Exercise $1$





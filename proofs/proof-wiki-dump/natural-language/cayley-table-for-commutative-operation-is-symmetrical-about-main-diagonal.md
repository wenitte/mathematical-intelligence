# 

Source: https://proofwiki.org/wiki/Cayley_Table_for_Commutative_Operation_is_Symmetrical_about_Main_Diagonal



Definition
Let $\struct {S, \circ}$ be an algebraic structure.

Then:

the Cayley table for $\struct {S, \circ}$ is symmetrical about the main diagonal
if and only if:

$\circ$ is a commutative operation.


Proof
Let $\CC$ denote the Cayley table for $\struct {S, \circ}$.
Let $\sqbrk c_{a b}$ denote the entry of $\CC$ corresponding to the element $a \circ b$ of $S$.
That is, $\sqbrk c_{a b}$ is the entry in the row headed by $a$ and the column headed by $b$.


Necessary Condition
Let $\circ$ be a commutative operation.
Then by definition:

$\forall a, b \in S: a \circ b = b \circ a$
Thus:

$\sqbrk c_{a b} = \sqbrk c_{b a}$
and so:

the entry in the row headed by $a$ and the column headed by $b$
is the same as:

the entry in the row headed by $b$ and the column headed by $a$.
This applies to all $a, b \in \S$.
Hence for all $a \in S$, the row headed by $a$ is the same as the column headed by $a$.
It follows that $\CC$ is symmetrical about the main diagonal.


Sufficient Condition
Let $\CC$ is symmetrical about the main diagonal.
Then:

$\forall a, b \in S: \sqbrk c_{a b} = \sqbrk c_{b a}$
That is, by the definition of the Cayley table:

$\forall a, b \in S: a \circ b = b \circ a$
Thus, by definition, $\circ$ is a commutative operation.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.4: \ 6$
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 5$: The Multiplication Table
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{A}$





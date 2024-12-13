# 

Source: https://proofwiki.org/wiki/Relation/Examples/Ordering_on_Arbitrary_Sets_of_Integers/Not_Many-to-One

Example of Relation which is not Many-to-One
Let $A = \set {1, 2, 3, 4}$ and $B = \set {1, 2, 3}$ be sets of integers.
Consider the following diagram, where:

$A$ runs along the top
$B$ runs down the left hand side
a relation $\RR$ between $A$ and $B$ is indicated by marking with $\bullet$ every ordered pair $\tuple {a, b} \in A \times B$ which is in the truth set of $\RR$
$\begin {array} {r|rrrr}
A \times B & 1 & 2 & 3 & 4 \\
\hline
1 & \bullet & \bullet & \bullet & \circ \\
2 & \bullet & \bullet &   \circ & \circ \\
3 & \bullet &   \circ &   \circ & \circ \\
\end {array}$
This relation $\RR$ can be described as:

$\RR = \set {\tuple {x, y} \in A \times B: x + y \le 4}$

$\RR$ is not a many-to-one relation.


Proof
For example we have:

$\tuple {1, 1} \in \RR$
and:

$\tuple {1, 2} \in \RR$
Hence $\RR$ is not many-to-one by definition.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 4$. Relations; functional relations; mappings: Example $4.4$





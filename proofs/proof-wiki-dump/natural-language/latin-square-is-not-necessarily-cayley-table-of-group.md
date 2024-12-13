# 

Source: https://proofwiki.org/wiki/Latin_Square_is_not_necessarily_Cayley_Table_of_Group

Theorem
While it is true that the Cayley table of a (finite) group is in the form of a Latin square it is not necessarily the case that a Latin square is the Cayley table of a group.


Proof
Proof by Counterexample:
Let $\struct {S, \circ}$ be the algebraic structure defined by the following Cayley table:

$\begin{array}{c|ccccc}
\circ & e & a & b & c & d \\
\hline
e & e & a & b & c & d  \\
a & a & e & d & b & c  \\
b & b & c & e & d & a  \\
c & c & d & a & e & b  \\
d & d & b & c & a & e  \\
\end{array}$
By inspection it can be seen that the Cayley table for $\struct {S, \circ}$ is a Latin square.
However, we have that:

$\paren {a \circ b} \circ c = d \circ c = a$
$a \circ \paren {b \circ c} = a \circ d = c$
Thus $\circ$ is not an associative operation.
So, by definition, $\struct {S, \circ}$ is not a group.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 5$: The Multiplication Table





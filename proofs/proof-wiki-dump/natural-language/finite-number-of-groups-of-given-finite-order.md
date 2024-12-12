# 

Source: https://proofwiki.org/wiki/Finite_Number_of_Groups_of_Given_Finite_Order

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Then there exists a finite number of types of group of order $n$.


Proof
For any group $\struct {G, \circ}$ of order $n$ and any set of $n$ elements, $X$ can be the underlying set of a group which is isomorphic to $\struct {G, \circ}$, as follows:
Choose a bijection $\phi: G \to X$.
Define the group operation $*$ on $X$ by the rule:

$\map \phi {g_1} * \map \phi {g_2} = \map \phi {g_1 \circ g_2}$
for all $g_1, g_2 \in G$.
By definition, $\phi$ is an isomorphism.
From Isomorphism Preserves Groups it follows that $\struct {X, *}$ is a group.
Thus all groups of order $n$ of all possible types appear among all possible arrangements of binary operation.
But from Count of Binary Operations on Set, this count is $n^{\paren {n^2} }$.
This is the upper bound to the number of types of group of order $n$.
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.2$





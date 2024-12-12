# 

Source: https://proofwiki.org/wiki/Empty_Set_is_Unique



Theorem
The empty set is unique.


Proof 1
Let $\O$ and $\O'$ both be empty sets.
From Empty Set is Subset of All Sets, $\O \subseteq \O'$, because $\O$ is empty.
Likewise, we have $\O' \subseteq \O$, since $\O'$ is empty.
Together, by the definition of set equality, this implies that $\O = \O'$.

Thus there is only one empty set.
$\blacksquare$


Proof 2
Let $A$ and $B$ both be empty sets.
Thus:

$\forall x: \neg \paren {x \in A}$
and:

$\forall x: \neg \paren {x \in B}$
Hence:

$x \notin A \iff x \notin B$
and so:

$x \in A \iff x \in B$
vacuously.

From the Axiom of Extension:

$\forall x: \paren {x \in A \iff x \in B} \iff A = B$

Hence the result.
$\blacksquare$


Proof 3
From Axiom of the Empty Set in the context of class theory, the empty class is a set.
The result follows from Empty Class Exists and is Unique.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 1$
1989: George S. Boolos and Richard C. Jeffrey: Computability and Logic (3rd ed.) ... (previous) ... (next): $1$ Enumerability
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): null set (empty set)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): null set (empty set)





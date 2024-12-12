# 

Source: https://proofwiki.org/wiki/Count_of_Commutative_Quasigroups_on_Set_given_Count_of_Commutative_Algebra_Loops



Theorem
Let $S$ be a finite set of cardinality $n$.
Let $e \in S$.
Let there be $m$ commutative operations $\oplus$ on $S$ such that $\struct {S, \oplus}$ is an algebra loop whose identity is $e$.

Then there are $n! m$ commutative binary operations $\otimes$ on $S$ such that $\struct {S, \otimes}$ is a quasigroup.


Proof
Consider a commutative algebra loop $\struct {S, \oplus}$ whose identity is $e$.
Consider the row of the Cayley table of $S$ which is headed by $e$.
There are $n!$ permutations of the elements of this row.
Each of these corresponds to a different commutative operation on $S$, as the corresponding column headed by $e$ is constrained to be the same as the row.
The result follows by the Product Rule for Counting.
$\blacksquare$


Examples
Order 3
Let $S$ have exactly $3$ elements.
There are $6$ quasigroups $\struct {S, \otimes}$ on $S$ such that $\otimes$ is a commutative operation.


Order 4
Let $S$ have exactly $4$ elements.
There are $96$ quasigroups $\struct {S, \otimes}$ on $S$ such that $\otimes$ is a commutative operation.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.9 \ \text {(c)}$





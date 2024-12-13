# 

Source: https://proofwiki.org/wiki/Length_of_Binary_Sequence_Code_is_Primitive_Recursive

Theorem
Let the function $\map {\operatorname{bincodelen} } n$ be defined as the least $m$ such that:

For every $i \ge m$, $\map {\operatorname{bincode} } {n, i} = 0$
where $\operatorname{bincode}$ is defined as in Binary Sequence Codes are Primitive Recursive.
Then, $\operatorname{bincodelen}$ is primitive recursive.

Proof
The base-$2$ representation of $n$ is never longer than $n$ digits.
Therefore, there are at most $n$ digits that are $0$.
By definition of $\operatorname{bincode}$, there are thus at most $n$ nonzero values.
Thus, the following definition is correct:

$\map {\operatorname{bincodelen} } n = \map {\mu m \le n} {\map {\mu i \le n} {i \ge m \land \map {\operatorname{bincode} } {n, i} \ne 0} > n}$
For, the inner minimization attempts to find some counterexample $i$ to the proposition that $m$ is the value of the function, as defined.
If no such counterexample is found, by the definition of bounded minimization, the result is $n + 1 > n$.

It follows from:

Binary Sequence Codes are Primitive Recursive
Set Operations on Primitive Recursive Relations
Ordering Relations are Primitive Recursive
Bounded Minimization is Primitive Recursive
Equality Relation is Primitive Recursive
that $\operatorname{bincodelen}$ is primitive recursive.
$\blacksquare$






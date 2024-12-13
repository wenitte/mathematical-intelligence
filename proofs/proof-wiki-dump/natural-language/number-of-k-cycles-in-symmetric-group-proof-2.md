# 

Source: https://proofwiki.org/wiki/Number_of_k-Cycles_in_Symmetric_Group/Proof_2

Theorem
Let $n \in \N$ be a natural number.
Let $S_n$ denote the symmetric group on $n$ letters.
Let $k \in N$ such that $k \le n$.

The number of elements $m$ of $S_n$ which are $k$-cycles is given by:

$m = \paren {k - 1}! \dbinom n k = \dfrac {n!} {k \paren {n - k}!}$


Proof
Suppose $n \ge k$, and consider the number of $k$-cycles in $S_n$.
A $k$-cycle can be represented by a selection of $k$ elements from $n$ without any repeats.
From Number of Permutations, the number of permutations of $k$ elements from $n$ possible elements is $\dfrac {n!} {\paren {n - k}!}$.
However, each such string is merely a representation of an $k$-cycle; the $k$-cycle itself does not depend on the starting elements in the string.
Since there are $k$ possible starting elements, we must divide this number by $k$.

Hence, the number of $m$-cycles is

$\dfrac {n!} {k \paren {n - k}!}$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Construction_of_Permutations/Proof_1



Theorem
The ${}^n P_n$ permutations of $n$ objects can be generated algorithmically.

By Number of Permutations, that number is given by:

${}^n P_n = n!$
where $n!$ denotes the factorial of $n$.
This will be demonstrated to hold.


Proof
The following is an inductive method of creating all the permutations of $n$ objects.


Base Case
There is clearly one way to arrange one object in order.


Inductive Hypothesis
We assume that we have constructed all $n!$ permutations of $n$ objects.


Induction Step
Without loss of generality, let a set $S_n$ of $n$ objects be $\set {1, 2, \ldots, n}$.

Take a permutation of $S_n$:

$a_1 \, a_2 \, a_3 \, \ldots \, a_n$
Now we take the number $n + 1$.
We can form $n + 1$ permutations from this one by putting $n + 1$ in all places possible:

$a_{n + 1} \, a_1 \, a_2 \, a_3 \, \ldots \, a_n, \quad a_1 \, a_{n + 1} \, a_2 \, a_3 \, \ldots \, a_n, \quad a_1 \, a_2 \, a_{n + 1} \, a_3 \, \ldots \, a_n, \quad \ldots, \quad a_1 \, a_2 \, a_3 \, \ldots \, a_n \, a_{n + 1}$

It is clear that all permutations of $n + 1$ objects can be obtained in this manner, and no permutation is obtained more than once.

As there are ${}^n P_n$ permutations on $n$ objects, there are $\paren {n + 1} \times {}^n P_n$ permutations on $n + 1$ objects.

Hence by induction, and the recursive definition of the factorial:

${}^n P_n = n!$
$\blacksquare$


Example
From the permutation of $4$ objects  $3 1 2 4$, the following permutations of $5$ objects can be made as follows:

$5 3 1 2 4$
$3 5 1 2 4$
$3 1 5 2 4$
$3 1 2 5 4$
$3 1 2 4 5$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials





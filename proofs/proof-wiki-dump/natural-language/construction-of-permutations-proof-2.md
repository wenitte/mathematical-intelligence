# 

Source: https://proofwiki.org/wiki/Construction_of_Permutations/Proof_2



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
Without loss of generality, let a set $S_n$ of $n$ objects be $\left\{{1, 2, \ldots, n}\right\}$.

Take a permutation of $S_n$:

$a_1 \, a_2 \, a_3 \, \ldots \, a_n$
Construct the array:

$a_1 \, a_2 \, a_3 \, \ldots \, a_n \, \dfrac 1 2, \quad a_1 \, a_2 \, a_3 \, \ldots \, a_n \, \dfrac 3 2, \quad a_1 \, a_2 \, a_3 \, \ldots \, a_n \, \dfrac 5 2, \quad \ldots, \quad a_1 \, a_2 \, a_3 \, \ldots \, a_n \, \left({n + \dfrac 1 2}\right)$
This will contain $n + 1$ objects.
Now rename the elements of each permutation using the numbers $\left\{ {1, 2, \ldots, n}\right\}$ preserving order.
It is clear that all permutations of $n + 1$ objects can be obtained in this manner, and no permutation is obtained more than once.

As there are ${}^n P_n$ permutations on $n$ objects, there are $\left({n + 1}\right) \times {}^n P_n$ permutations on $n + 1$ objects.

Hence by induction, and the recursive definition of the factorial:

${}^n P_n = n!$
$\blacksquare$


Example
From the permutation of $4$ objects $3 1 2 4$, the following permutations of $5$ objects can be made as follows:

$3 1 2 4 \dfrac 1 2$
$3 1 2 4 \dfrac 3 2$
$3 1 2 4 \dfrac 5 2$
$3 1 2 4 \dfrac 7 2$
$3 1 2 4 \dfrac 9 2$
Renaming according to size:

$4 2 3 5 1$
$4 1 3 5 2$
$4 1 2 5 3$
$3 1 2 5 4$
$3 1 2 4 5$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials





# 

Source: https://proofwiki.org/wiki/Number_of_Permutations_of_All_Elements



Theorem
Let $S$ be a set of $n$ elements.

The number of permutations of $S$ is $n!$


Proof 1
We are seeking to calculate the number of $r$-permutations of $S$, that is ${}^n P_r$, where $r = n$.
Hence:














\(\ds {}^n P_n\)

\(=\)







\(\ds \dfrac {n!} {\paren {n - n}!}\)





Number of Permutations














\(\ds \)

\(=\)







\(\ds n!\)





Definition of Factorial



$\blacksquare$


Proof 2
We pick the elements of $S$ in an arbitrary order.
There are $n$ elements of $S$, so there are $n$ options for the first element.
Then there are $n - 1$ elements left in $S$ that we have not picked, so there are $n - 1$ options for the second element.
Then there are $n - 2$ elements left, so there are $n - 2$ options for the third element.
And so on, until there are $3$, then $2$, then $1$ remaining elements.
Each mapping is independent of the choices made for all the other mappings.
So, by the Product Rule for Counting, the total number of ordered selections from $S$:














\(\ds {}^n P_n\)

\(=\)







\(\ds n \paren {n - 1} \paren {n - 2} \cdots 3 \times 2 \times 1\)




















\(\ds \)

\(=\)







\(\ds n!\)





Definition of Factorial



$\blacksquare$


Proof 3
From the definition, it can be seen that a bijection $f: S \to S$ is an $n$-permutation.
Hence, from Cardinality of Set of Bijections the number of $n$-permutations on a set of $n$ elements is:

${}^n P_n = \dfrac {n!} {\paren {n - n}!} = n!$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $24$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $24$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): permutation: 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): permutation: 1.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): permutation





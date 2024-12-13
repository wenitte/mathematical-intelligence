# 

Source: https://proofwiki.org/wiki/Number_of_Permutations



Theorem
Let $S$ be a set of $n$ elements.
Let $r \in \N: r \le n$.

The number of $r$-permutations of $S$ is:

${}^n P_r = \dfrac {n!} {\paren {n - r}!}$

Using the falling factorial symbol, this can also be expressed:

${}^n P_r = n^{\underline r}$


Corollary
Let $S$ be a set of $n$ elements.

The number of permutations of $S$ is $n!$


Proof 1 (Informal)
We pick the elements of $S$ in any arbitrary order.
There are $n$ elements of $S$, so there are $n$ options for the first element.
Then there are $n - 1$ elements left in $S$ that we haven't picked, so there are $n-1$ options for the second element.
Then there are $n - 2$ elements left, so there are $n - 2$ options for the third element.
And so on, to the $r$th element of our selection: we now have $n - \paren {r - 1}$ possible choices.
Each mapping is independent of the choices made for all the other mappings, so by the Product Rule for Counting, the total number of ordered selections from $S$:














\(\ds {}^n P_r\)

\(=\)







\(\ds n \paren {n - 1} \paren {n - 2} \cdots \paren {n - r + 1}\)




















\(\ds \)

\(=\)







\(\ds n \paren {n - 1} \paren {n - 2} \ldots \paren {n - r + 1} \dfrac {\paren {n - r}!} {\paren {n - r}!}\)





multiplying top and bottom by $\paren {n - r}!$














\(\ds \)

\(=\)







\(\ds \dfrac {n!} {\paren {n - r}!}\)





simplifying the numerator



$\blacksquare$


Proof 2 (Formal)
From the definition, an $r$-permutation of $S$ is an ordered selection of $r$ elements of $S$.
It can be seen that an $r$-permutation is an injection from a subset of $S$ into $S$.

From Cardinality of Set of Injections‎, we see that the number of $r$-permutations ${}^n P_r$ on a set of $n$ elements is given by:

${}^n P_r = \dfrac {n!} {\paren {n - r}!}$
$\blacksquare$


Examples
$4$ from $52$
The number of ways of choosing $4$ objects in order from a set of $52$ (for example, cards from a deck) is:

${}^{52} P_4 = 52 \times 51 \times 50 \times 49 = \dfrac {52!} {48!} = 6 \, 497 \, 400$


Numbers Greater than $200$ from $\set {1, 2, 3, 4}$
Let $N$ be the number of ways you can make a number greater than $200$ using the digits $1$, $2$, $3$ and $4$ no more than once each.
Then:

$N = 42$


Even Integers from $\set {1, 2, 3, 4}$
Let $N$ be the number of even integers which can be made using all the digits $1$, $2$, $3$ and $4$.
Then:

$N = 12$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): permutation: 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): permutation: 1.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): permutation





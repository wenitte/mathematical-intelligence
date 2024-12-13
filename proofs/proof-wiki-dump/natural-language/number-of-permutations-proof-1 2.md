# 

Source: https://proofwiki.org/wiki/Number_of_Permutations/Proof_1

Theorem
Let $S$ be a set of $n$ elements.
Let $r \in \N: r \le n$.

The number of $r$-permutations of $S$ is:

${}^n P_r = \dfrac {n!} {\paren {n - r}!}$

Using the falling factorial symbol, this can also be expressed:

${}^n P_r = n^{\underline r}$


Proof
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


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The value of ${}_n P_r$
1964: A.M. Yaglom and I.M. Yaglom: Challenging Mathematical Problems With Elementary Solutions: Volume $\text { I }$ ... (previous) ... (next): Problems
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Theorem $\text {3-1}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials





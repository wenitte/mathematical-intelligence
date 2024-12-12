# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Subsets/Proof_2

Theorem
Let $S$ be a set such that $\card S = n$.
Let $m \le n$.

Then the number of subsets $T$ of $S$ such that $\card T = m$ is:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m}!}$


Proof
Let $\dbinom n m$ denote the number of subsets of $m$ elements of $S$.
From Number of Permutations, the number of $m$-permutations of $S$ is:

${}^m P_n = \dfrac {n!} {\paren {n - m}!}$
Consider the way ${}^m P_n$ can be calculated.
First one makes the selection of which $m$ elements of $S$ are to be arranged.
This number is $\dbinom n m$.
Then for each selection, the number of different arrangements of these is $m!$, from Number of Permutations.
So:














\(\ds m! \cdot \dbinom n m\)

\(=\)







\(\ds {}^m P_n\)





Product Rule for Counting














\(\ds \)

\(=\)







\(\ds \frac {n!} {\paren {n - m}!}\)





Number of Permutations








\(\ds \leadsto \ \ \)





\(\ds \dbinom n m\)

\(=\)







\(\ds \frac {n!} {m! \paren {n - m}!}\)





Product Rule for Counting



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The value of ${}_n C_r$
1964: A.M. Yaglom and I.M. Yaglom: Challenging Mathematical Problems With Elementary Solutions: Volume $\text { I }$ ... (previous) ... (next): Problems
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Theorem $\text {3-2}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients





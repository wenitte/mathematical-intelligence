# 

Source: https://proofwiki.org/wiki/Center_of_Symmetric_Group_is_Trivial/Proof_2

Theorem
Let $n \in \N$ be a natural number.
Let $S_n$ denote the symmetric group of order $n$.
Let $n \ge 3$.

Then the center $\map Z {S_n}$ of $S_n$ is trivial.


Proof
Let $\pi \in S_n$ such that $\pi \ne e$ be arbitrary.
Let $i, j \in \set {1, 2, \ldots, n}$ such that $\map \pi i = j \ne i$.
Let $m = \map \pi j$.
Then $m \ne j$.
Since $n \ge 3$, there exists $k \in \N$ such that $k \ne j, k \ne m$.
Let $\rho \in S_n$ interchange $j, k$ and fix everything else.
Then $\rho$ fixes $m$.
Then:














\(\ds \map {\rho \pi} j\)

\(=\)







\(\ds \map \rho m\)




















\(\ds \)

\(=\)







\(\ds m\)




















\(\ds \)

\(=\)







\(\ds \map \pi j\)









By definition of $\rho$:

$k = \map \rho j$
So:

$\map \pi k = \map {\pi \rho} j$
But because permutations are injective:

$\map \pi j \ne \map \pi k$
Thus:

$\map {\rho \pi} j \ne \map {\pi \rho} j$
That is, there exists a $\rho$ with which $\pi$ does not commute.
So $\pi \notin \map Z {S_n}$.
As $\pi \ne e$ is arbitrary, it follows that only $e$ is in $\map Z {S_n}$.
That is:

$\map Z {S_n} = \set e$
Hence, by definition, $\map Z {S_n}$ is trivial.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Center_of_Symmetric_Group_is_Trivial/Proof_1

Theorem
Let $n \in \N$ be a natural number.
Let $S_n$ denote the symmetric group of order $n$.
Let $n \ge 3$.

Then the center $\map Z {S_n}$ of $S_n$ is trivial.


Proof
From its definition, the identity (here denoted by $e$) of a group $G$ commutes with all elements of $G$.
So by definition of center:

$e \in \map Z {S_n}$

By definition of center:

$\map Z {S_n} = \set {\tau \in S_n: \forall \sigma \in S_n: \tau \sigma = \sigma \tau}$
Let $\pi, \rho \in S_n$ be permutations of $\N_n$.
Let us choose an arbitrary $\pi \in S_n: \pi \ne e, \map \pi i = j, i \ne j$.
Since $n \ge 3$, we can find $\rho \in S_n$ which interchanges $j$ and $k$ (where $k \ne i, j$) and fixes everything else.
It follows that $\rho^{-1}$ does the same thing, and in particular both $\rho$ and $\rho^{-1}$ fix $i$.

So:














\(\ds \map {\rho \pi \rho^{-1} } i\)

\(=\)







\(\ds \map {\rho \pi} i\)




















\(\ds \)

\(=\)







\(\ds \map \rho j\)




















\(\ds \)

\(=\)







\(\ds k\)










So:

$\map {\rho \pi \rho^{-1} } i = k \ne j = \map \pi i$
From Conjugate of Commuting Elements, if $\rho$ and $\pi$ were to commute, $\rho \pi \rho^{-1} = \pi$.
But they don't.
Whatever $\pi \in S_n$ is, you can always find a $\rho$ such that $\rho \pi \rho^{-1} \ne \pi$.
So no non-identity elements of $S_n$ commute with all elements of $S_n$.
Hence:

$\map Z {S_n} = \set e$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 79 \beta$





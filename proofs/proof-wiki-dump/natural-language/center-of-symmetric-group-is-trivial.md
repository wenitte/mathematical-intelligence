# 

Source: https://proofwiki.org/wiki/Center_of_Symmetric_Group_is_Trivial



Theorem
Let $n \in \N$ be a natural number.
Let $S_n$ denote the symmetric group of order $n$.
Let $n \ge 3$.

Then the center $\map Z {S_n}$ of $S_n$ is trivial.


Proof 1
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


Proof 2
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


Also see
Symmetric Group is not Abelian


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $11$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 50 \alpha$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $6 \ \text{(ii)}$





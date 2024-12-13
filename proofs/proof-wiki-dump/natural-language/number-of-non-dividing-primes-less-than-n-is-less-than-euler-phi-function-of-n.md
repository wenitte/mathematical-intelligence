# 

Source: https://proofwiki.org/wiki/Number_of_Non-Dividing_Primes_Less_than_n_is_Less_than_Euler_Phi_Function_of_n

Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\map w n$ denote the number of primes strictly less than $n$ which are not divisors of $n$.
Let $\map \phi n$ denote the Euler $\phi$ function of $n$.

Then:

$\map w n < \map \phi n$


Proof
Let $P = \set {p < n: p \text { prime}, p \nmid n}$.
Let $Q = \set {0 < q < n: q \perp n}$, where $q \perp n$ denotes that $q$ and $n$ are coprime.

Let $p \in P$.
From Prime not Divisor implies Coprime, $p$ is coprime to $n$.
That is:

$p \in Q$
So, by definition of subset:

$P \subseteq Q$

From Integer is Coprime to 1:

$1 \in Q$
But as One is not Prime:

$1 \notin P$
Thus $P \subsetneq Q$ and so:

$\card P < \card Q$

By definition of $\map w n$:

$\card P = \map w n$
and by definition of Euler $\phi$ function:

$\card Q = \map \phi n$
Hence the result.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-2}$ Residue Systems: Exercise $4$





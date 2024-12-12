# 

Source: https://proofwiki.org/wiki/Cycle_Decomposition_of_Conjugate

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\pi, \rho \in S_n$.

The cycle decomposition of the permutation $\pi \rho \pi^{-1}$ can be obtained from that of $\rho$ by replacing each $i$ in the cycle decomposition of $\rho$ with $\map \pi i$.


Proof
Consider the effect of $\pi \rho \pi^{-1}$ on $\map \pi i$:

$\map {\pi \rho \pi^{-1} } {\map \pi i} = \map \pi {\map \rho i}$

That is:

$\pi \rho \pi^{-1}$ maps $\map \pi i$ to $\map \pi {\map \rho i}$
In the cycle decomposition of $\pi \rho \pi^{-1}$, $\map \pi i$ lies to the left of $\map \pi {\map \rho i}$, whereas in the cycle decomposition of $\rho$, $i$ lies to the left of $\map \rho i$.
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.20$





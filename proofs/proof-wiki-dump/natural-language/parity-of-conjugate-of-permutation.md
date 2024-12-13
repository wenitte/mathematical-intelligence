# 

Source: https://proofwiki.org/wiki/Parity_of_Conjugate_of_Permutation

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.

Then:

$\forall \pi, \rho \in S_n: \map \sgn {\pi \rho \pi^{-1} } = \map \sgn \rho$
where $\map \sgn \pi$ is the sign of $\pi$.


Proof
As $\map \sgn \pi = \pm 1$ for any $\pi \in S_n$, we can apply the laws of commutativity and associativity:














\(\ds \map \sgn \pi \, \map \sgn \rho\)

\(=\)







\(\ds \map \sgn \rho \, \map \sgn \pi\)














\(\ds \leadsto \ \ \)





\(\ds \map \sgn \pi \, \map \sgn \rho \, \map \sgn {\pi^{-1} }\)

\(=\)







\(\ds \map \sgn \rho \, \map \sgn \pi \, \map \sgn {\pi^{-1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \sgn {\pi \rho \pi^{-1} }\)

\(=\)







\(\ds \map \sgn \rho\)





Parity Function is Homomorphism



$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Corollary $9.17$





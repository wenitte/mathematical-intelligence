# 

Source: https://proofwiki.org/wiki/Disjoint_Permutations_Commute

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\rho, \sigma \in S_n$ such that $\rho$ and $\sigma$ are disjoint.
Then $\rho \sigma = \sigma \rho$.


Proof
Let $\rho$ and $\sigma$ be disjoint permutations.

Let $i \in \Fix \rho$.
Then:

$\map {\sigma \rho} i = \map \sigma i$
whereas:

$\map {\rho \sigma} i = \map \rho {\map \sigma i}$

Aiming for a contradiction, suppose $\map \sigma i \notin \Fix \rho$.
Then because $\sigma$ and $\rho$ are disjoint it follows that:














\(\ds \map \sigma i\)

\(\in\)







\(\ds \Fix \sigma\)














\(\ds \leadsto \ \ \)





\(\ds \map {\sigma^2} i\)

\(=\)







\(\ds \map \sigma i\)














\(\ds \leadsto \ \ \)





\(\ds \map {\sigma^{-1} \sigma^2} i\)

\(=\)







\(\ds \map {\sigma^{-1} \sigma} i\)














\(\ds \leadsto \ \ \)





\(\ds \map \sigma i\)

\(=\)







\(\ds i\)










But it was previously established that $i \in \Fix \rho$.
This is a contradiction.
Therefore:

$\map \sigma i \in \Fix \rho$
and so:

$\map {\rho \sigma} i = \map \sigma i = \map {\sigma \rho} i$

Let $i \notin \Fix \rho$.
Then:

$i \in \Fix \sigma$
and the same proof can be performed with $\rho$ and $\sigma$ exchanged.
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 79$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 79 \gamma$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.8$





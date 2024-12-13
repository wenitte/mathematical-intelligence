# 

Source: https://proofwiki.org/wiki/Parity_Function_is_Homomorphism

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\pi \in S_n$.
Let $\map \sgn \pi$ be the sign of $\pi$.
Let the parity function of $\pi$ be defined as:

Parity of $\pi = \begin {cases} \mathrm {Even} & : \map \sgn \pi = 1 \\ \mathrm {Odd} & : \map \sgn \pi = -1 \end {cases}$

The mapping $\sgn: S_n \to C_2$, where $C_2$ is the cyclic group of order 2, is a homomorphism.


Proof
We need to show that:

$\forall \pi, \rho \in S_n: \map \sgn \pi \, \map \sgn \rho = \map \sgn {\pi \rho}$
Let $\Delta_n$ be an arbitrary product of differences.














\(\ds \map \sgn {\pi \rho} \Delta_n\)

\(=\)







\(\ds \pi \rho \cdot \Delta_n\)





Definition of Sign of Permutation














\(\ds \)

\(=\)







\(\ds \pi \cdot \paren {\rho \cdot \Delta_n}\)





Permutation on Polynomial is Group Action














\(\ds \)

\(=\)







\(\ds \pi \cdot \paren {\map \sgn \rho \cdot \Delta_n}\)





Definition of Sign of Permutation














\(\ds \)

\(=\)







\(\ds \pi \, \map \sgn \rho \cdot \Delta_n\)





Permutation on Polynomial is Group Action














\(\ds \)

\(=\)







\(\ds \map \sgn \pi \, \map \sgn \rho \Delta_n\)





Definition of Sign of Permutation




As $\struct {\set {1, -1}, \times}$ is the parity group, the result follows immediately.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image: Example $142$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Example $34$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.16$





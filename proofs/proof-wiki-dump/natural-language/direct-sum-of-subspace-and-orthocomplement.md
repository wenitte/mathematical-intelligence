# 

Source: https://proofwiki.org/wiki/Direct_Sum_of_Subspace_and_Orthocomplement

Theorem
Let $H$ be a Hilbert space.
Let $M$ be a closed linear subspace of $H$.
Denote by $M^\perp$ its orthocomplement.

Then the direct sum $M \oplus M^\perp$ is isomorphic to $H$.


Proof
Assert that $U: M \oplus M^\perp \to H: \left({m, m^\perp}\right) \mapsto m + m^\perp$ is an isomorphism.
According to the definition of isomorphism, it is sufficient to check that $U$ is surjective and that:

$\left\langle{ U \left({m, m^\perp}\right), U \left({n, n^\perp}\right) }\right\rangle_H = \left\langle{ \left({m, m^\perp}\right), \left({n, n^\perp}\right) }\right\rangle_{M \oplus M^\perp}$

First the surjectivity:
Denote by $P$ the orthogonal projection on $M$.
Then for any $h \in H$, have $h = Ph + \left({h - Ph}\right)$.
By definition of $P$, $Ph \in M$.
Furthermore, by Orthogonal Projection onto Orthocomplement, $h - Ph \in M^\perp$.
It follows that $h = U \left({Ph, h - Ph}\right)$, showing that $U$ is a surjection.

It remains to check that $U$ preserves the inner product:














\(\ds \left\langle{ U \left({m, m^\perp}\right), U \left({n, n^\perp}\right) }\right\rangle_H\)

\(=\)







\(\ds \left\langle{ m + m^\perp, n + n^\perp}\right\rangle_H\)




















\(\ds \)

\(=\)







\(\ds \left\langle{m, n}\right\rangle_H + \left\langle{m^\perp, n}\right\rangle_H + \left\langle{m, n^\perp}\right\rangle_H + \left\langle{m^\perp, n^\perp}\right\rangle_H\)





Linearity of $\left\langle{\cdot, \cdot}\right\rangle_H$














\(\ds \)

\(=\)







\(\ds \left\langle{m, n}\right\rangle_H + \left\langle{m^\perp, n^\perp}\right\rangle_H\)





Defining property of orthocomplement














\(\ds \)

\(=\)







\(\ds \left\langle{ \left({m, m^\perp}\right), \left({n, n^\perp}\right) }\right\rangle_{M \oplus M^\perp}\)





Definition of $\left\langle{\cdot, \cdot}\right\rangle_{M \oplus M^\perp}$




Hence $U$ is an isomorphism, and so $M \oplus M^\perp$ is isomorphic to $H$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Exercise $3$





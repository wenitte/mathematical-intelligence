# 

Source: https://proofwiki.org/wiki/Pushforward_of_Lebesgue_Measure_under_General_Linear_Group

Theorem
Let $M \in \GL {n, \R}$ be a nonsingular matrix.
Let $\lambda^n$ be $n$-dimensional Lebesgue measure.

Then the pushforward measure $M_* \lambda^n$ satisfies:

$M_* \lambda^n = \size {\det M^{-1} } \cdot \lambda^n$


Proof
From Linear Transformation on Euclidean Space is Continuous, $M^{-1}$ is a continuous mapping.
Thus from Continuous Mapping is Measurable, it is measurable, and so $M_* \lambda^n$ is defined.

Now let $B \in \map \BB {\R^n}$ be a Borel measurable set, and let $\mathbf x \in \R^n$.
Then:














\(\ds \map {M_* \lambda^n} {\mathbf x + B}\)

\(=\)







\(\ds \map {\lambda^n} {\map {M^{-1} } {\mathbf x + B} }\)





Definition of Pushforward Measure














\(\ds \)

\(=\)







\(\ds \map {\lambda^n} {\map {M^{-1} } {\mathbf x} + \map {M^{-1} } B}\)





$M^{-1}$ is linear














\(\ds \)

\(=\)







\(\ds \map {\lambda^n} {\map {M^{-1} } B}\)





Lebesgue Measure is Translation Invariant














\(\ds \)

\(=\)







\(\ds \map {M_* \lambda^n} B\)





Definition of Pushforward Measure



Thus $M_* \lambda^n$ is a translation invariant measure.

From Translation Invariant Measure on Euclidean Space is Multiple of Lebesgue Measure, it follows that:

$M_* \lambda^n = \map {M_* \lambda^n} {\openint 0 1^n} \cdot \lambda^n$
Lastly, using Determinant as Volume of Parallelotope it follows that:

$\map {M_* \lambda^n} {\openint 0 1^n} = \map {\lambda^n} {\map {M^{-1} } {\openint 0 1^n} } = \size {\det M^{-1} }$

Hence the result.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $4.9 \ \text{(iii)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $7.10$





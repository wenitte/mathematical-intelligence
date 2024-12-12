# 

Source: https://proofwiki.org/wiki/Conditions_for_Uniqueness_of_Left_Inverse_Mapping/Examples/Arbitrary_Example

Example of Conditions for Uniqueness of Left Inverse Mapping
Let $S = \set {0, 1}$.
Let $T = \set {a, b, c}$.
Let $f: S \to T$ be defined as:

$\forall x \in S: \map f x = \begin {cases} a & : x = 0 \\ b & : x = 1 \end {cases}$
Then $f$ has $2$ distinct left inverses.


Proof
Let $g_0: T \to S$ be the mapping defined as:














\(\ds \map {g_0} a\)

\(=\)







\(\ds 0\)




















\(\ds \map {g_0} b\)

\(=\)







\(\ds 1\)




















\(\ds \map {g_0} c\)

\(=\)







\(\ds 0\)










Let $g_1: T \to S$ be the mapping defined as:














\(\ds \map {g_0} a\)

\(=\)







\(\ds 0\)




















\(\ds \map {g_0} b\)

\(=\)







\(\ds 1\)




















\(\ds \map {g_0} c\)

\(=\)







\(\ds 1\)










We have that:

$\Cdm {g_0} = \Dom f = \Cdm {g_1}$
and that $f$ is an injection.

Hence we can construct:














\(\ds \map {g_0 \circ f} 0\)

\(=\)







\(\ds \map {g_0} a\)





Definition of $g_0$














\(\ds \)

\(=\)







\(\ds 0\)





Definition of $f$














\(\ds \map {g_0 \circ f} 1\)

\(=\)







\(\ds \map {g_0} b\)





Definition of $g_0$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds g_0 \circ f\)

\(=\)







\(\ds I_S\)





the identity mapping on $S$




and:














\(\ds \map {g_1 \circ f} 0\)

\(=\)







\(\ds \map {g_1} a\)





Definition of $g_1$














\(\ds \)

\(=\)







\(\ds 0\)





Definition of $f$














\(\ds \map {g_1 \circ f} 1\)

\(=\)







\(\ds \map {g_1} b\)





Definition of $g_1$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds g_1 \circ f\)

\(=\)







\(\ds I_S\)





the identity mapping on $S$



Hence both $g_0$ and $g_1$ are distinct left inverses of $f$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{G}$





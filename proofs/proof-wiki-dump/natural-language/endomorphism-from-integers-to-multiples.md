# 

Source: https://proofwiki.org/wiki/Endomorphism_from_Integers_to_Multiples



Theorem
Let $\struct {\Z, +}$ be the additive group of integers.
Let $\phi: \struct {\Z, +} \to \struct {\Z, +}$ be a mapping.

Then $\phi$ is a group endomorphism if and only if:

$\exists k \in \Z: \forall n \in \Z: \map \phi n = k n$


Proof
Necessary Condition
Let $\phi: \struct {\Z, +} \to \struct {\Z, +}$ be an endomorphism.
Let $k = \map \phi 1$.
We have that $n = \overbrace {1 + \cdots + 1}^n$ for any positive integer $n$.
Thus:














\(\ds \map \phi n\)

\(=\)







\(\ds \map \phi {\overbrace {1 + \cdots + 1}^n}\)




















\(\ds \)

\(=\)







\(\ds \overbrace {\map \phi 1 + \cdots + \map \phi 1}^n\)




















\(\ds \)

\(=\)







\(\ds \overbrace {k + \cdots + k}^n\)




















\(\ds \)

\(=\)







\(\ds k n\)









Also:














\(\ds \map \phi 1\)

\(=\)







\(\ds \map \phi {1 + 0}\)




















\(\ds \)

\(=\)







\(\ds \map \phi 1 + \map \phi 0\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi 0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds k \cdot 0\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {-1}\)

\(=\)







\(\ds -k\)














\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \map \phi {-n}\)

\(=\)







\(\ds -k n\)





similar with above



Thus:

$\forall n \in \Z: \map \phi n = k n$
$\Box$


Sufficient Condition
Let $k \in \Z$ such that:

$\forall n \in \Z: \map \phi n = k n$
Then:










\(\ds \forall n, m \in \Z: \, \)



\(\ds \map \phi {n + m}\)

\(=\)







\(\ds k \paren {n + m}\)




















\(\ds \)

\(=\)







\(\ds k n + k m\)





Integer Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \map \phi n + \map \phi m\)









Thus $\phi: \struct {\Z, +} \to \struct {\Z, +}$ is a group homomorphism from $\Z$ to $\Z$.
Hence by definition $\phi$ is a group endomorphism.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{L}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 61$





# 

Source: https://proofwiki.org/wiki/Arbitrary_Cyclic_Group_of_Order_4

Theorem
Let $S = \set {1, 2, 3, 4}$.
Consider the algebraic structure $\struct {S, \circ}$ given by the Cayley table:

$\begin{array}{r|rrrr}
\circ & 2 & 3 & 4 & 1 \\
\hline
2 & 2 & 3 & 4 & 1 
\\
3 & 3 & 4 & 1 & 2
\\
4 & 4 & 1 & 2 & 3
\\
1 & 1 & 2 & 3 & 4
\\
\end{array}$
Then $\struct {S, \circ}$ is a group.
Specifically, $\struct {S, \circ}$ is the cyclic group of order $4$.


Proof
Let $S' = \set {0, 1, 2, 3}$.
Let $\phi: S \to S'$ be the bijection:














\(\ds \map \phi 2\)

\(=\)







\(\ds 0\)




















\(\ds \map \phi 3\)

\(=\)







\(\ds 1\)




















\(\ds \map \phi 4\)

\(=\)







\(\ds 2\)




















\(\ds \map \phi 1\)

\(=\)







\(\ds 3\)









By inspection, the Cayley table presented above is in the same form as the Cayley table for the cyclic group of order $4$:

$\begin{array}{r|rrrr}
+_4 & 0 & 1 & 2 & 3 \\
\hline
0 & 0 & 1 & 2 & 3 
\\
1 & 1 & 2 & 3 & 0
\\
2 & 2 & 3 & 0 & 1
\\
3 & 3 & 0 & 1 & 2
\\
\end{array}$
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{B v}$





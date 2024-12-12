# 

Source: https://proofwiki.org/wiki/Gamma_Difference_Equation/Proof_1

Theorem
$\map \Gamma {z + 1} = z \, \map \Gamma z$


Proof
Let $z \in \C$, with $\map \Re z > 0$.
Then:














\(\ds \map \Gamma {z + 1}\)

\(=\)







\(\ds \int_0^\infty t^z e^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {-t^z e^{-t} } 0 \infty + z \int_0^\infty t^{z - 1} e^{-t} \rd t\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds z \int_0^\infty t^{z - 1} e^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds z \, \map \Gamma z\)










If $z \in \C \setminus \set {0, -1, -2, \ldots}$ such that $\map \Re z \le 0$, then the statement holds by the definition of $\Gamma$ in this region.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Gamma Function: $28 \ \text{(a)}$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.4 \ (4)$





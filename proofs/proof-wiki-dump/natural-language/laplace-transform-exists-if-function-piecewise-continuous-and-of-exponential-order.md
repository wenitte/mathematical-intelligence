# 

Source: https://proofwiki.org/wiki/Laplace_Transform_Exists_if_Function_Piecewise_Continuous_and_of_Exponential_Order



Theorem
Let $f$ be a real function which is:

piecewise continuous in every closed interval $\closedint 0 N$
of exponential order $\gamma$ for $t > N$
Then the Laplace transform $\map F s$ of $\map f t$ exists for all $s > \gamma$.


Proof
For all $N \in \Z_{>0}$:

$\ds \int_0^\infty e^{-s t} \map f t \rd t = \int_0^N e^{-s t} \map f t \rd t + \int_N^\infty e^{-s t} \map f t \rd t$
We have that $f$ is piecewise continuous in every closed interval $\closedint 0 N$.
Hence the first of the integrals on the right hand side exists.
Also, as $\map f t$ is of exponential order $\gamma$ for $t > N$, so does the second integral on the right hand side.

Indeed:














\(\ds \size {\int_N^\infty e^{-s t} \map f t \rd t}\)

\(\le\)







\(\ds \int_N^\infty \size {e^{-s t} \map f t} \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty e^{-s t} \size {\map f t} \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty e^{-s t} M e^{\gamma t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac M {s - \gamma}\)





Laplace Transform of Exponential



Thus the Laplace transform exists for $s > \gamma$.
$\blacksquare$


Also see
Laplace Transform of Reciprocal of Square Root for a real function which is not of exponential order but which does have a Laplace transform


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Sufficient Conditions for Existence of Laplace Transforms: Theorem $1 \text{-} 1$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Miscellaneous Problems: $47$





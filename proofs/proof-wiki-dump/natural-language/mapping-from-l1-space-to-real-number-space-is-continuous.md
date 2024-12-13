# 

Source: https://proofwiki.org/wiki/Mapping_from_L1_Space_to_Real_Number_Space_is_Continuous

Theorem
Let $\struct {\R, d}$ be the real number line under the usual metric $d$.
Let $X$ be the set of continuous real functions $f: \closedint a b \to \R$.
Let $d_1$ be the $L^1$ metric on $X$.
Let $I: X \to \R$ be the real-valued function defined as:

$\ds \forall f \in X: \map I f := \int_a^b \map f t \ \mathop d t$

Then the mapping:

$I: \struct {X, d_1} \to \struct {\R, d}$
is continuous.


Proof
The $L^1$ metric on $X$ is defined as:

$\ds \forall f, g \in S: \map {d_1} {f, g} := \int_a^b \size {\map f t - \map g t} \rd t$
Let $\epsilon \in \R_{>0}$.
Let $f \in X$.
Let $\delta = \epsilon$.
Then:










\(\ds \forall g \in X: \, \)



\(\ds \map {d_1} {f, g}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \int_a^b \size {\map f t - \map g t} \rd t\)

\(<\)







\(\ds \delta\)





Definition of $L^1$ Metric








\(\ds \leadsto \ \ \)





\(\ds \size {\int_a^b \paren {\map f t - \map g t} \rd t}\)

\(<\)







\(\ds \delta\)





Absolute Value of Definite Integral








\(\ds \leadsto \ \ \)





\(\ds \size {\int_a^b \map f t \rd t - \int_a^b \map g t \rd t}\)

\(<\)







\(\ds \delta\)





Linear Combination of Definite Integrals








\(\ds \leadsto \ \ \)





\(\ds \size {\map I f - \map I g}\)

\(<\)







\(\ds \delta\)





Definition of $I$








\(\ds \leadsto \ \ \)





\(\ds \map d {\map I f, \map I g}\)

\(<\)







\(\ds \delta\)





Definition of $d$








\(\ds \leadsto \ \ \)





\(\ds \map d {\map I f, \map I g}\)

\(<\)







\(\ds \epsilon\)





Definition of $\delta$



Thus it has been demonstrated that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall g \in X: \map {d_1} {f, g} < \delta \implies \map d {\map I f, \map I g} < \epsilon$
Hence by definition of continuity at a point, $I$ is continuous at $f$.
As $f$ is chosen arbitrarily, it follows that $I$ is continuous for all $f \in X$.
The result follows by definition of continuous mapping.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Exercise $1$





# 

Source: https://proofwiki.org/wiki/Euler%27s_Transformation



Theorem
Let $a, b, c \in \C$.
Let $\size x < 1$
Let $\map \Re c > \map \Re b > 0$.
Then:

$\ds \map F {a, b; c; x} = \paren {1 - x}^{c - a - b} \map F {c - a, c - b; c; x}$

where $\map F {a, b; c; x}$ is the Gaussian hypergeometric function of $x$.


Proof
First, we observe:














\(\ds \dfrac {\dfrac x {x - 1} } {\dfrac x {x - 1} - 1}\)

\(=\)







\(\ds \dfrac {\dfrac x {x - 1} } {\dfrac x {x - 1} -1} \times \dfrac {\paren {x - 1} } {\paren {x - 1} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac x {x - \paren {x - 1} }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds x\)










Applying Pfaff's Transformation twice, we obtain:














\(\ds \map F {a, b; c; x}\)

\(=\)







\(\ds \paren {1 - x}^{-a} \map F {a, c - b; c; \dfrac x {x - 1} }\)





First application of Pfaff's Transformation














\(\ds \)

\(=\)







\(\ds \paren {1 - x}^{-a} \map F {c - b, a; c; \dfrac x {x - 1} }\)





symmetry in first two terms














\(\ds \)

\(=\)







\(\ds \paren {1 - x}^{-a} \paren {1 - x}^{c - b} \map F {c - b, c - a; c; \dfrac {\dfrac x {x - 1} } {\dfrac x {x - 1} - 1} }\)





Second application of Pfaff's Transformation














\(\ds \)

\(=\)







\(\ds \paren {1 - x}^{-a} \paren {1 - x}^{c - b} \map F {c - a, c - b; c; x}\)





symmetry in first two terms and $(1)$ above














\(\ds \)

\(=\)







\(\ds \paren {1 - x}^{c - a - b} \map F {c - a, c - b; c; x}\)





Product of Powers




Therefore, after two applications of Pfaff's Transformation, we have:

$\map F {a, b; c; x} = \paren {1 - x}^{c - a - b} \map F {c - a, c - b; c; x}$
$\blacksquare$


Also see
Euler's Integral Representation of Hypergeometric Function
Kummer's Quadratic Transformation
Pfaff's Transformation


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Miscellaneous Properties: $31.17$
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $\text {2}$. The Hypergeometric Functions
Weisstein, Eric W. "Euler's Transformation." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/EulersHypergeometricTransformations.html





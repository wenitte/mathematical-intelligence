# 

Source: https://proofwiki.org/wiki/Real_Natural_Logarithm_Function_is_Continuous/Proof_2

Theorem
The real natural logarithm function is continuous.


Proof
From Bounds of Natural Logarithm:

$\dfrac 1 2 < \map \ln 2 < 1$
Fix $x \in \R$.
Consider $\dfrac x {\map \ln 2}$.
From Rationals are Everywhere Dense in Topological Space of Reals:

$\forall \epsilon \in \R_{>0} \exists r \in \Q : \size {r - \dfrac x {\map \ln 2} } < \epsilon$
Thus:














\(\ds \size {r - \dfrac x {\map \ln 2} }\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln 2 \size {r - \dfrac x {\map \ln 2} }\)

\(=\)







\(\ds \size {\map \ln {2^r} - x }\)





Natural Logarithm of Rational Power














\(\ds \)

\(<\)







\(\ds \epsilon \, \map \ln 2\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(<\)







\(\ds \epsilon\)





as $\map \ln 2 < 1$








\(\ds \leadsto \ \ \)





\(\ds \size {\map \ln t - x}\)

\(<\)







\(\ds \epsilon\)





substituting $t = 2^r$



Thus:

$\forall \epsilon \in \R_{>0}: \exists t \in \R_{>0}: \size {\map \ln t - x} < \epsilon$
Thus, the image of $\R_{>0}$ under $\ln$ is everywhere dense in $\R$.
From Monotone Real Function with Everywhere Dense Image is Continuous, $\ln$ is continuous on $\R_{>0}$.
Hence the result.
$\blacksquare$






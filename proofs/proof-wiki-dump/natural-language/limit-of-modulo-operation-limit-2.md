# 

Source: https://proofwiki.org/wiki/Limit_of_Modulo_Operation/Limit_2

Theorem
Let $x$ and $y$ be real numbers.
Let $x \bmod y$ denote the modulo operation.

Then $\ds \lim_{y \mathop \to \infty} x \bmod y = x$ if $x \ge 0$.


Proof
As $y \to \infty$:














\(\ds 0\)

\(\le\)

\(\, \ds x \, \)

\(\, \ds < \, \)



\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)

\(\, \ds \frac x y \, \)

\(\, \ds < \, \)



\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds \floor {\frac x y} \, \)

\(\, \ds = \, \)



\(\ds 0\)










Therefore by the definition of modulo operation:














\(\ds \lim_{y \mathop \to \infty} x \bmod y\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} x - y \floor {\dfrac x y}\)




















\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} x - y \cdot 0\)




















\(\ds \)

\(=\)







\(\ds x\)









Hence the result.
$\blacksquare$






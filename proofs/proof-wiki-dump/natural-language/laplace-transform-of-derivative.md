# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Derivative



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function, differentiable on any interval of the form $0 \le t \le A$.
Let $f$ be of exponential order $a$.
Let $\laptrans f$ denote the Laplace transform of $f$.
Let $f'$ be piecewise continuous with one-sided limits on said intervals.

Then $\laptrans f$ exists for $\map \Re s > a$, and:

$\laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$


Discontinuity at $t = 0$
Let $f$ fail to be continuous at $t = 0$, but let:

$\ds \lim_{t \mathop \to 0} \map f t = \map f {0^+}$
exist.
Then $\laptrans f$ exists for $\map \Re s > a$, and:

$\laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f {0^+}$


Discontinuity at $t = a$
Let $f$ have a jump discontinuity at $t = a$.
Then:

$\laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0 - e^{-a s} \paren {\map f {a^+} - \map f {a^-} }$


Finite Discontinuities at $t = a_i$ for $i = 1, 2, \ldots, n$
Let $f$ have a finite number of jump discontinuities at $t = a_i$ for $i = 1, 2, \ldots, n$.
Then:

$\laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0 - \ds \sum_{i \mathop = 1}^n e^{-a_i s} \paren {\map f {a_i^+} - \map f {a_i^-} }$


Proof













\(\ds \laptrans {\map {f'} t}\)

\(=\)







\(\ds \int_0^{\mathop \to +\infty} e^{-s t} \map {f'} t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{A \mathop \to +\infty} \int_0^A e^{-s t} \map {f'} t \rd t\)





Definition of Improper Integral on Closed Interval Unbounded Above




Consider:

$\ds \int_0^A e^{-s t} \map {f'} t \rd t$
By hypothesis, $f'$ is piecewise continuous with one-sided limits.
So by Piecewise Continuous Function with One-Sided Limits is Darboux Integrable, this integral exists.
This means that integration by parts can be invoked:

$\ds \int h j\,' \rd t = h j - \int h' j \rd t$
Here:














\(\ds h\)

\(=\)







\(\ds e^{-s t}\)














\(\ds \leadsto \ \ \)





\(\ds h'\)

\(=\)







\(\ds -s e^{-s t}\)




















\(\ds j\,'\)

\(=\)







\(\ds \map {f'} t\)














\(\ds \leadsto \ \ \)





\(\ds j\)

\(=\)







\(\ds \map f t\)










So:














\(\ds \int_0^A e^{-s t} \map {f'} t \rd t\)

\(=\)







\(\ds \bigintlimits {e^{-s t} \map f t} {t \mathop = 0} {t \mathop = A} + s \int_0^A e^{-s t} \map f t \rd t\)









Now, take the limit as $t = A \to +\infty$:














\(\ds \laptrans {\map {f'} t}\)

\(=\)







\(\ds \lim_{A \mathop \to +\infty} e^{-s A} \map f A - \map f 0 + s \laptrans {\map f t}\)









Recall that $f$ is of exponential order $a$:














\(\ds \size {\map f A}\)

\(<\)







\(\ds K e^{a t}\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map f A} \size {e^{-s A} }\)

\(<\)







\(\ds K e^{a t} \size {e^{-s A} }\)














\(\ds \leadsto \ \ \)





\(\ds \size {e^{-s A} \map f A}\)

\(<\)







\(\ds \size {K e^{a t} e^{-s A} }\)





Modulus of Product, Exponential Tends to Zero and Infinity














\(\ds \)

\(=\)







\(\ds \size {K e^{\paren {a - s} t} }\)





Exponent Combination Laws, definition of $A$














\(\ds \)

\(=\)







\(\ds \size {K e^{\paren {a - \map \Re s - i \map \Im s} t} }\)




















\(\ds \)

\(=\)







\(\ds \size {K e^{\paren {a - \map \Re s} t} }\)





Modulus of Exponential is Modulus of Real Part














\(\ds \)

\(=\)







\(\ds K e^{\paren {a - \map \Re s} t}\)





Exponential Tends to Zero and Infinity



This implies, from Complex Exponential Tends to Zero and the Squeeze Theorem for Functions:

$\ds \lim_{A \mathop \to +\infty} e^{-s A} \map f A = 0$
which produces:

$\laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$
$\blacksquare$


Examples
Example $1$
$\laptrans {-3 \sin 3 t} = \dfrac {-9} {s^2 + 9}$


Also see
Derivative of Laplace Transform
Laplace Transform of Second Derivative
Laplace Transform of Higher Order Derivatives


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $5$. Laplace transform of derivatives: Theorem $1 \text{-} 6$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Derivative: $13$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.7$
2009: William E. Boyce and Richard C. DiPrima: Elementary Differential Equations and Boundary Value Problems (9th ed.): $\S 6.2$
For a video presentation of the contents of this page, visit the Khan Academy.





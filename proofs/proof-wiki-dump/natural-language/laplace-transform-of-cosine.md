# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine



Theorem
Let $\cos$ be the real cosine function.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cos a t} = \dfrac s {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof 1













\(\ds \map {\laptrans {\cos {a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \cos {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{-s t} \cos {a t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {\frac {e^{-s t} \paren {-s \cos a t + a \sin a t} } {\paren {-s}^2 + a^2} } 0 L\)





Primitive of $e^{a x} \cos b x$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\frac {e^{-s L} \paren {-s \cos a L + a \sin a L} } {s^2 + a^2} - \frac {e^{-s \times 0} \paren {-s \, \map \cos {0 \times a} + a \, \map \sin {0 \times a} } } {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\frac {s \, \map \cos {0 \times a} - a \, \map \sin {0 \times a} } {s^2 + a^2} - \frac {e^{-s L} \paren {-s \cos a L + a \sin a L} } {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {s \, \map \cos {0 \times a} - a \, \map \sin {0 \times a} } {s^2 + a^2} - 0\)





Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac {s \cos 0 - a \sin 0} {s^2 + a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)





Sine of Zero is Zero, Cosine of Zero is One



$\blacksquare$


Proof 2













\(\ds \laptrans {e^{i a t} }\)

\(=\)







\(\ds \frac 1 {s - i a}\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac {s + i a} {s^2 + a^2}\)





multiply top and bottom by $s + i a$



Also:














\(\ds \laptrans {e^{i a t} }\)

\(=\)







\(\ds \laptrans {\cos a t + i \sin a t}\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \laptrans {\cos a t} + i \laptrans {\sin a t}\)





Linear Combination of Laplace Transforms



So:














\(\ds \laptrans {\cos a t}\)

\(=\)







\(\ds \map \Re {\laptrans {e^{i a t} } }\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\frac {s + i a} {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)









$\blacksquare$


Proof 3













\(\ds \laptrans {\cos a t}\)

\(=\)







\(\ds \laptrans {\frac {e^{i a t} + e^{-i a t} } 2}\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\laptrans {e^{i a t} } + \laptrans {e^{-i a t} } }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 1 {s - i a} + \frac 1 {s + i a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {s + i a + s - i a} {s^2 + a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)





simplifying



$\blacksquare$


Proof 4
By definition of the Laplace Transform:

$\ds \laptrans {\cos at} = \int_0^{\to +\infty} e^{-s t} \cos at \rd t$

From Integration by Parts:

$\ds \int f g' \rd t = f g - \int f'g \rd t$
Here:














\(\ds f\)

\(=\)







\(\ds \cos at\)














\(\ds \leadsto \ \ \)





\(\ds f'\)

\(=\)







\(\ds -a \sin a t\)





Derivative of Cosine Function














\(\ds g'\)

\(=\)







\(\ds e^{-s t}\)














\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds -\frac 1 s e^{-s t}\)





Primitive of Exponential Function



So:




\(\text {(1)}: \quad\)









\(\ds \int e^{-s t} \cos a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-s t} \cos a t - \frac a s \int e^{-s t} \sin a t \rd t\)










Consider:

$\ds \int e^{-s t} \sin a t \rd t$
Again, using Integration by Parts:

$\ds \int h j \,' \rd t = h j - \int h'j \rd t$
Here:














\(\ds h\)

\(=\)







\(\ds \sin at\)














\(\ds \leadsto \ \ \)





\(\ds h'\)

\(=\)







\(\ds a \cos at\)





Derivative of Sine Function














\(\ds j\,'\)

\(=\)







\(\ds e^{-s t}\)














\(\ds \leadsto \ \ \)





\(\ds j\)

\(=\)







\(\ds -\frac 1 s e^{-s t}\)





Primitive of Exponential Function



So:














\(\ds \int e^{-s t} \sin a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-s t} \sin a t + \frac a s \int e^{-s t} \cos a t \rd t\)









Substituting this into $(1)$:














\(\ds \int e^{-s t} \cos a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-s t} \cos a t - \frac a s \paren {-\frac 1 s e^{-s t} \sin a t + \frac a s \int e^{-s t} \cos a t \rd t}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 s e^{-s t} \cos a t + \frac a {s^2} e^{-s t} \sin a - \frac {a^2} {s^2} \int e^{-s t} \cos a t \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac {a^2} {s^2} } \int e^{-s t} \cos a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-s t} \cos a t + \frac a {s^2} e^{-s t} \sin a t\)










Evaluating at $t = 0$ and $t \to +\infty$:














\(\ds \paren {1 + \frac {a^2} {s^2} } \laptrans {\cos at}\)

\(=\)







\(\ds \intlimits {-e^{-s t} \paren {\frac 1 s \cos a t - \frac a {s^2} \sin a t} } {t \mathop = 0} {t \mathop \to +\infty}\)




















\(\ds \)

\(=\)







\(\ds 0 - \paren {-1 \paren {\frac 1 s \times 1 + \frac a {s^2} \times 0} }\)





Boundedness of Real Sine and Cosine, Complex Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac 1 s\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\cos at}\)

\(=\)







\(\ds \frac 1 s \paren {1 + \frac {a^2} {s^2} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 s \paren {\frac {s^2} {a^2 + s^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)









$\blacksquare$


Also see
Laplace Transform of Sine


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of some Elementary Functions: $6$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.33$





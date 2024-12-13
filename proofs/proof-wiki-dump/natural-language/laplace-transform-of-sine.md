# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine



Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\sin at} = \dfrac a {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > 0$.


Proof 1













\(\ds \map {\laptrans {\sin {a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \sin {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{-s t} \sin {a t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {\frac {e^{-s t} \paren {-s \sin a t - a \cos a t} } {\paren {-s}^2 + a^2} } 0 L\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\dfrac {e^{-s L} \paren {-s \sin a L - a \cos a L} } {s^2 + a^2} - \dfrac {e^{-s \times 0} \paren {-s \, \map \sin {0 \times a} - a \, \map \cos {0 \times a} } } {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\dfrac {s \sin 0 + a \cos 0} {s^2 + a^2} - \dfrac {e^{-s L} \paren {s \sin a L + a \cos a L} } {s^2 + a^2} }\)





Exponential of Zero and rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {s \sin 0 + a \cos 0} {s^2 + a^2} - 0\)





Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac a {s^2 + a^2}\)





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





multiplying top and bottom by $s + i a$



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














\(\ds \laptrans {\sin a t}\)

\(=\)







\(\ds \map \Im {\laptrans {e^{i a t} } }\)




















\(\ds \)

\(=\)







\(\ds \map \Im {\frac {s + i a} {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac a {s^2 + a^2}\)









$\blacksquare$


Proof 3













\(\ds \laptrans {\sin a t}\)

\(=\)







\(\ds \laptrans {\frac {e^{i a t} - e^{-i a t} } {2 i} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\laptrans {e^{i a t} } - \laptrans {e^{-i a t} } }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\frac 1 {s - i a} - \frac 1 {s + i a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\frac {s + i a - s + i a} {s^2 + a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\frac {2 i a} {s^2 + a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac a {s^2 + a^2}\)





simplifying



$\blacksquare$


Proof 4
By definition of the Laplace transform:

$\ds \laptrans {\sin a t} = \int_0^{\to +\infty} e^{-s t} \sin a t \rd t$

From Integration by Parts:

$\ds \int f g' \rd t = f g - \int f' g \rd t$
Here:














\(\ds f\)

\(=\)







\(\ds \sin a t\)














\(\ds \leadsto \ \ \)





\(\ds f'\)

\(=\)







\(\ds a \cos a t\)





Derivative of $\sin a x$














\(\ds g'\)

\(=\)







\(\ds e^{-s t}\)














\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds -\frac 1 s e^{-s t}\)





Primitive of $e^{a x}$



So:




\(\text {(1)}: \quad\)









\(\ds \int e^{-s t} \sin a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-s t} \sin a t + \frac a s \int e^{-s t} \cos a t \rd t\)










Consider:

$\ds \int e^{-s t} \cos a t \rd t$
Again, using Integration by Parts:

$\ds \int h j\,' \rd t = h j - \int h' j \rd t$
Here:














\(\ds h\)

\(=\)







\(\ds \cos a t\)














\(\ds \leadsto \ \ \)





\(\ds h'\)

\(=\)







\(\ds -a \sin a t\)





Derivative of Cosine Function














\(\ds j\,'\)

\(=\)







\(\ds e^{-s t}\)














\(\ds \leadsto \ \ \)





\(\ds j\)

\(=\)







\(\ds -\frac 1 s e^{-s t}\)





Primitive of Exponential Function




So:














\(\ds \int e^{-s t} \cos a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-st} \cos a t - \frac a s \int e^{-s t} \sin a t \rd t\)










Substituting this into $(1)$:














\(\ds \int e^{-s t} \sin a t \rd t\)

\(=\)







\(\ds -\frac 1 s e^{-s t} \sin a t + \frac a s \paren {-\frac 1 s e^{-s t} \cos a t - \frac a s \int e^{-s t} \sin a t \rd t}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 s e^{-s t} \sin a t - \frac a {s^2} e^{-s t} \cos a t - \frac {a^2} {s^2} \int e^{-s t} \sin a t \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac {a^2} {s^2} } \int e^{-s t} \sin a t \rd t\)

\(=\)







\(\ds -e^{-s t} \paren {\frac 1 s \sin a t + \frac a {s^2} \cos a t}\)










Evaluating at $t = 0$ and $t \to +\infty$:














\(\ds \paren {1 + \frac {a^2} {s^2} } \laptrans {\sin a t}\)

\(=\)







\(\ds \intlimits {-e^{-s t} \paren {\frac 1 s \sin a t + \frac a {s^2} \cos a t} } {t \mathop = 0} {t \mathop \to +\infty}\)




















\(\ds \)

\(=\)







\(\ds 0 - \paren {-1 \paren {\frac 1 s \times 0 + \frac a {s^2} \times 1} }\)





Boundedness of Real Sine and Cosine, Complex Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac a {s^2}\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\sin a t}\)

\(=\)







\(\ds \frac a {s^2} \paren {1 + \frac {a^2} {s^2} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \frac a {s^2} \paren {\frac {s^2} {a^2 + s^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac a {s^2 + a^2}\)









$\blacksquare$


Proof 5
From Laplace Transform of Second Derivative:

$(1): \quad \laptrans {\map {f} t} = s^2 \laptrans {\map f t} - s \, \map f 0 - \map {f'} 0$
under suitable conditions.

Then:














\(\ds \map f t\)

\(=\)







\(\ds \sin a t\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds a \cos a t\)




















\(\ds \map {f} t\)

\(=\)







\(\ds -a^2 \sin a t\)




















\(\ds \map f 0\)

\(=\)







\(\ds 0\)




















\(\ds \map {f'} 0\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {-a^2 \sin a t}\)

\(=\)







\(\ds s^2 \laptrans {\sin a t} - s \times 0 - a\)





from $(1)$, substituting for $\map f t$, $\map {f'} 0$  and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds -a^2 \laptrans {\sin a t}\)

\(=\)







\(\ds s^2 \laptrans {\sin a t} - a\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\sin a t}\)

\(=\)







\(\ds \dfrac a {s^2 + a^2}\)





rearranging



$\blacksquare$


Also see
Laplace Transform of Cosine


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of some Elementary Functions: $5$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.32$





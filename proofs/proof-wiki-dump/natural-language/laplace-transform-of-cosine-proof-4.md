# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine/Proof_4

Theorem
Let $\cos$ be the real cosine function.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cos a t} = \dfrac s {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof
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






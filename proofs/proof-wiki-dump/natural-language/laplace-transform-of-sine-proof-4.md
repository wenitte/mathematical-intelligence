# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine/Proof_4

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\sin at} = \dfrac a {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > 0$.


Proof
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


Sources
For a video presentation of the contents of this page, visit the Khan Academy.





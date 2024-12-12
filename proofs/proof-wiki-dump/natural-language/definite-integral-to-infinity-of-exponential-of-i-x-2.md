# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-i_x%5E2

Theorem
$\ds \int_0^\infty \map \exp {-i x^2} \rd x = \frac 1 2 \sqrt {\frac \pi 2} \paren {1 - i}$


Proof
Let $R$ be a positive real number. 
Let $C_1$ be the straight line segment from $0$ to $R$. 
Let $C_2$ be the arc of the circle of radius $R$ centred at the origin connecting $R$ and $R e^{i \pi/4}$ anticlockwise.
Let $C_3$ be the straight line segment from $R e^{i \pi/4}$ to $0$.


This article, or a section of it, needs explaining.In particular: What is the context of $C_1$ and $C_2$ etc?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\Gamma = C_1 \cup C_2 \cup C_3$. 
Let: 

$\map f z = \map \exp {-z^2}$
From Complex Exponential Function is Entire, $f$ is holomorphic along $\Gamma$ and inside the region that it bounds. 
So, by the Cauchy-Goursat Theorem: 

$\ds \int_\Gamma \map \exp {-z^2} \rd z = 0$
From Contour Integral of Concatenation of Contours, we therefore have: 














\(\ds 0\)

\(=\)







\(\ds \int_\Gamma \map \exp {-z^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_{C_1} \map \exp {-z^2} \rd z + \int_{C_2} \map \exp {-z^2} \rd z + \int_{C_3} \map \exp {-z^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_0^R \map \exp {-x^2} \rd x + \int_{C_2} \map \exp {-z^2} \rd z + e^{i \pi/4} \int_R^0 \map \exp {-\paren {e^{i \pi/4} t}^2} \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \int_0^R \map \exp {-x^2} \rd x + \int_{C_2} \map \exp {-z^2} \rd z - e^{i \pi/4} \int_0^R \map \exp {-i t^2} \rd t\)





Reversal of Limits of Definite Integral



We have: 














\(\ds \size {\int_{C_2} \map \exp {-z^2} \rd z}\)

\(\le\)







\(\ds \int_{C_2} \size {\map \exp {-z^2} } \rd \size z\)





Modulus of Complex Integral














\(\ds \)

\(=\)







\(\ds \int_0^1 \size {\frac \pi 4 R i \map \exp {i \frac \pi 4 \theta} } \size {\map \exp {-\paren {R \map \exp {i \frac \pi 4 \theta} }^2} } \rd \theta\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \frac \pi 4 R \int_0^1 \size {\map \exp {-R^2 \map \exp {i \frac \pi 2 \theta} } } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4 R \int_0^1 \size {\map \exp {-i R^2 \map \sin {\frac \pi 2 \theta} } } \size {\map \exp {-R^2 \map \cos {\frac \pi 2 \theta} } } \rd \theta\)





Exponential of Sum, Euler's Formula














\(\ds \)

\(=\)







\(\ds \frac \pi 4 R \int_0^1 \size {\map \exp {-R^2 \map \cos {\frac \pi 2 \theta} } } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4 R \int_0^1 \size {\map \exp {-R^2 \map \sin {\frac \pi 2 \paren {1 - \theta} } } } \rd \theta\)





Cosine of Complement equals Sine














\(\ds \)

\(\le\)







\(\ds \frac \pi 4 R \int_0^1 \map \exp {-\frac 2 \pi R^2 \paren {1 - \theta} } \rd \theta\)





Jordan's Inequality














\(\ds \)

\(=\)







\(\ds \frac \pi 4 R \int_0^1 \map \exp {-\frac 2 \pi R^2 \theta} \rd \theta\)





Integral between Limits is Independent of Direction














\(\ds \)

\(=\)







\(\ds \frac \pi 4 R \intlimits {\frac \pi 2 \times \frac {\map \exp {-\frac 2 \pi R^2 \theta} } {-R^2} } 0 1\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} {8 R} \paren {1 - e^{-\frac 2 \pi R^2} }\)





Exponential of Zero














\(\ds \)

\(\le\)







\(\ds \frac {\pi^2} {8 R}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to \infty$



So, taking $R \to \infty$, we have:

$\ds e^{i \pi/4} \int_0^\infty \map \exp {-i t^2} \rd t = \int_0^\infty \map \exp {-x^2} \rd x$
giving: 














\(\ds \int_0^\infty \map \exp {-i t^2} \rd t\)

\(=\)







\(\ds e^{-i \pi/4} \int_0^\infty \map \exp {-x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos \frac \pi 4 - i \sin \frac \pi 4} \frac {\sqrt \pi} 2\)





Euler's Formula, Integral to Infinity of $\map \exp {-t^2}$














\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {\sqrt 2} - \frac i {\sqrt 2} } \frac {\sqrt \pi} 2\)





Sine of $\dfrac \pi 4$, Cosine of $\dfrac \pi 4$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sqrt {\frac \pi 2} \paren {1 - i}\)









$\blacksquare$






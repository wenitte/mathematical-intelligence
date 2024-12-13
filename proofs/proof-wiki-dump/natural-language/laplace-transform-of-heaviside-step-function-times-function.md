# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Heaviside_Step_Function_times_Function

Theorem
Let $\map f t: \R \to \R$ or $\R \to \C$ be a function of exponential order $a$ for some constant $a \in \R$.
Let $f$ be piecewise continuous with one-sided limits on any closed interval of the form $\closedint 0 b$ where $b > 0$.
Let $\map {u_c} t$ be the Heaviside step function.
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of $f$.

Then:

$\laptrans {\map {u_c} t \, \map f {t - c} } = e^{-s c} \map F s$
for $\map \Re s > a$.


Proof













\(\ds \laptrans {\map {u_c} t \, \map f {t - c} }\)

\(=\)







\(\ds \int_0^{\to +\infty} \map {u_c} t e^{-s t} \map f {t - c} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to c^-} \map {u_c} t e^{-s t} \map f {t - c} \rd t + \int_{\to c^+}^{\to +\infty} \map {u_c} t e^{-s t} \map f {t - c} \rd t\)





Sum of Complex Integrals on Adjacent Intervals














\(\ds \)

\(=\)







\(\ds \int_0^{\to c^-} 0 \times e^{-s t} \map f {t - c} \rd t + \int_{\to c^+}^{\to +\infty} 1 \times e^{-s t} \map f {t - c} \rd t\)





Definition of Heaviside Step Function














\(\ds \)

\(=\)







\(\ds \int_{\to c^+}^{\to +\infty} e^{-s t} \map f {t - c} \rd t\)









Let $u = t - c$.
Then $\dfrac {\rd u} {\rd t} = 1$.
Then $u \to 0^-$ as $t \to c^+$.
Also, $u \to +\infty$ as $t \to +\infty$.
So:














\(\ds \int_{\to c^+}^{\to +\infty} e^{-s t} \map f {t - c} \rd t\)

\(=\)







\(\ds \int_{\to c^+}^{\to +\infty} e^{-s \paren {u + c} } \map f u \frac {\rd u} {\rd t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{\to 0^-}^{\to +\infty} e^{-s \paren {u + c} } \map f u \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_0^{\to 0^+} e^{-s \paren {u + c} } \map f u \rd u + \int_{\to 0^-}^{\to +\infty} e^{-s \paren {u + c} } \map f u \rd u\)





Integral on Zero Interval














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s \paren {u + c} } \map f u \rd u\)





Sum of Complex Integrals on Adjacent Intervals














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s u - s c} \map f u \rd u\)




















\(\ds \)

\(=\)







\(\ds e^{-s c} \int_0^{\to +\infty} e^{-s u} \map f u \rd u\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds e^{-s c} \int_0^{\to +\infty} e^{-s t} \map f t \rd t\)





renaming the variable of integration














\(\ds \)

\(=\)







\(\ds e^{-s c} \laptrans {\map f t}\)





Definition of Laplace Transform



$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.





# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Dirac_Delta_Function_by_Function

Theorem
Let $\map f t: \R \to \R$ or $\R \to \C$ be a function.
Let $\map \delta t$ denote the Dirac delta function.
Let $c$ be a positive constant real number.
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of $f$.

Then:

$\laptrans {\map \delta {t - c} \map f t} = e^{- s c} \map f c$


Proof













\(\ds \laptrans {\map \delta {t - c} \map f t}\)

\(=\)







\(\ds \int^{\to+\infty}_0 e^{-s t} \map \delta {t - c} \map f t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int^{c^+}_{c^-} e^{-s t} \map \delta {t - c} \map f t \rd t\)





Integrand elsewhere zero by Definition of Dirac Delta Function














\(\ds \)

\(=\)







\(\ds \int^{c^+}_{c^-} e^{-s c} \map \delta {t - c} \map f c \rd t\)





$e^{-s t}$ and $\map f t$ are constant in interval $\closedint {c^-} {c^+}$














\(\ds \)

\(=\)







\(\ds e^{-s c} \map f c \int^{c^+}_{c^-} \map \delta {t - c} \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds e^{-s c} \map f c \int^{0^+}_{0^-} \map \delta {t - c} \map \rd {t - c}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds e^{-s c} \map f c\)





Definition of Dirac Delta Function



$\blacksquare$






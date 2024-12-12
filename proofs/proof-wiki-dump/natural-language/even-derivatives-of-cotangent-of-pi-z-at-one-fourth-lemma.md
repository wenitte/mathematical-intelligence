# 

Source: https://proofwiki.org/wiki/Even_Derivatives_of_Cotangent_of_Pi_Z_at_One_Fourth/Lemma

Even Derivatives of Cotangent of Pi Z at One Fourth: Lemma
Let $z \ne \paren {4 n + 1} \dfrac 1 4$
Then: 

$\ds \map \tan {\pi z + \dfrac \pi 4} = \map \sec {2 \pi z} + \map \tan {2 \pi z}$

where:

$\sec$ and $\tan$ are secant and tangent respectively.


Proof













\(\ds \map \tan {\pi z + \dfrac \pi 4}\)

\(=\)







\(\ds \dfrac {\map \tan {\pi z } + \map \tan {\dfrac \pi 4 } } {1 - \map \tan {\pi z } \map \tan {\dfrac \pi 4 } }\)





Tangent of Sum














\(\ds \)

\(=\)







\(\ds \dfrac {1 + \map \tan {\pi z } } {1 - \map \tan {\pi z } }\)





Tangent of 45 Degrees














\(\ds \)

\(=\)







\(\ds \dfrac {1 + \map \tan {\pi z } } {1 - \map \tan {\pi z } } \times \dfrac {\map \cos {\pi z } } {\map \cos {\pi z } }\)





multiplying top and bottom by $\map \cos {\pi z }$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \cos {\pi z } + \map \sin {\pi z } } {\map \cos {\pi z } - \map \sin {\pi z } }\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \dfrac {\map \cos {\pi z } + \map \sin {\pi z } } {\map \cos {\pi z } - \map \sin {\pi z } } \times \dfrac {\paren {\map \cos {\pi z } + \map \sin {\pi z } } } {\paren {\map \cos {\pi z } + \map \sin {\pi z } } }\)





multiplying top and bottom by $\paren {\map \cos {\pi z } + \map \sin {\pi z } }$














\(\ds \)

\(=\)







\(\ds \dfrac {\map {\cos^2} {\pi z } + 2 \map \sin {\pi z } \map \cos {\pi z } + \map {\sin^2} {\pi z } } {\map {\cos^2} {\pi z } - \map {\sin^2} {\pi z } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + \map \sin {2 \pi z } } {\map \cos {2 \pi z } }\)





Sum of Squares of Sine and Cosine, Double Angle Formula for Sine and Double Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds \map \sec {2 \pi z} + \map \tan {2 \pi z}\)





Definition of Secant Function and Definition of Tangent Function



$\blacksquare$






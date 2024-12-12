# 

Source: https://proofwiki.org/wiki/Derivative_of_Tangent_Function/Proof_2

Theorem
$\map {\dfrac \d {\d x} } {\tan x} = \sec^2 x = \dfrac 1 {\cos^2 x}$
when $\cos x \ne 0$.


Proof













\(\ds \map {\frac \d {\d x} } {\tan x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \tan {x + h} - \tan x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\frac {\tan x + \tan h} {1 - \tan x \tan h} - \tan x} h\)





Tangent of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\frac {\tan x + \tan h - \tan x + \tan^2 x \tan h} {1 - \tan x \tan h} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\tan h + \tan^2 x \tan h} {h \paren {1 - \tan x \tan h} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {1 + \tan^2 x} {1 - \tan x \tan h} \cdot \lim_{h \mathop \to 0} \frac {\tan h} h\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac {1 + \tan^2 x} {1 - \tan x \tan 0} \cdot 1\)





Limit of $\dfrac {\tan x} x$ at Zero














\(\ds \)

\(=\)







\(\ds 1 + \tan^2 x\)





Tangent of Zero














\(\ds \)

\(=\)







\(\ds \sec^2 x\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos^2 x}\)





Secant is Reciprocal of Cosine ($\cos x \ne 0$)



$\blacksquare$






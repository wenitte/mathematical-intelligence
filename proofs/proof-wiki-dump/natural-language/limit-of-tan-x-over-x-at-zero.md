# 

Source: https://proofwiki.org/wiki/Limit_of_Tan_X_over_X_at_Zero



Theorem
$\ds \lim_{x \mathop \to 0} \frac {\tan x} x = 1$


Proof 1
By L'Hôpital's Rule:














\(\ds \lim_{x \mathop \to 0} \frac {\tan x} x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\sec^2 x} 1\)





Derivative of Tangent Function














\(\ds \)

\(=\)







\(\ds 1\)





Secant of Zero



$\blacksquare$


Proof 2













\(\ds \lim_{x \mathop \to 0} \frac {\tan x} x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac 1 {\cos x} \frac {\sin x} x\)





Definition of Tangent Function














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac 1 {\cos x} \lim_{x \mathop \to 0} \frac {\sin x} x\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\sin x} x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds 1\)





Limit of $\dfrac {\sin x} x$ at Zero



$\blacksquare$


Proof 3
Let $f$ be the real function defined as:

$\map f x = \sin x$
Let:

$c = \pi$
$h \in \openint 1 {\dfrac \pi 2}$
We have:














\(\ds \map f {c + h}\)

\(=\)







\(\ds \map \sin {\pi + h}\)




















\(\ds \map f c\)

\(=\)







\(\ds \sin \pi\)














\(\ds \leadsto \ \ \)

\(\ds \exists \theta \in \openint 0 1: \, \)



\(\ds \dfrac {\map \sin {\pi + h} - \sin \pi} h\)

\(=\)







\(\ds \map \cos {\pi + \theta h}\)





Mean Value Theorem








\(\ds \leadsto \ \ \)





\(\ds -\sin h - 1\)

\(=\)







\(\ds -h \cos \theta h\)





Sine of Angle plus Straight Angle, Cosine of Angle plus Straight Angle




Hence:








\(\ds \leadsto \ \ \)





\(\ds -h\)

\(<\)

\(\, \ds -\sin h \, \)

\(\, \ds < \, \)



\(\ds -h \cos h\)





as $0 < \theta < 1$








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(<\)

\(\, \ds \dfrac {\tan h} h \, \)

\(\, \ds < \, \)



\(\ds \sec h\)










Hence by the Squeeze Theorem for Functions:

$\ds \lim_{h \mathop \to 0} \dfrac {\tan h} h = 1$
The result follows on renaming $h$ to $x$.
$\blacksquare$






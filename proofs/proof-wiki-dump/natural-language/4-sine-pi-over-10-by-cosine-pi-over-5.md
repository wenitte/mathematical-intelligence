# 

Source: https://proofwiki.org/wiki/4_Sine_Pi_over_10_by_Cosine_Pi_over_5



Theorem
$4 \sin \dfrac \pi {10} \cos \dfrac \pi 5 = 1$


Proof 1













\(\ds \paren {z + 1} \paren {z^2 - 2 z \cos \dfrac \pi 5 + 1} \paren {z^2 - 2 z \cos \dfrac {3 \pi} 5 + 1}\)

\(=\)







\(\ds z^5 + 1\)





Complex Algebra Examples: $z^5 + 1$








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + i} \paren {i^2 - 2 i \cos \dfrac \pi 5 + 1} \paren {i^2 - 2 i \cos \dfrac {3 \pi} 5 + 1}\)

\(=\)







\(\ds i^5 + 1\)





putting $z \gets i$








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + i} \paren {-1 - 2 i \cos \dfrac \pi 5 + 1} \paren {-1 - 2 i \cos \dfrac {3 \pi} 5 + 1}\)

\(=\)







\(\ds i + 1\)





Definition of Imaginary Unit














\(\ds -4 \paren {1 + i} \cos \dfrac \pi 5 \cos \dfrac {3 \pi} 5\)

\(=\)







\(\ds i + 1\)





simplifying














\(\ds -4 \cos \dfrac \pi 5 \cos \dfrac {3 \pi} 5\)

\(=\)







\(\ds 1\)





equating real parts














\(\ds -4 \cos \dfrac \pi 5 \cos \paren {\dfrac \pi {10} + \dfrac \pi 2}\)

\(=\)







\(\ds 1\)




















\(\ds -4 \cos \dfrac \pi 5 \paren {-\sin \dfrac \pi {10} }\)

\(=\)







\(\ds 1\)




















\(\ds 4 \cos \dfrac \pi 5 \sin \dfrac \pi {10}\)

\(=\)







\(\ds 1\)









$\blacksquare$


Proof 2
Rewrite the left hand side:














\(\ds 4 \sin \dfrac \pi {10} \cos \dfrac \pi 5\)

\(=\)







\(\ds 1\)





by hypothesis














\(\ds 4 \sin \dfrac \pi {10} \cos \dfrac {2 \pi} {10}\)

\(=\)







\(\ds 1\)





multiplying the angle inside the cosine by $\dfrac 2 2$














\(\ds 4 \sin \dfrac \pi {10} \paren { 2 \paren { \cos \dfrac \pi {10} }^2 - 1}\)

\(=\)







\(\ds 1\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds 4 \sin \paren { \dfrac 1 2 \dfrac \pi {5} } \paren { 2 \paren { \cos \dfrac \pi {10} }^2 - 1}\)

\(=\)







\(\ds 1\)





factoring a $\dfrac 1 2$ out of $\dfrac \pi {10}$














\(\ds 4 \sqrt { \dfrac { 1 - \paren { 2 \paren { \cos \dfrac \pi {10} }^2 - 1} } 2 } \paren { 2 \paren { \cos \dfrac \pi {10} }^2 - 1}\)

\(=\)







\(\ds 1\)





$\sin \dfrac \theta 2 = \sqrt { \dfrac { 1 - \cos \theta } 2 }$














\(\ds 4 \sqrt { 1 - \cos^2 \dfrac \pi {10} } \paren { 2 \paren { \cos \dfrac \pi {10} }^2 - 1}\)

\(=\)







\(\ds 1\)





simplification




We then solve for $\theta = \dfrac \pi {10}$:














\(\ds \cos \dfrac \pi 2\)

\(=\)







\(\ds 0\)





Cosine of Right Angle: $\dfrac \pi 2 = 5 \theta$














\(\ds \cos \paren { \dfrac \pi 5 + \dfrac {3 \pi} {10} }\)

\(=\)







\(\ds 0\)





rewriting $5 \theta$ as $2 \theta + 3 \theta$














\(\ds \cos \dfrac \pi 5 \cos \dfrac {3\pi} {10} - \sin \dfrac \pi 5 \sin \dfrac {3\pi} {10}\)

\(=\)







\(\ds 0\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \paren { 2 \cos^2 \dfrac \pi {10} - 1 } \paren { 4 \cos^3 \dfrac {3\pi} {10} - 3 \cos \dfrac \pi {10} } - \paren { 2 \sin \dfrac \pi {10} \cos \dfrac \pi {10} } \paren { 3 \sin \dfrac \pi {10} - 4 \sin^3 \dfrac \pi {10} }\)

\(=\)







\(\ds 0\)





Multiple-angle formulas (cosine, sine)














\(\ds \paren { 8 \cos^5 \dfrac \pi {10} - 10 \cos^3 \dfrac \pi {10} + 3 \cos \dfrac \pi {10} } - \paren { 6 \sin^2 \dfrac \pi {10} \cos \dfrac \pi {10} - 8 \sin^4 \dfrac \pi {10} \cos \dfrac \pi {10} }\)

\(=\)







\(\ds 0\)





Multiplication














\(\ds \paren { 8 \cos^5 \dfrac \pi {10} - 10 \cos^3 \dfrac \pi {10} + 3 \cos \dfrac \pi {10} } - \paren { 6 \cos \dfrac \pi {10} - 6 \cos^3 \dfrac \pi {10} - 8 \cos \dfrac \pi {10} + 16 \cos^3 \dfrac \pi {10} - 8 \cos^5 \dfrac \pi {10} }\)

\(=\)







\(\ds 0\)





Pythagorean Identity














\(\ds 16 \cos^5 \dfrac \pi {10} - 20 \cos^3 \dfrac \pi {10} + 5 \cos \dfrac \pi {10}\)

\(=\)







\(\ds 0\)





Trivial simplification




Having realized that the above process is the same as the derivation of the expansion formula for $\cos {5 \theta}$, we can generalize this expression and then plug in $\dfrac \pi {10}$.














\(\ds 16u^5 - 20u^3 + 5u\)

\(=\)







\(\ds 0\)





$u = \cos \theta$














\(\ds u(16u^4 - 20u^2 + 5)\)

\(=\)







\(\ds 0\)





Factoring a $u$ out of the polynomial














\(\ds 16u^4 - 20u^2 + 5\)

\(=\)







\(\ds 0\)





Dividing both sides by $u$




We were able to divide off the $u$ from both sides of that last line because we know that $\cos \dfrac \pi {10}$ cannot possibly equal $0$. From here, we use the quadratic formula to solve for $u^2$.














\(\ds u^2\)

\(=\)







\(\ds \dfrac { - \paren { -20 } ± \sqrt { \paren { -20 }^2 - 4 \paren { 16 } \paren 5} } { 2 \paren { 16 } }\)




















\(\ds u^2\)

\(=\)







\(\ds \dfrac { 20 ± \sqrt { 80 } } {32}\)




















\(\ds u^2\)

\(=\)







\(\ds \dfrac { 5 ± \sqrt 5 } 8\)










Taking the square root of both sides, we can solve for $u$.














\(\ds u^2\)

\(=\)







\(\ds \dfrac { 5 ± \sqrt 5 } 8\)




















\(\ds u\)

\(=\)







\(\ds ± \dfrac 1 {\sqrt 8} \sqrt {5 ± \sqrt 5}\)










We know that $\dfrac \pi {10}$ is in the first quadrant, so we can change the exterior $±$ sign to a $+$ sign:














\(\ds u\)

\(=\)







\(\ds \dfrac 1 {\sqrt 8} \sqrt {5 ± \sqrt 5}\)










We know that $\dfrac \pi {10}$ is a lot closer to $0$ than to $\dfrac \pi 2$:
$\dfrac \pi {10} - 0 < \dfrac \pi 2 - \dfrac \pi {10}$

Therefore, the larger of the possible interior quantities of the radical should be correct.














\(\ds u\)

\(=\)







\(\ds \dfrac 1 {\sqrt 8} \sqrt {5 + \sqrt 5}\)




















\(\ds u\)

\(=\)







\(\ds \dfrac 1 4 \sqrt { 2 \paren { 5 + \sqrt 5 } }\)










Now that we have evaluated $\cos \dfrac \pi {10}$, we can substitute it for the most simplified expression from above with only $\cos \dfrac \pi {10}$:














\(\ds 4 \sqrt { 1 - \cos^2 \dfrac \pi {10} } \paren { 2 \paren { \cos \dfrac \pi {10} }^2 - 1}\)

\(=\)







\(\ds 1\)





Derived from original theorem














\(\ds 4 \sqrt { 1 - \paren { \dfrac 1 4 \sqrt { 2 \paren { 5 + \sqrt 5 } } }^2 } \paren { 2 \paren { \dfrac 1 4 \sqrt { 2 \paren { 5 + \sqrt 5 } } }^2 - 1}\)

\(=\)







\(\ds 1\)





$u = \cos \dfrac \pi {10} = \dfrac 1 4 \sqrt { 2 \paren { 5 + \sqrt 5 } }$














\(\ds 4 \sqrt { 1 - \paren { \dfrac 1 4 \sqrt { 2 \paren { 5 + \sqrt 5 } } }^2 } \paren { \dfrac 1 4 \paren { 5 + \sqrt 5 } - 1}\)

\(=\)







\(\ds 1\)





$2 \paren { \dfrac 1 4 \sqrt { 2 \paren { a } } }^2 = \dfrac 4 {16} a = \dfrac 1 4 a$














\(\ds 4 \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { \dfrac 1 4 \paren { 5 + \sqrt 5 } - 1}\)

\(=\)







\(\ds 1\)





$\paren { \dfrac 1 4 \sqrt { 2 \paren { a } } }^2 = \dfrac 2 {16} a = \dfrac 1 8 a$














\(\ds 4 \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { \dfrac { 5 + \sqrt 5 } 4 - 1}\)

\(=\)







\(\ds 1\)





Multiplication














\(\ds 4 \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { \dfrac { 5 + \sqrt 5 } 4 - \dfrac 4 4}\)

\(=\)







\(\ds 1\)





Common denominators














\(\ds 4 \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { \dfrac { 5 + \sqrt 5 - 4 } 4}\)

\(=\)







\(\ds 1\)





Combining fractions














\(\ds 4 \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { \dfrac { 1 + \sqrt 5 } 4}\)

\(=\)







\(\ds 1\)





simplification














\(\ds \dfrac 4 4 \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





Associative property














\(\ds \sqrt { 1 - \dfrac 1 8 \paren { 5 + \sqrt 5 } } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





simplification














\(\ds \sqrt { \dfrac 8 8 - \dfrac { 5 + \sqrt 5 } 8 } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





Common denominators














\(\ds \sqrt { \dfrac { 8 - 5 - \sqrt 5 } 8 } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





combining fractions














\(\ds \sqrt { \dfrac { 3 - \sqrt 5 } 8 } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





simplification














\(\ds \sqrt { \dfrac { 6 - 2 \sqrt 5 } {16} } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





multiplying the radicand by $\dfrac 2 2$














\(\ds \sqrt { \dfrac { 1 - 2 \sqrt 5 + 5 } {16} } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





rewriting $k ± 2 \sqrt u$ as $\paren { k - u } ± 2 \sqrt u + u$ because $k - u + u = k$














\(\ds \sqrt { \dfrac { \paren { 1 - \sqrt 5 }^2 } {16} } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





rewriting the quantity as a square














\(\ds ± \dfrac 1 4 \paren { 1 - \sqrt 5 } \paren { 1 + \sqrt 5 }\)

\(=\)







\(\ds 1\)





Square root of the radicand














\(\ds ± \dfrac 1 4 \paren { 1 - 5 }\)

\(=\)







\(\ds 1\)





Multiplying $\paren { 1 - \sqrt 5 }$ and $\paren { 1 + \sqrt 5 }$














\(\ds ± \dfrac 1 4 × -4\)

\(=\)







\(\ds 1\)





simplification














\(\ds ∓ 1\)

\(=\)







\(\ds 1\)





Multiplication














\(\ds 1\)

\(=\)







\(\ds 1\)





Sign rectification



$\blacksquare$


Proof 3













\(\ds 4 \sin \theta \cos 2 \theta\)

\(=\)







\(\ds 1\)





Solve for $\theta$














\(\ds 4 \sin \theta \cos \theta \cos 2\theta\)

\(=\)







\(\ds \cos \theta\)





multiplying both sides by $\cos \theta$














\(\ds 2 \paren {2 \sin \theta \cos \theta } \cos 2\theta\)

\(=\)







\(\ds \cos \theta\)





factoring out $2$














\(\ds 2 \paren {\sin 2 \theta } \cos 2\theta\)

\(=\)







\(\ds \cos \theta\)





Double Angle Formula for Sine














\(\ds \sin 4 \theta\)

\(=\)







\(\ds \cos \theta\)





Double Angle Formula for Sine














\(\ds \map \sin {\frac \pi 2 - \theta}\)

\(=\)







\(\ds \cos \theta\)





Sine of Complement equals Cosine














\(\ds \paren {\frac \pi 2 - \theta}\)

\(=\)







\(\ds 4 \theta\)




















\(\ds \theta\)

\(=\)







\(\ds \frac \pi {10}\)









$\blacksquare$






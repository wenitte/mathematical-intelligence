# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_squared_minus_x_squared/Arccosine_Form



Theorem
$\ds \int \frac 1 {\sqrt {a^2 - x^2} } \rd x = -\arccos \frac x a + C$
where $a$ is a strictly positive constant and $a^2 > x^2$.


Proof













\(\ds \int \frac 1 {\sqrt {a^2 - x^2} } \rd x\)

\(=\)







\(\ds \int \frac {\rd x} {\sqrt {a^2 \paren {1 - \frac {x^2} {a^2} } } }\)





factor $a^2$ out of the radicand














\(\ds \)

\(=\)







\(\ds \int \frac {\rd x} {\sqrt{a^2} \sqrt {1 - \paren {\frac x a}^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\rd x} {\sqrt {1 - \paren {\frac x a}^2} }\)









Substitute:

$\cos \theta = \dfrac x a \iff x = a \cos \theta$
for $\theta \in \openint 0 \pi$.
From Real Cosine Function is Bounded and Shape of Cosine Function, this substitution is valid for all $x / a \in \openint {-1} 1$.
By hypothesis:














\(\ds a^2\)

\(>\)

\(\, \ds x^2 \, \)





\(\ds \)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(>\)

\(\, \ds \frac {x^2} {a^2} \, \)





\(\ds \)





dividing both terms by $a^2$








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(>\)

\(\, \ds \paren {\frac x a}^2 \, \)





\(\ds \)





Powers of Group Elements








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(>\)

\(\, \ds \size {\frac x a} \, \)





\(\ds \)





taking the square root of both terms








\(\ds \leadstoandfrom \ \ \)





\(\ds -1\)

\(<\)

\(\, \ds \frac x a \, \)

\(\, \ds < \, \)



\(\ds 1\)





Negative of Absolute Value



so this substitution will not change the domain of the integrand.

Then:














\(\ds x\)

\(=\)







\(\ds a \cos \theta\)





from above








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds -a \sin \theta \frac {\rd \theta} {\rd x}\)





differentiating with respect to $x$, Derivative of Cosine Function, Chain Rule for Derivatives














\(\ds \frac 1 a \int \frac 1 {\sqrt {1 - \paren {\frac x a}^2 } } \rd x\)

\(=\)







\(\ds \frac 1 a \int \frac {-a \sin \theta} {\sqrt {1 - \cos^2 \theta} } \frac {\rd \theta} {\rd x} \rd x\)





from above














\(\ds \)

\(=\)







\(\ds -\frac a a \int \frac {\sin \theta} {\sqrt {1 - \cos^2 \theta} } \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \frac {\sin \theta} {\sqrt {\sin^2 \theta} } \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds -\int \frac {\sin \theta} {\size {\sin \theta} } \rd \theta\)









We have defined $\theta$ to be in the open interval $\openint 0 \pi$.
From Sine and Cosine are Periodic on Reals, $\sin \theta > 0$ for the entire interval. Therefore the absolute value is unnecessary, and the integral simplifies to:














\(\ds -\int \rd \theta\)

\(=\)







\(\ds -\theta + C\)









As $\theta$ was stipulated to be in the open interval $\openint 0 \pi$:

$\cos \theta = \dfrac x a \iff \theta = \arccos \dfrac x a$
The answer in terms of $x$, then, is:

$\ds \int \frac 1 {\sqrt {a^2 - x^2} } \rd x = -\arccos \frac x a + C$
$\blacksquare$


Also see
Primitive of Reciprocal of $\sqrt {x^2 + a^2}$
Primitive of Reciprocal of $\sqrt {x^2 - a^2}$
Derivative of Arccosine Function


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $12$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $25$





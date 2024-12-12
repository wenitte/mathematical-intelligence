# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_2_Pi_of_Reciprocal_of_a_plus_b_Cosine_x



Theorem
$\ds \int_0^{2 \pi} \frac {\d x} {a + b \cos x} = \frac {2 \pi} {\sqrt {a^2 - b^2} }$
where $a$ and $b$ are real numbers with $a > b > 0$.


Proof 1
Let $C$ be the unit open disk in the complex plane centred at $0$. 
The boundary of $C$, $\partial C$, can be parameterized by: 

$\map z x = e^{i x}$
for $0 \le x \le 2 \pi$. 
We have:














\(\ds \int_0^{2 \pi} \frac {\d x} {a + b \cos x}\)

\(=\)







\(\ds \int_0^{2 \pi} \frac {\d x} {a + \frac b 2 \paren {e^{i x} + e^{-i x} } }\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \int_0^{2 \pi} \paren {\frac {2 e^{i x} } {2 e^{i x} } } \frac {\d x} {a + \frac b 2 \paren {e^{i x} + e^{-i x} } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds 2 \int_0^{2 \pi} \frac {e^{i x} \rd x } {2 a e^{i x} + b e^{2 i x} + b}\)




















\(\ds \)

\(=\)







\(\ds 2 \int_0^{2 \pi} \frac {e^{i x} \rd x } {b \paren {e^{2 i x} + \frac {2 a} b e^{i x} + 1} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac 2 {i b} \int_{\partial C} \frac {\d z} {z^2 + \frac {2 a} b z + 1}\)





Definition of Complex Contour Integral, Derivative of Exponential Function, $\rd z = i e^{i x} \rd x$














\(\ds \)

\(=\)







\(\ds \frac 2 {i b} \int_{\partial C} \frac {\d z} {\paren {z + \frac a b}^2 - \frac {a^2} {b^2} + 1}\)





Completing the Square



The integrand has poles where: 

$\paren {z + \dfrac a b}^2 - \dfrac {a^2} {b^2} + 1 = 0$
That is, where: 

$\size {z + \dfrac a b} = \dfrac {\sqrt {a^2 - b^2} } b$
So: 

$z_1 = \dfrac {-a + \sqrt {a^2 - b^2} } b$
and:

$z_2 = \dfrac {-a - \sqrt {a^2 - b^2} } b$
are the poles of the integrand.  
We have: 














\(\ds \size {z_2}\)

\(=\)







\(\ds \size {\frac {-a - \sqrt {a^2 - b^2} } b}\)




















\(\ds \)

\(=\)







\(\ds \frac {a + \sqrt {a^2 - b^2} } b\)





as $a > b > 0$














\(\ds \)

\(=\)







\(\ds \frac a b \paren {1 + \sqrt {1 - \frac {b^2} {a^2} } }\)




















\(\ds \)

\(>\)







\(\ds \frac a b\)





as $\sqrt {1 - \dfrac {b^2} {a^2} } > 0$














\(\ds \)

\(>\)







\(\ds 1\)









So $z_2$ lies outside the closed disk $\size z \le 1$ for all real $a > b > 0$, so is of no concern. 
We now establish a bound on $z_1$. 
As $a > b > 0$, we  have that: 

$a^2 > a^2 - b^2 > 0$
So, from Square Root is Strictly Increasing: 

$a > \sqrt {a^2 - b^2} > 0$
Multiplying through by $-2 \sqrt {a^2 - b^2}$: 

$-2 a \sqrt{a^2 - b^2} < 2 \paren {b^2 - a^2} < 0$
This can be rewritten as: 














\(\ds a^2 - 2 a \sqrt {a^2 - b^2} + a^2 - b^2\)

\(=\)







\(\ds a^2 - 2 a \sqrt {a^2 - b^2} + \paren {\sqrt {a^2 - b^2} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {-a + \sqrt {a^2 - b^2} }^2\)





Square of Sum














\(\ds \)

\(<\)







\(\ds b^2\)









giving: 

$\size {-a + \sqrt {a^2 - b^2} } < b$
Therefore: 

$\size {z_1} = \size {\dfrac {-a + \sqrt {a^2 - b^2} } b} < 1$
So $z_1$ is the only pole of the integrand lying within $C$. 
Therefore: 














\(\ds \frac 2 {i b} \int_C \frac {\d z} {z^2 + \frac {2 a} z + 1}\)

\(=\)







\(\ds \frac {4 \pi i} {i b} \Res {\frac 1 {z^2 + \frac {2 a} b z + 1} } {z_1}\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds \frac {4 \pi} b \paren {\lim_{z \mathop \to {z_1} } \paren {z - z_1} \frac 1 {z^2 + \frac {2 a} b z + 1} }\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds \frac {4 \pi} b \paren {\lim_{z \mathop \to {\frac {-a + \sqrt {a^2 - b^2} } b} } \paren {z - \frac {-a + \sqrt {a^2 - b^2} } b} \frac 1 {\paren {z - \frac {-a + \sqrt {a^2 - b^2} } b} \paren {z - \frac {-a - \sqrt {a^2 - b^2} } b} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \pi} b \sqbrk {\frac 1 {\paren {z - \frac {-a - \sqrt {a^2 - b^2} } b} } }_{z = \frac {-a + \sqrt {a^2 - b^2} } b}\)





cancelling $\paren {z - \dfrac {-a + \sqrt {a^2 - b^2} } b} $














\(\ds \)

\(=\)







\(\ds \frac {4 \pi} b \paren { {\frac 1 {\paren {\frac {-a + \sqrt {a^2 - b^2} } b - \frac {-a - \sqrt {a^2 - b^2} } b} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \pi} b \paren { {\frac b {2 \paren {\sqrt {a^2 - b^2} } } } }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi} {\sqrt {a^2 - b^2} }\)









$\blacksquare$


Proof 2













\(\ds \int_0^{2 \pi} \frac {\d x} {a + b \cos x}\)

\(=\)







\(\ds \int_0^\pi \frac {\d x} {a + b \cos x} + \int_\pi^{2 \pi} \frac {\d x} {a + b \cos x}\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \intlimits {\frac 2 {\sqrt {a^2 - b^2} } \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} } 0 \pi + \intlimits {\frac 2 {\sqrt {a^2 - b^2} } \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} } \pi {2 \pi}\)





Primitive of $\dfrac 1 {p + q \cos a x}$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren {\lim_{x \mathop \to \pi^+} \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} - \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan 0} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren {\map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \pi} - \lim_{x \mathop \to \pi^-} \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren {\lim_{x \mathop \to \pi^+} \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} - \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan 0} }\)





Tangent Function is Periodic on Reals














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren { \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan 0} - \lim_{x \mathop \to \pi^-} \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren {\lim_{x \mathop \to \pi^+} \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} - \lim_{x \mathop \to \pi^-} \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} }\)





simplfying














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren {\lim_{u \mathop \to \infty} \map \arctan {\sqrt {\frac {a - b} {a + b} } u} - \lim_{u \mathop \to -\infty} \map \arctan {\sqrt {\frac {a - b} {a + b} } u} }\)





letting $u = \tan \dfrac x 2$: Tangent Function $\to \pm \infty$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a^2 - b^2} } \paren {\frac \pi 2 - \paren {-\frac \pi 2} }\)





Limit to Positive and Negative Infinity of Arctangent Function














\(\ds \)

\(=\)







\(\ds \frac {2 \pi} {\sqrt {a^2 - b^2} }\)









$\blacksquare$


Also see
Definite Integral from $0$ to $2 \pi$ of $\dfrac 1 {a + b \sin x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.44$





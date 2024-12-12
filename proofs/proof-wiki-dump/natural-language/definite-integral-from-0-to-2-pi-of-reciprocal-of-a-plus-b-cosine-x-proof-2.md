# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_2_Pi_of_Reciprocal_of_a_plus_b_Cosine_x/Proof_2

Theorem
$\ds \int_0^{2 \pi} \frac {\d x} {a + b \cos x} = \frac {2 \pi} {\sqrt {a^2 - b^2} }$


Proof













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






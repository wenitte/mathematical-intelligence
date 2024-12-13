# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_by_Sine_of_a_x_plus_q_by_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {p \sin a x + q \cos a x} = \frac 1 {a \sqrt {p^2 + q^2} } \ln \tan \size {\frac {a x + \arctan \dfrac q p} 2} + C$


Proof
Lemma
$\ds \frac 1 2 \map \arctan {\dfrac {-p} q} + \frac \pi 4 = \frac {\arctan \dfrac q p} 2$
$\Box$















\(\ds \int \frac {\d x} {p \sin a x + q \cos a x}\)

\(=\)







\(\ds \int \frac {\d x} {\sqrt {p^2 + q^2} \map \cos {a x + \arctan \dfrac {-p} q} }\)





Multiple of Sine plus Multiple of Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {p^2 + q^2} } \int \map \sec {a x + \arctan \dfrac {-p} q} \rd x\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {p^2 + q^2} } \int \sec z \rd z\)





Primitive of Function of $a x + b$: $z = a x + \arctan \dfrac {-p} q$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {p^2 + q^2} } \ln \tan \size {\frac z 2 + \frac \pi 4} + C\)





Primitive of $\sec a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {p^2 + q^2} } \ln \tan \size {\frac 1 2 \paren {a x + \arctan \dfrac {-p} q + \frac \pi 2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {p^2 + q^2} } \ln \tan \size {\frac {a x + \arctan \dfrac q p} 2} + C\)





Lemma



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p \sin a x + q \cos a x + r}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.419$





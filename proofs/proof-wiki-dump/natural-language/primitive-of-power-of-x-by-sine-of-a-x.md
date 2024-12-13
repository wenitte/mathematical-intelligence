# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Sine_of_a_x



Theorem
$\ds \int x^m \sin a x \rd x = \frac {-x^m \cos a x} a + \frac {m x^{m - 1} \sin a x} {a^2} - \frac {m \paren {m - 1} } {a^2} \int x^{m - 2} \sin a x \rd x$


Proof
Lemma
$\ds \int x^m \sin a x \rd x = \frac {- x^m \cos a x} a + \frac m a \int x^{m - 1} \cos a x \rd x$
$\Box$

From Primitive of $x^{m - 1} \cos a x$: Lemma:

$(1): \quad \ds \int x^{m - 1} \cos a x \rd x = \frac {x^{m - 1} \sin a x} a - \frac {m - 1} a \int x^{m - 2} \sin a x \rd x$

So:














\(\ds \int x^m \sin a x \rd x\)

\(=\)







\(\ds \frac {- x^m \cos a x} a + \frac m a \int x^{m - 1} \cos a x \rd x\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac {- x^m \cos a x} a + \frac m a \paren {\frac {x^{m - 1} \sin a x} a - \frac {m - 1} a \int x^{m - 2} \sin a x \rd x}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {- x^m \cos a x} a + \frac {m x^{m - 1} \sin a x} {a^2} - \frac {m \paren {m - 1} } {a^2} \int x^{m - 2} \sin a x \rd x\)





simplifying



$\blacksquare$


Also see
Primitive of $x^m \cos a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.364$





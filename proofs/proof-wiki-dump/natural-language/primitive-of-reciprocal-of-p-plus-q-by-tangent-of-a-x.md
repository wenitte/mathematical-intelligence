# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Tangent_of_a_x



Theorem
$\ds \int \frac {\d x} {p + q \tan a x} = \frac {p x} {p^2 + q^2} + \frac q {a \paren {p^2 + q^2} } \ln \size {q \sin a x + p \cos a x} + C$


Proof 1
First, let $\arctan \dfrac p q = \phi$.
Let $z = a x + \phi$.














\(\ds z\)

\(=\)







\(\ds \map \sin {a x + \phi}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds a \map \cos {a x + \phi}\)





Derivative of $\sin a x$ etc.














\(\ds \)

\(=\)







\(\ds a \cos z\)










Then:














\(\ds \int \frac {\d x} {p + q \tan a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \dfrac {\sin a x} {\cos a x} }\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\cos a x \rd x} {p \cos a x + q \sin a x}\)





multiplying top and bottom by $\cos a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\cos a x \rd x} {\sqrt {p^2 + q^2} \map \sin {a x + \phi} }\)





Multiple of Sine plus Multiple of Cosine: Sine Form














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {p^2 + q^2} } \int \frac {\cos a x \rd x} {\map \sin {a x + \phi} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {p^2 + q^2} } \paren {\frac {\ln \size {\map \sin {a x + \phi} } } {a \cos \phi} + \tan \phi \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} } + C}\)





Primitive of $\dfrac {\cos a x} {\map \sin {a x + \phi} }$




This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
We have:

$\dfrac \d {\d x} \paren {q \sin a x + p \cos a x} = a q \cos a x - a p \sin a x$
Thus:














\(\ds \int \frac {\d x} {p + q \tan a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \dfrac {\sin a x} {\cos a x} }\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\cos a x \rd x} {p \cos a x + q \sin a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \int \frac {\paren {p^2 + q^2} \cos a x \rd x} {p \cos a x + q \sin a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \int \frac {p^2 \cos a x + p q \sin a x - p q \sin a x + q^2 \cos a x} {p \cos a x + q \sin a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \paren {\int \frac {p^2 \cos a x + p q \sin a x} {p \cos a x + q \sin a x} \rd x + \int \frac {-p q \sin a x + q^2 \cos a x} {p \cos a x + q \sin a x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \paren {\int p \rd x + \frac q a \int \frac {\map \d {p \cos a x + q \sin a x} } {p \cos a x + q \sin a x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p x} {p^2 + q^2} + \frac q {a \paren {p^2 + q^2} } \ln \size {p \cos a x + q \sin a x} + C\)





Primitive of Constant and Primitive of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sin a x}$
Primitive of $\dfrac 1 {p + q \cos a x}$
Primitive of $\dfrac 1 {p + q \cot a x}$
Primitive of $\dfrac 1 {q + p \sec a x}$
Primitive of $\dfrac 1 {q + p \csc a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tan a x$: $14.438$





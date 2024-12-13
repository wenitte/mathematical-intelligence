# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {p + q \sin a x} = \begin{cases}
\ds \frac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\frac {p \tan \dfrac {a x} 2 + q} {\sqrt {p^2 - q^2} } } + C & : q^2 - p^2 < 0 \\
\ds \frac 1 {a \sqrt {q^2 - p^2} } \ln \size {\frac {p \tan \dfrac {a x} 2 + q - \sqrt {p^2 - q^2} } {p \tan \dfrac {a x} 2 + q + \sqrt {p^2 - q^2} } } + C & : q^2 - p^2 > 0 \\
\end{cases}$


Proof













\(\ds \int \frac {\d x} {p + q \sin a x}\)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {p u^2 + 2 q u + p}\)





Weierstrass Substitution: $u = \tan \dfrac {a x} 2$




The discriminant of $p u^2 + 2 q u + p$ is $4 q^2 - 4 p^2$.
Thus:














\(\ds \int \frac {\d x} {p + q \sin a x}\)

\(=\)







\(\ds \begin{cases}
\ds \frac 2 a \paren {\dfrac 2 {\sqrt {4 p^2 - 4 q^2} } \map \arctan {\dfrac {2 p u + 2 q} {\sqrt {4 p^2 - 4 q^2} } } } + C & : 4 q^2 - 4 p^2 < 0 \\
\ds \frac 2 a \paren {\dfrac 1 {\sqrt {4 q^2 - 4 p^2} } \ln \size {\dfrac {2 p x + 2 q - \sqrt {4 q^2 - 4 p^2} } {2 p x + 2 q + \sqrt {4 q^2 - 4 p^2} } } } + C & : 4 q^2 - 4 p^2 > 0 \\
\end{cases}\)






Primitive of $\dfrac 1 {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \begin{cases}
\ds \dfrac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\dfrac {p u + q} {\sqrt {p^2 - q^2} } } + C & : q^2 - p^2 < 0 \\
\ds \dfrac 1 {a \sqrt {q^2 - p^2} } \ln \size {\dfrac {p x + q - \sqrt {q^2 - p^2} } {p x + q + \sqrt {q^2 - p^2} } } + C & : q^2 - p^2 > 0 \\
\end{cases}\)






simplifying














\(\ds \)

\(=\)







\(\ds \begin{cases}
\ds \frac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\frac {p \tan \dfrac {a x} 2 + q} {\sqrt {p^2 - q^2} } } + C & : q^2 - p^2 < 0 \\
\ds \frac 1 {a \sqrt {q^2 - p^2} } \ln \size {\frac {p \tan \dfrac {a x} 2 + q - \sqrt {p^2 - q^2} } {p \tan \dfrac {a x} 2 + q + \sqrt {p^2 - q^2} } } + C & : q^2 - p^2 > 0 \\
\end{cases}\)






substituting for $u$



$\blacksquare$


Examples
Primitive of $\dfrac 1 {3 + 2 \sin x}$
$\ds \int \dfrac {\d x} {3 + 2 \sin x} = \frac 2 {\sqrt 5} \map \arctan {\frac {3 \tan \dfrac x 2 + 2} {\sqrt 5} } + C$


Also presented as
$p^2 > q^2$: Also presented as
The result for $p^2 > q^2$ is also seen presented in the form:

$\ds \int \frac {\d x} {p + q \sin a x} = -\frac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\sqrt {\dfrac {p - q} {p + q} } \map \tan {\dfrac \pi 4 - \dfrac {p x} 2} } + C$


$p^2 < q^2$: Also presented as
The result for $p^2 < q^2$ is also seen presented in the form:

$\ds \int \frac {\d x} {p + q \sin a x} = -\frac 1 {a \sqrt {q^2 - p^2} } \ln \size {\dfrac {q + p \sin a x + \sqrt {q^2 - p^2} \cos a x} {p + q \sin a x} } + C$


Also see
Primitive of $\dfrac 1 {p + q \cos a x}$
Primitive of $\dfrac 1 {p + q \tan a x}$
Primitive of $\dfrac 1 {p + q \cot a x}$
Primitive of $\dfrac 1 {q + p \sec a x}$
Primitive of $\dfrac 1 {q + p \csc a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.360$





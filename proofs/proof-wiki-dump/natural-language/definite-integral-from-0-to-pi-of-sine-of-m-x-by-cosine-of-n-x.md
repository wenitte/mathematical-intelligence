# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Pi_of_Sine_of_m_x_by_Cosine_of_n_x

Theorem
Let $m, n \in \Z$ be integers.

Then:

$\ds \int_0^\pi \sin m x \cos n x \rd x = \begin{cases} 0 & : m + n \text { even} \\ \dfrac {2 m} {m^2 - n^2} & : m + n \text { odd} \end{cases}$


Proof
First we address the special case where $m = n$.
In this case $m + n = m + m = 2 m$ is even.

We have:














\(\ds \int \sin m x \cos m x \rd x\)

\(=\)







\(\ds \frac {\sin^2 m x} {2 m} + C\)





Primitive of $\sin m x \cos m x$








\(\ds \leadsto \ \ \)





\(\ds \int_0^\pi \sin m x \cos m x \rd x\)

\(=\)







\(\ds \intlimits {\frac {\sin^2 m x} {2 m} } 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin^2 m \pi} {2 m} - \frac {\sin^2 0} {2 m}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sine of Multiple of Pi



So in this case, $\ds \int_0^\pi \sin m x \cos n x \rd x = 0$ for $m + m$ even.

Let $m \ne n$.














\(\ds \int \sin m x \cos n x \rd x\)

\(=\)







\(\ds \frac {-\cos \paren {m - n} x} {2 \paren {m - n} } - \frac {\cos \paren {m + n} x} {2 \paren {m + n} } + C\)





Primitive of $\sin m x \cos n x$








\(\ds \leadsto \ \ \)





\(\ds \int_0^\pi \sin m x \cos n x \rd x\)

\(=\)







\(\ds \intlimits {\frac {-\cos \paren {m - n} x} {2 \paren {m - n} } - \frac {\cos \paren {m + n} x} {2 \paren {m + n} } } 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {- \map \cos {\paren {m - n} \pi} } {2 \paren {m - n} } - \frac {\map \cos {\paren {m + n} \pi} } {2 \paren {m + n} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\frac {-\cos 0} {2 \paren {m - n} } - \frac {\cos 0} {2 \paren {m + n} )} }\)




















\(\ds \)

\(=\)







\(\ds \frac {- \map \cos {\paren {m - n} \pi} } {2 \paren {m - n} } - \frac {\map \cos {\paren {m + n} \pi} } {2 \paren {m + n} } + \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} }\)





Cosine of Zero is One and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} } - \frac {\paren {-1}^{m - n} } {2 \paren {m - n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m + n} }\)





Cosine of Multiple of Pi and rearranging














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m - n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m + n} }\)





$m + n$ and $m - n$ have the same parity



$\Box$

When $m + n$ is an even integer, we have:














\(\ds \)

\(\)







\(\ds \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m - n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} } - \frac 1 {2 \paren {m - n} } - \frac 1 {2 \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









This shows that in all cases $\ds \int_0^\pi \sin m x \cos n x \rd x = 0$ for $m + m$ even.

When $m + n$ is an odd integer, we have:














\(\ds \)

\(\)







\(\ds \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m - n} } - \frac {\paren {-1}^{m + n} } {2 \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {m - n} } + \frac 1 {2 \paren {m + n} } - \frac {-1} {2 \paren {m - n} } - \frac {-1} {2 \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {m - n} + \frac 1 {m + n}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {\paren {m + n} + \paren {m - n} } {\paren {m + n} \paren {m - n} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 m} {\paren {m + n} \paren {m - n} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 m} {m^2 - n^2}\)





Difference of Two Squares



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.28$





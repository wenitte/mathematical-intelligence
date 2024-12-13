# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Cosine_of_a_x/Corollary

Theorem
$\ds \int x^m \cos a x \rd x = \sum_{k \mathop = 1}^{m + 1} \paren {m^{\underline {k - 1} } \frac {x^{m + 1 - k} } {a^k} \map {\sin} {x + \dfrac {\pi} 2 \paren {k - 1} } }$
where $m^{\underline {k - 1} }$ denotes the $k - 1$th falling factorial of $m$.


Proof



\(\text {(1)}: \quad\)









\(\ds \int x^m \cos a x \rd x\)

\(=\)







\(\ds \frac {x^m \sin a x} a + \frac {m x^{m - 1} \cos a x} {a^2} - \frac {m \paren {m - 1} } {a^2} \int x^{m - 2} \cos a x \rd x\)





Primitive of Power of x by Cosine of a x




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int x^{m - 2} \cos a x \rd x\)

\(=\)







\(\ds \frac {x^{m - 2} \sin a x} a + \frac {\paren {m - 2} x^{m - 3} \cos a x} {a^2} - \frac {\paren {m - 2} \paren {m - 3} } {a^2} \int x^{m - 4} \cos a x \rd x\)





setting $m$ equal to $m - 2$








\(\ds \leadsto \ \ \)





\(\ds \int x^m \cos a x \rd x\)

\(=\)







\(\ds \frac {x^m \sin a x} a + \frac {m x^{m - 1} \cos a x} {a^2} - \frac {m \paren {m - 1} } {a^2} \paren {\frac {x^{m-2} \sin a x} a + \frac {\paren {m-2} x^{m - 3} \cos a x} {a^2} - \frac {\paren {m - 2} \paren {m - 3} } {a^2} \int x^{m - 4} \cos a x \rd x}\)





substituting $(2)$ into $(1)$ above














\(\ds \)

\(=\)







\(\ds \frac {x^m \sin a x} a + \frac {m x^{m - 1} \cos a x} {a^2} - \frac {\paren m \paren {m - 1} x^{m - 2} \sin a x} {a^3} - \frac {\paren m \paren {m - 1} \paren {m - 2} x^{m - 3} \cos a x} {a^4} + \frac {\paren m \paren {m - 1} \paren {m - 2} \paren {m - 3} } {a^4} \int x^{m - 4} \cos a x \rd x\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{m + 1} \paren {m^{\underline {k - 1} } \frac {x^{m + 1 - k} } {a^k} \map \sin {x + \frac {\pi} 2 \paren { k - 1 } } }\)





Definition of Falling Factorial



$\blacksquare$






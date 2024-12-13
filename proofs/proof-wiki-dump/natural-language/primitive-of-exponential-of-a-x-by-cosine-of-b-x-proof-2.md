# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Cosine_of_b_x/Proof_2

Theorem
$\ds \int e^{a x} \cos b x \rd x = \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} + C$


Proof













\(\ds \int e^{a x} e^{i b x} \rd x\)

\(=\)







\(\ds i \int e^{a x} \sin b x \rd x + \int e^{a x} \cos b x \rd x\)





Euler's Formula








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \map \Re {\int e^{\paren {a + i b} x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\frac {e^{\paren {a + i b} x} } {a + i b} } + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \map \Re {\frac {\paren {a - i b}  e^{\paren {a + i b} x} } {a^2 + b^2} } + C\)





multiplying through by $\dfrac {a - i b} {a - i b}$














\(\ds \)

\(=\)







\(\ds \map \Re {\frac {i a e^{a x} \sin b x + a e^{a x} \cos b x - i b \paren {i e^{a x} \sin b x + e^{a x} \cos b x} } {a^2 + b^2} } + C\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \map \Re {\frac {i \paren {a e^{a x} \sin b x - b e^{a x} \cos b x} + \paren {a e^{a x} \cos b x + b e^{a x} \sin b x} } { a^2 + b^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} + C\)





isolating real part



$\blacksquare$






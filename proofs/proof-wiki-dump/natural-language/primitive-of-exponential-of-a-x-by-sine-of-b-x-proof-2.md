# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Sine_of_b_x/Proof_2

Theorem
$\ds \int e^{a x} \sin b x \rd x = \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} + C$


Proof













\(\ds \cos b x + i \sin b x\)

\(=\)







\(\ds e^{i b x}\)





Euler's Formula








\(\ds \leadsto \ \ \)





\(\ds e^{a x} \cos b x + i e^{a x} \sin b x\)

\(=\)







\(\ds e^{a x} e^{i b x}\)





multiplying both sides by $e^{a x}$














\(\ds \)

\(=\)







\(\ds e^{\paren {a + i b} x}\)





Exponent Combination Laws








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \cos b x \, \d x + i \int e^{a x} \sin b x \d x\)

\(=\)







\(\ds \int e^{\paren {a + i b} x} \d x\)





Linear Combination of Complex Integrals














\(\ds \)

\(=\)







\(\ds \frac 1 {a + i b} e^{\paren {a + i b} x} + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac {a - i b} {a^2 + b^2} e^{\paren {a + i b} x} + C\)





multiplying top and bottom by $a - i b$














\(\ds \)

\(=\)







\(\ds \frac {a - i b} {a^2 + b^2} e^{a x} e^{i b x} + C\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \frac {a - i b} {a^2 + b^2} e^{a x} \paren {\cos b x + i \sin b x} + C\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \frac a {a^2 + b^2} e^{a x} \cos b x - \frac {i b} {a^2 + b^2} e^{a x} \cos b x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {i a} {a^2 + b^2} e^{a x} \sin b x + \frac b {a^2 + b^2} e^{a x} \sin b x + C\)









The result follows from equating imaginary parts.
$\blacksquare$






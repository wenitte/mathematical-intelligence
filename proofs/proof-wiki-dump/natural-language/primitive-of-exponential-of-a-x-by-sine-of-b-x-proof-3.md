# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Sine_of_b_x/Proof_3

Theorem
$\ds \int e^{a x} \sin b x \rd x = \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} + C$


Proof













\(\ds \int e^{a x} \sin b x \rd x\)

\(=\)







\(\ds \int e^{a x} \paren {\frac {e^{i b x} - e^{-i b x} } {2 i} } \rd x\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int e^{a x} \paren {e^{i b x} - e^{-i b x} } \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int \paren {e^{a x} e^{i b x} - e^{a x} e^{-i b x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int \paren {e^{a x + i b x} - e^{a x - i b x} } \rd x\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int e^{a x + i b x} \rd x - \frac 1 {2 i} \int e^{a x - i b x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int e^{\paren {a + i b} x} \rd x - \frac 1 {2 i} \int e^{\paren {a - i b} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{\paren {a + i b} x} } {a + i b} - \frac 1 {2 i} \frac {e^{\paren {a - i b} x} } {a - i b} + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{a x + i b x} } {a + i b} - \frac 1 {2 i} \frac {e^{a x - i b x} } {a - i b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{a x} e^{i b x} } {a + i b} - \frac 1 {2 i} \frac {e^{a x} e^{-i b x} } {a - i b} + C\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{a x} e^{i b x} \paren {a - i b} } {\paren {a + i b} \paren {a - i b} } - \frac 1 {2 i} \frac {e^{a x} e^{-i b x} \paren {a + i b} } {\paren {a - i b} \paren {a + i b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} e^{i b x} \paren {a - i b} - e^{a x} e^{-i b x} \paren {a + i b} } {2 i \paren {a + i b} \paren {a - i b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} e^{i b x} \paren {a - i b} - e^{a x} e^{-i b x} \paren {a + i b} } {2 i \paren {a^2 + b^2} } + C\)





Product of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \frac {a e^{a x} e^{i b x} - i b e^{a x} e^{i b x} - a e^{a x} e^{-i b x} - i b e^{a x} e^{-i b x} } {2 i \paren {a^2 + b^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {\frac {a e^{i b x} - i b e^{i b x} - a e^{-i b x} - i b e^{-i b x} } {2 i} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {a \frac {e^{i b x} - e^{-i b x} } {2 i} - b \frac {e^{i b x} + e^{-i b x} } 2} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {a \frac {e^{i b x} - e^{-i b x} } {2 i} - b \cos b x} + C\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {a \sin b x - b \cos b x} + C\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} + C\)









$\blacksquare$






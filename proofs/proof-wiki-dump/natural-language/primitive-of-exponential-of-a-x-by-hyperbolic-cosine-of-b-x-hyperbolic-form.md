# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Hyperbolic_Cosine_of_b_x/Hyperbolic_Form

Theorem
$\ds \int e^{a x} \cosh b x \rd x = \frac {e^{a x} \paren {a \cosh b x + b \sinh b x} } {a^2 - b^2} + C$
for $a^2 \ne b^2$.


Proof













\(\ds \int e^{a x} \cosh b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} } 2 \paren {\frac {e^{b x} } {a + b} + \frac {e^{-b x} } {a - b} } + C\)





Primitive of $e^{a x} \cosh b x$: Exponential Form














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } 2 \paren {\frac {e^{b x} \paren {a - b} } {\paren {a + b} \paren {a - b} } + \frac {e^{-b x} \paren {a + b} } {\paren {a - b} \paren {a + b} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } 2 \paren {\frac {e^{b x} \paren {a - b} + e^{-b x} \paren {a + b} } {\paren {a + b} \paren {a - b} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } 2 \paren {\frac {e^{b x} \paren {a - b} + e^{-b x} \paren {a + b} } {\paren {a^2 - b^2} } } + C\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {a^2 - b^2} \paren {\frac {a e^{b x} - b e^{b x} + a e^{-b x} + b e^{-b x} } 2} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {a^2 - b^2} \paren {a \frac {e^{b x} + e^{-b x} } 2 + b \frac {e^{b x} - e^{-b x} } 2} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {a^2 - b^2} \paren {a \frac {e^b x + e^{-b} x} 2 + b \sinh b x} + C\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {a^2 - b^2} \paren {a \cosh b x + b \sinh b x } + C\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cosh b x + b \sinh b x} } {a^2 - b^2} + C\)









$\blacksquare$


Also see
Primitive of $e^{a x} \sinh b x$





# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Cosine_of_b_x/Proof_1

Theorem
$\ds \int e^{a x} \cos b x \rd x = \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} + C$


Proof













\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \cos b x} a + \frac b a \int e^{a x} \sin b x \rd x\)





Primitive of $e^{a x} \cos b x$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \cos b x} a + \frac b a \paren {\frac {e^{a x} \sin b x} a - \frac b a \int e^{a x} \cos b x \rd x}\)





Primitive of $e^{a x} \sin b x$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} a \cos b x + e^{a x} b \sin b x} {a^2} - \frac {b^2} {a^2} \int e^{a x} \cos b x \rd x\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac {b^2} {a^2} } \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {a^2 + b^2} {a^2} \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2}\)





common denominator








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)





multiplying by $\dfrac {a^2} {a^2 + b^2}$



$\blacksquare$






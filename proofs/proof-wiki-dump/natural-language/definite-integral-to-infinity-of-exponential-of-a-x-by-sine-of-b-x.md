# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_by_Sine_of_b_x

Theorem
$\ds \int_0^\infty e^{-a x} \sin b x \rd x = \frac b {a^2 + b^2}$
where $a$ and $b$ are real numbers with $a > 0$. 


Proof













\(\ds \int_0^\infty e^{-a x} \sin b x \rd x\)

\(=\)







\(\ds \intlimits {\frac {e^{-a x} \paren {-a \sin b x - b \cos b x} } {a^2 + b^2} } 0 \infty\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds -\lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} \paren {a \sin b x + b \cos b x} } {a^2 + b^2} } + \frac {e^0 \paren {a \sin 0 + b \cos 0} } {a^2 + b^2}\)




















\(\ds \)

\(=\)







\(\ds -\lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} \paren {a \sin b x + b \cos b x} } {a^2 + b^2} } +\frac b {a^2 + b^2}\)





Exponential of Zero, Sine of Zero is Zero, Cosine of Zero is One



Note that we have, by Linear Combination of Sine and Cosine: 

$\ds 0 \le \size {\frac {e^{-a x} \paren {a \sin b x + b \cos b x} } {a^2 + b^2} } \le \frac {e^{-a x} \sqrt {a^2 + b^2} } {a^2 + b^2} = \frac {e^{-a x} } {\sqrt {a^2 + b^2} }$
By Exponential Tends to Zero and Infinity: 

$\ds \lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} } {\sqrt {a^2 + b^2} } } = 0$
So by the Squeeze Theorem: 

$\ds \lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} \paren {a \sin b x + b \cos b x} } {a^2 + b^2} } = 0$
So: 

$\ds \int_0^\infty e^{-a x} \sin b x \rd x = \frac b {a^2 + b^2}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.69$





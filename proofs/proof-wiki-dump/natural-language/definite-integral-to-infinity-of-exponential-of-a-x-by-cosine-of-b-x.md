# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_by_Cosine_of_b_x

Theorem
$\ds \int_0^\infty e^{-a x} \cos b x \rd x = \frac a {a^2 + b^2}$
where $a$ and $b$ are real numbers with $a > 0$. 


Proof













\(\ds \int_0^\infty e^{-a x} \cos b x \rd x\)

\(=\)







\(\ds \intlimits {\frac {e^{-a x} \paren {-a \cos b x + b \sin b x} } {a^2 + b^2} } 0 \infty\)





Primitive of $e^{a x} \cos b x$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} \paren {-a \cos b x + b \sin b x} } {a^2 + b^2} } + \frac {e^0 \paren {a \cos 0 - b \sin 0} } {a^2 + b^2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} \paren {-a \cos b x + b \sin b x} } {a^2 + b^2} } + \frac a {a^2 + b^2}\)





Exponential of Zero, Cosine of Zero is One, Sine of Zero is Zero



Note that we have, by Linear Combination of Sine and Cosine: 

$\ds 0 \le \size {\frac {e^{-a x} \paren {-a \cos b x + b \sin x} } {a^2 + b^2} } \le \frac {e^{-a x} \sqrt {a^2 + b^2} } {a^2 + b^2} = \frac {e^{-a x} } {\sqrt {a^2 + b^2} }$
By Exponential Tends to Zero and Infinity: 

$\ds \lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} } {\sqrt {a^2 + b^2} } } = 0$
So by the Squeeze Theorem: 

$\ds \lim_{x \mathop \to \infty} \paren {\frac {e^{-a x} \paren {-a \cos b x + b \sin x} } {a^2 + b^2} } = 0$
So: 

$\ds \int_0^\infty e^{-a x} \cos b x \rd x = \frac a {a^2 + b^2}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.68$





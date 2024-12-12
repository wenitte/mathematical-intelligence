# 

Source: https://proofwiki.org/wiki/Fourier_Series/Exponential_of_x_over_Minus_Pi_to_Pi

Theorem
Let $\map f x$ be the real function defined on $\R$ as:

  $\map f x$ and its $7$th approximation
$\map f x = \begin{cases}
e^x & : -\pi < x \le \pi \\
\map f {x + 2 \pi} & : \text{everywhere} \end{cases}$

Then its Fourier series can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {\sinh \pi} \pi \paren {1 + 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {1 + n^2} \paren {\cos n x - n \sin n x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\sinh \pi} \pi \paren {1 + 2 \paren {-\dfrac {\cos x - \sin x} 2 + \dfrac {\cos 2 x - 2 \sin 2 x} 5 - \dfrac {\cos 3 x - 3 \sin 3 x} {10} + \dotsb} }\)











Proof
By definition of Fourier series:

$\displaystyle \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$

where for all $n \in \Z_{> 0}$:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_{-\pi}^\pi \map f x \cos n x \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_{-\pi}^\pi \map f x \sin n x \rd x\)










Thus by definition of $f$:














\(\ds a_0\)

\(=\)







\(\ds \frac 1 \pi \int_{-\pi}^\pi \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_{-\pi}^\pi e^x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \bigintlimits {e^x} {-\pi} \pi\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {e^\pi - e^{-\pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \dfrac {\paren {e^\pi - e^{-\pi} } } 2\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \sinh \pi\)





Definition of Hyperbolic Sine



$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_{-\pi}^\pi \map f x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \int_{-\pi}^\pi e^x \cos n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {e^x \paren {\cos n x + n \sin n x} } {1 + n^2} } {-\pi} \pi\)





Primitive of $e^x \cos n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {e^\pi \paren {\cos n \pi + n \sin n \pi} } {1 + n^2} - \frac {e^{-\pi} \paren {\cos n \paren {-\pi} + n \sin n \paren {-\pi} } } {1 + n^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {e^\pi \cos n \pi} {1 + n^2} - \frac {e^{-\pi} \cos n \paren {-\pi} } {1 + n^2} }\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {e^\pi \paren {-1}^n - e^{-\pi} \paren {-1}^n} {1 + n^2} }\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \frac {\paren {-1}^n} {1 + n^2} \frac {e^\pi - e^{-\pi} } 2\)





manipulation














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {-1}^n} {\paren {1 + n^2} \pi} \sinh \pi\)





Definition of Hyperbolic Sine



$\Box$

Now for the $\sin n x$ terms:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_{-\pi}^\pi \map f x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_{-\pi}^\pi e^x \sin n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {e^x \paren {\sin n x - n \cos n x} } {1 + n^2} } {-\pi} \pi\)





Primitive of $e^x \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {e^\pi \paren {\sin n \pi - n \cos n \pi} } {1 + n^2} - \frac {e^{-\pi} \paren {\sin n \paren {-\pi} - n \cos n \paren {-\pi} } } {1 + n^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {-e^\pi n \cos n \pi} {1 + n^2} - \frac {-e^{-\pi} n \cos n \paren {-\pi} } {1 + n^2} }\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds -\frac 1 \pi \paren {\frac {e^\pi n \paren {-1}^n - e^{-\pi} n \paren {-1}^n} {1 + n^2} }\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds -\frac {2 n} \pi \frac {\paren {-1}^n} {1 + n^2} \frac {e^\pi - e^{-\pi} } 2\)





manipulation














\(\ds \)

\(=\)







\(\ds -\frac {2 n \paren {-1}^n} {\paren {1 + n^2} \pi} \sinh \pi\)





Definition of Hyperbolic Sine



$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac 2 \pi \sinh \pi + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \paren {-1}^n} {\paren {1 + n^2} \pi} \sinh \pi \cos n x - \frac {2 n \paren {-1}^n} {\paren {1 + n^2} \pi} \sinh \pi \sin n x}\)





substituting for $a_0$, $a_n$ and $b_n$ from above














\(\ds \)

\(=\)







\(\ds \frac {\sinh \pi} \pi \paren {1 + 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {1 + n^2} \paren {\cos n x - n \sin n x} }\)





simplifying



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $4$.





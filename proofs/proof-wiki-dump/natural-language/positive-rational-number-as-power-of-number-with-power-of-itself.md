# 

Source: https://proofwiki.org/wiki/Positive_Rational_Number_as_Power_of_Number_with_Power_of_Itself



Theorem
Every positive rational number can be written either as:

$a^{a^a}$ for some irrational number $a$
or as:

$n^{n^n}$ for some natural number $n$.


Proof













\(\ds \map {\frac \d {\d x} } {x^{x^x} }\)

\(=\)







\(\ds \map {\frac \d {\d x} } {e^{x^x \ln x} }\)




















\(\ds \)

\(=\)







\(\ds e^{x^x \ln x} \map {\frac \d {\d x} } {x^x \ln x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x^{x^x} \paren {x^x \map {\frac \d {\d x} } {\ln x} + \map {\frac \d {\d x} } {x^x} \ln x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x^{x^x} \paren {x^x \frac 1 x + x^x \ln x \paren {\ln x + 1} }\)





Derivative of Natural Logarithm Function, Derivative of $x^x$














\(\ds \)

\(=\)







\(\ds x^{x^x + x} \paren {\frac 1 x + \ln x \paren {\ln x + 1} }\)









For $\ln x \le 0$ and $\ln x \ge -1$, the above is positive.
For $-1 < \ln x < 0$, we have $e^{-1} < x < 1$.














\(\ds x^{x^x + x} \paren {\frac 1 x + \ln x \paren {\ln x + 1} }\)

\(>\)







\(\ds x^{x^x + x} \paren {\frac 1 1 + \paren {-1} \paren {0 + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









so we have $\dfrac \d {\d x} x^{x^x} > 0$ for every $x > 0$.

We also have:

$\ds \lim_{x \mathop \to 0^+} x^{x^x} = \lim_{x \mathop \to 0^+} x^{\lim_{x \mathop \to 0^+} x^x} = 0^1 = 0$
Thus $x^{x^x}: \R_{>0} \to \R_{>0}$ is bijective.

For each $y > 0$, we can find some $x > 0$ such that $y = x^{x^x}$.
The result above is therefore equivalent to:

$a^{a^a}$ is irrational if $a$ is rational and not a natural number.

By Rational Number as Power of Number with Itself, as long as $a$ is not a natural number, $a^a$ is irrational.
Therefore if $a$ is not a natural number, by Gelfond-Schneider Theorem, $a^{a^a}$ is transcendental, so it is also irrational.

This proves the result.
$\blacksquare$


Also see
Rational Number as Power of Number with Itself


Sources
March 2012: J. Marshall Ash and Yiren Tan: A rational number of the form $a^a$ with $a$ irrational (The Mathematical Gazette Vol. 96: pp. 106 – 109)





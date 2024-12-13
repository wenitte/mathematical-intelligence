# 

Source: https://proofwiki.org/wiki/Imaginary_Part_of_Integer_Power_of_Complex_Number_is_Harmonic

Theorem
Let $z \in \C$ be a complex number.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $z^n$ denote $z$ raised to the $n$th power.

Then the imaginary part $\map \Im {z^n}$ of $z^n$ is a harmonic polynomial.


Proof
Let $z = x + i y$.
Then:














\(\ds z^n\)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom n j x^{n - j} y^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j x^{n - j} y^j}\)





Arbitrary Power of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \map \Im {z^n}\)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j x^{n - j} y^j\)





Definition of Imaginary Part



Then we have:














\(\ds \map {\dfrac \partial {\partial x} } {\map \Im {z^n} }\)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j \paren {n - j} x^{n - j - 1} y^j\)





Definition of Partial Derivative








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac {\partial^2} {\partial x^2} } {\map \Im {z^n} }\)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j \paren {n - j} \paren {n - j - 1} x^{n - j - 2} y^j\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n - 2 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j \paren {n - j} \paren {n - j - 1} x^{n - j - 2} y^j\)





as $n - j = 0$ when $j = n$ and $n - j - 1 = 0$ when $j = n - 1$, so terms vanish



and:














\(\ds \map {\dfrac \partial {\partial y} } {\map \Im {z^n} }\)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j j x^{n - j} y^{j - 1}\)





Definition of Partial Derivative








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac {\partial^2} {\partial y^2} } {\map \Im {z^n} }\)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j j \paren {j - 1} x^{n - j} y^{j - 2}\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds \sum_{\substack {2 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j j \paren {j - 1} x^{n - j} y^{j - 2}\)





as terms vanish when $j = 0$ and $j = 1$














\(\ds \)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le j \mathop \le n - 2 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j + 1} / 2} \dbinom n {j + 2} \paren {j + 2} \paren {j + 1} x^{n - j - 2} y^j\)





Translation of Index Variable of Summation




It remains to be shown that for $j \in \set {0, 1, \ldots, n - 2}$ that:

$\paren {-1}^{\paren {j - 1} / 2} \dbinom n j \paren {n - j} \paren {n - j - 1} = -\paren {-1}^{\paren {j + 1} / 2} \dbinom n {j + 2} \paren {j + 2} \paren {j + 1}$

First we have that:














\(\ds \paren {-1}^{\paren {j + 1} / 2}\)

\(=\)







\(\ds \paren {-1}^{\paren {j - 1} / 2 + 1}\)




















\(\ds \)

\(=\)







\(\ds -\paren {-1}^{\paren {j - 1} / 2}\)










Hence it remains to be shown that:

$\dbinom n j \paren {n - j} \paren {n - j - 1} = \dbinom n {j + 2} \paren {j + 2} \paren {j + 1}$

We have:














\(\ds \dbinom n j \paren {n - j} \paren {n - j - 1}\)

\(=\)







\(\ds \dbinom n {n - j} \paren {n - j} \paren {n - j - 1}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds n \dbinom {n - 1} {n - j - 1} \paren {n - j - 1}\)





Factors of Binomial Coefficient




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dbinom n j \paren {n - j} \paren {n - j - 1}\)

\(=\)







\(\ds n \paren {n - 1} \dbinom {n - 2} {n - j - 2}\)





Factors of Binomial Coefficient




and:














\(\ds \dbinom n {j + 2} \paren {j + 2} \paren {j + 1}\)

\(=\)







\(\ds n \dbinom {n - 1} {j + 1} \paren {j + 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n \paren {n - 1} \dbinom {n - 2} j\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n \paren {n - 1} \dbinom {n - 2} {n - j - 2}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \dbinom n j \paren {n - j} \paren {n - j - 1}\)





from $(1)$



Hence the result.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Powers: $3.7.23$





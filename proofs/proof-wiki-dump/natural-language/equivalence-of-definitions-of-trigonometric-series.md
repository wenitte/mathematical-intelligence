# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Trigonometric_Series



Theorem
The following definitions of the concept of Trigonometric Series are equivalent:

Conventional Form
A trigonometric series is a series of the type:

$\map S x = \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$
where:

the domain of $x$ is the set of real numbers $\R$
the coefficients $a_0, a_1, a_2, \ldots, a_n, \ldots; b_1, b_2, \ldots, b_n, \ldots$ are real numbers independent of $x$.
Complex Form
A trigonometric series can be expressed in a form using complex functions as follows:

$\map S x = \ds \sum_{n \mathop = -\infty}^\infty c_n e^{i n x}$
where:

the domain of $x$ is the set of real numbers $\R$
the coefficients $\ldots, c_{-n}, \ldots, c_{-2}, c_{-1}, c_0, c_1, c_2, \ldots, c_n, \ldots$ are real numbers independent of $x$
$c_{-n} = \overline {c_n}$ where $\overline {c_n}$ is the complex conjugate of $c_n$.


Proof
Let $\map S x = \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$.
Set:














\(\ds \cos n x\)

\(=\)







\(\ds \frac {e^{i n x} + e^{- i n x} } 2\)





Euler's Cosine Identity














\(\ds \sin n x\)

\(=\)







\(\ds \frac {e^{i n x} - e^{- i n x} } {2 i}\)





Euler's Sine Identity




Then:














\(\ds \map S x\)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \frac {e^{i n x} + e^{- i n x} } 2 + b_n \frac {e^{i n x} - e^{- i n x} } {2 i} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {\paren {\frac {a_n} 2 + \frac {b_n} {2 i} } e^{i n x} + \paren {\frac {a_n} 2 - \frac {b_n} {2 i} } e^{- i n x} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {\paren {\frac {a_n - i b_n} 2} e^{i n x} + \paren {\frac {a_n + i b_n} 2} e^{- i n x} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {\frac {a_n - i b_n} 2} e^{i n x} + \sum_{n \mathop = 1}^\infty \paren {\frac {a_n + i b_n} 2} e^{- i n x}\)










Let $b_0 := 0$.
Then let:

$\forall n \in \N: c_n = \dfrac {a_n - i b_n} 2$
Thus it follows that:

$c_0 = \dfrac {a_0 - 0 \times i} 2 = \dfrac {a_0} 2$

Then let:

$c_{-n} = \dfrac {a_n + i b_n} 2$
from which it follows that:

$c_{-n} = \overline {\paren {\dfrac {a_n - i b_n} 2} }$
and again:

$c_0 = \dfrac {a_0 + 0 \times i} 2 = \dfrac {a_0} 2$

Then it is noted that:

$e^{i \times 0 \times x} = e^0 = 1$
and it follows that:














\(\ds \map S x\)

\(=\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {\frac {a_n - i b_n} 2} e^{i n x} + \sum_{n \mathop = 1}^\infty \paren {\frac {a_n + i b_n} 2} e^{- i n x}\)





from above














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\frac {a_n - i b_n} 2} e^{i n x} + \sum_{n \mathop = 1}^\infty \paren {\frac {a_n + i b_n} 2} e^{- i n x}\)





subsuming $a_0$ into first summation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty c_n e^{i n x} + \sum_{n \mathop = 1}^\infty c_{-n} e^{- i n x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty c_n e^{i n x} + \sum_{n \mathop = -\infty}^{-1} c_n e^{i n x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = -\infty}^\infty c_n e^{i n x}\)









where it is noted that $c_{-n} = \overline {c_n}$ as required.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 1$. Trigonometrical Series





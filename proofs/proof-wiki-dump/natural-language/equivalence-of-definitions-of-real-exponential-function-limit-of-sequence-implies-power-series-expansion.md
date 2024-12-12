# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Limit_of_Sequence_implies_Power_Series_Expansion



Theorem
The following definition of the concept of the real exponential function:

As the Limit of a Sequence
The exponential function can be defined as the following limit of a sequence:

$\exp x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

implies the following definition:

As a Power Series Expansion
The exponential function can be defined as a power series:

$\exp x := \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$


Proof
Let $\exp x$ be the real function defined as the limit of the sequence:

$\exp x := \ds \lim_{n \mathop \to \infty} \paren {1 + \frac x n}^n$
From the General Binomial Theorem:














\(\ds \paren {1 + \frac x n}^n\)

\(=\)







\(\ds 1 + x + \frac {n \paren {n - 1} x^2} {2! \ n^2} + \frac {n \paren {n - 1} \paren {n - 2} x^3} {3! \ n^3} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {x^0} {0!} + \frac {x^1} {1!} + \paren {\frac {n - 1} n} \frac {x^2} {2!} + \paren {\frac {\paren {n - 1} \paren {n - 2} } {n^2} } \frac {x^3} {3!} + \cdots\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \paren {1 + \frac x n}^n - \paren {\frac {x^0} {0!} + \frac {x^1} {1!} + \paren {\frac {n - 1} n} \frac {x^2} {2!} + \paren {\frac {\paren {n - 1} \paren {n - 2} } {n^2} } \frac {x^3} {3!} + \cdots}\)









From Power over Factorial, this converges to:

$\exp x - \paren {\dfrac {x^0} {0!} + \dfrac {x^1} {1!} + \dfrac {x^2} {2!} + \dfrac {x^3} {3!} + \cdots} = 0$
as $n \to +\infty$.








\(\ds \leadsto \ \ \)





\(\ds \exp x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)









$\blacksquare$






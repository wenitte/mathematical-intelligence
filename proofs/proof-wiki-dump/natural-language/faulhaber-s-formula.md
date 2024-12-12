# 

Source: https://proofwiki.org/wiki/Faulhaber%27s_Formula

Theorem
Let $n, p \in \Z_{>0}$ be (strictly) positive integers.

Then:














\(\ds \sum_{k \mathop = 1}^n k^p\)

\(=\)







\(\ds \frac 1 {p + 1} \sum_{i \mathop = 0}^p \paren {-1}^i \binom {p + 1} i B_i n^{p + 1 - i}\)




















\(\ds \)

\(=\)







\(\ds \frac {n^{p + 1} } {p + 1} - \frac {B_1 \, n^p} {1!} + \frac {B_2 \, p \, n^{p - 1} } {2!} + \frac {B_4 \, p \paren {p - 1} \paren {p - 2} n^{p - 3} } {4!} + \cdots\)









where:

$B_i$ denotes the $i$th Bernoulli number.


Proof
Let $x \ge 0$.














\(\ds \sum_{k \mathop = 0}^{n - 1} e^{k x}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \sum_{p \mathop = 0}^\infty \frac {\paren {k x}^p} {p!}\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \paren {\sum_{k \mathop = 0}^{n - 1} k^p} \frac {x^p} {p!}\)





rearrangement is valid by Tonelli's Theorem




We also have:














\(\ds \sum_{k \mathop = 0}^{n - 1} e^{k x}\)

\(=\)







\(\ds \frac {1 - e^{n x} } {1 - e^x}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac {e^{n x} - 1} x \frac x {e^x - 1}\)





multiplying numerator and denominator by $x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {\sum_{p \mathop = 0}^\infty \frac {\paren {n x }^p} {p!} - 1 } \sum_{p \mathop = 0}^\infty \frac {B_p x^p} {p!}\)





Definition of Bernoulli Numbers and Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {\sum_{p \mathop = 1}^\infty \frac {\paren {n x }^p} {p!} } \sum_{p \mathop = 0}^\infty \frac {B_p x^p} {p!}\)





Factorial of $0$ and Zeroth Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {\sum_{p \mathop = 0}^\infty \frac {\paren {n x }^{p + 1} } {\paren {p + 1}! } } \sum_{p \mathop = 0}^\infty \frac {B_p x^p} {p!}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \frac {n^{p + 1} x^p} {\paren {p + 1}!} \sum_{p \mathop = 0}^\infty \frac {B_p x^p} {p!}\)





Power of Product














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \sum_{i \mathop = 0}^p \frac {n^{p + 1 - i} x^{p - i} } {\paren {p + 1 - i}!} \frac {B_i x^i} {i!}\)





Definition of Cauchy Product














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \paren {\sum_{i \mathop = 0}^p \dfrac {p + 1} {p + 1} \dfrac {p!} {p!} \dfrac 1 {\paren {p + 1 - i}! i!} B_i n^{p + 1 - i} } x^p\)





multiplying by $1$ and Product of Powers














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \paren {\frac 1 {p + 1} \sum_{i \mathop = 0}^p \binom {p + 1} i B_i n^{p + 1 - i} } \frac {x^p} {p!}\)





Definition of Binomial Coefficient




Equating coefficients:














\(\ds \sum_{k \mathop = 0}^{n - 1} k^p\)

\(=\)







\(\ds \frac 1 {p + 1} \sum_{i \mathop = 0}^p \binom {p + 1} i B_i n^{p + 1 - i}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^{n - 1} k^p + n^p\)

\(=\)







\(\ds \frac 1 {p + 1} \sum_{i \mathop = 0}^p \binom {p + 1} i B_i n^{p + 1 - i} + \paren {\frac 1 {p + 1} \binom {p + 1} 1 n^p }\)





adding $n^p$ to both sides and Binomial Coefficient with One








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^n k^p\)

\(=\)







\(\ds \frac 1 {p + 1} \sum_{i \mathop = 0}^p \paren {-1}^i \binom {p + 1} i B_i n^{p + 1 - i}\)





as $B_1 = -\dfrac 1 2$ and Odd Bernoulli Numbers Vanish



$\blacksquare$


Source of Name
This entry was named for Johann Faulhaber.






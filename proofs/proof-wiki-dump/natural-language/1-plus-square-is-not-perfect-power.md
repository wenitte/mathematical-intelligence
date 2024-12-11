# 

Source: https://proofwiki.org/wiki/1_plus_Square_is_not_Perfect_Power



Theorem
The equation:

$x^p = y^2 + 1$
has no solution in the integers for $x, y, p > 1$.


Proof
Suppose $p$ is even. 
Write $p = 2 k$.
Then:














\(\ds 1\)

\(=\)







\(\ds y^2 - x^{2 k}\)




















\(\ds \)

\(=\)







\(\ds \paren {y - x^k} \paren {y + x^k}\)





Difference of Two Squares



Since both $y - x^k$ and $y + x^k$ are integers, they must be equal to $\pm 1$.
Summing them up, we have $2 y$ is one of $-2, 0, 2$.
Thus $y$ is one of $-1, 0, 1$, and we ignore these solutions due to our condition $y > 1$.

Now suppose $p$ is odd.
Suppose $y$ is odd.
Then $x^p = y^2 + 1$ is even.
Hence $x$ is even.
Then:














\(\ds 0\)

\(\equiv\)







\(\ds x^p\)

\(\ds \pmod 8\)



as $p \ge 3$














\(\ds \)

\(\equiv\)







\(\ds y^2 + 1\)

\(\ds \pmod 8\)


















\(\ds \)

\(\equiv\)







\(\ds 1 + 1\)

\(\ds \pmod 8\)



Odd Square Modulo 8














\(\ds \)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 8\)







which is a contradiction.
Hence $y$ must be even, and $x$ must be odd.

From Gaussian Integers form Euclidean Domain, we can define greatest common divisors on $\Z \sqbrk i$, and it admits unique factorization.
We factorize $y^2 + 1$:

$x^p = y^2 + 1 = \paren {1 + i y} \paren {1 - i y}$
The greatest common divisors of $1 + i y$ and $1 - i y$ must divide their sum and product.
Their sum is $2$ while their product is $y^2 + 1$, which is odd.
Therefore we see that $1 + i y$ and $1 - i y$ are coprime.

From unique factorization we must have that both $1 + i y$ and $1 - i y$ is a product of a unit and a $p$th power.
By Units of Gaussian Integers, the units are $\pm 1$ and $\pm i$.
Hence

$\exists u \in \set {\pm 1, \pm i}: \exists \alpha \in \Z \sqbrk i: 1 + i y = u \alpha^p, 1 - i y = \bar u \bar \alpha^p$
Since $p$ is odd:

$1^p = 1$
$\paren {-1}^p = -1$
$i^p = \pm i$
$\paren {-i}^p = -i^p = \mp i$
therefore there is some unit $u' \in \set {\pm 1, \pm i}$ such that $u'^p = u$.
By writing $\beta = u' \alpha$:

$1 + i y = u'^p \alpha^p = \beta^p, 1 - i y = \bar \beta^p$

Write $\beta = a + i b$, where $a, b \in \Z$.
By Sum of Two Odd Powers:

$2 a = \beta + \bar \beta \divides \beta^p + \bar \beta^p = 2$
this gives $a = \pm 1$.
We also have:














\(\ds 1 + y^2\)

\(=\)







\(\ds \beta^p \bar \beta^p\)




















\(\ds \)

\(=\)







\(\ds \paren {\beta \bar \beta}^p\)




















\(\ds \)

\(=\)







\(\ds \paren {a^2 + b^2}^p\)





Product of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \paren {1 + b^2}^p\)









since $1 + y^2$ is odd, $b$ must be even.

Hence:














\(\ds 1 + i y\)

\(=\)







\(\ds \beta^p\)




















\(\ds \)

\(=\)







\(\ds \paren {a + i b}^p\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^p \binom p k a^{p - k} \paren {i b}^k\)





Binomial Theorem














\(\ds \)

\(\equiv\)







\(\ds a^p + p a^{p - 1} i b\)

\(\ds \pmod 4\)



$k \ge 2$ vanish as all terms containing $b^2$ is divisible by $4$



In particular, comparing real parts gives $1 \equiv a^p \pmod 4$.
Since $p$ is odd, we have $a = 1$.

Now we have:














\(\ds 1 + i y\)

\(=\)







\(\ds \paren {1 + i b}^p\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^p \binom p k 1^{p - k} \paren {i b}^k\)





Binomial Theorem








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\paren {p - 1} / 2} \binom p {2 k} b^{2 k} \paren {-1}^k\)





Comparing Real Parts; only even $k$ remain














\(\ds \)

\(=\)







\(\ds 1 - \binom p 2 b^2 + \sum_{k \mathop = 2}^{\paren {p - 1} / 2} \binom p {2 k} b^{2 k} \paren {-1}^k\)




















\(\ds \)

\(=\)







\(\ds 1 - \binom p 2 b^2 + \sum_{k \mathop = 2}^{\paren {p - 1} / 2} \paren {\frac {p \paren {p - 1} } {2 k \paren {2 k - 1} } } \binom {p - 2} {2 k - 2} b^{2 k} \paren {-1}^k\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds 1 - \binom p 2 b^2 + \binom p 2 b^2 \sum_{k \mathop = 2}^{\paren {p - 1} / 2} \paren {\frac 1 {k \paren {2 k - 1} } } \binom {p - 2} {2 k - 2} b^{2 k - 2} \paren {-1}^k\)





Binomial Coefficient with Two








\(\ds \leadsto \ \ \)





\(\ds \binom p 2 b^2\)

\(=\)







\(\ds \binom p 2 b^2 \sum_{k \mathop = 2}^{\paren {p - 1} / 2} \paren {\frac 1 {k \paren {2 k - 1} } } \binom {p - 2} {2 k - 2} b^{2 k - 2} \paren {-1}^k\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \sum_{k \mathop = 2}^{\paren {p - 1} / 2} \paren {\frac 1 {k \paren {2 k - 1} } } \binom {p - 2} {2 k - 2} b^{2 k - 2} \paren {-1}^k\)









The summands on the right hand side may not be an integer, but if we can show:

In canonical form, the numerator of each summand is even
then the equation is never satisfied.
This is because the sum of all the terms will be a rational number with even numerator and odd denominator, which cannot equal to $1$.

Since $2 k + 1$ is always odd and $\paren {-1}^k \dbinom {p - 2} {2 k - 2}$ is always an integer, we only need to check $\dfrac {b^{2 k - 2} } k$.
Since $b$ is even:

$2^{2 k - 2} \divides b^{2 k - 2}$
But we have:














\(\ds 2^{2 k - 2}\)

\(\ge\)







\(\ds 2^k\)





as $k \ge 2$














\(\ds \)

\(>\)







\(\ds k\)





N less than M to the N



Hence the largest power of $2$ that divides $k$ is less than $2^{2 k - 2}$.
Therefore the numerator of $\dfrac {b^{2 k - 2} } k$ is even.
And thus all the equations above are never satisfied.

So our original equation:

$x^p = y^2 + 1$
has no solution in the integers for $x, y, p > 1$.
$\blacksquare$


Historical Note
This is a special case of Catalan's Conjecture, and is due to Victor-Amédée Lebesgue.
(Not to be confused with Henri Léon Lebesgue.)


Sources
1850: Victor-Amédée Lebesgue: Sur l'impossibilité en nombres entiers de l'équation $x^m = y^2 + 1$ (Nouv. Ann. Math. Ser. 1 Vol. 9: pp. 178 – 181)
2014: Yuri F. Bilu, Yann Bugeaud and Maurice Mignotte: The Problem of Catalan: Chapter $2$: Even Exponents





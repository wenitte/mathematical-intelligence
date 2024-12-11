# 

Source: https://proofwiki.org/wiki/1_plus_Perfect_Power_is_not_Prime_Power_except_for_9



Theorem
The only solution to:

$x^m = y^n + 1$
is:

$\tuple {x, m, y, n} = \tuple {3, 2, 2, 3}$
for positive integers $x, y, m, n > 1$, and $x$ is a prime number.

This is a special case of Catalan's Conjecture.


Proof
It suffices to show the result for prime values of $n$.
The case $n = 2$ is covered in 1 plus Square is not Perfect Power.
So we consider the cases where $n$ is an odd prime.















\(\ds x^m\)

\(=\)







\(\ds y^n + 1\)




















\(\ds \)

\(=\)







\(\ds y^n - \paren {-1}^n\)





as $n$ is odd














\(\ds \)

\(=\)







\(\ds \paren {y - \paren {-1} } \sum_{j \mathop = 0}^{n - 1} y^{n - j - 1} \paren {-1}^j\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds \paren {y + 1} \paren {\map Q y \paren {y + 1} + R}\)





Division Theorem for Polynomial Forms over Field



where $Q$ is a polynomial in one unknown and $R$ is a degree zero polynomial, so $R$ is a constant.
We have:














\(\ds R\)

\(=\)







\(\ds \map Q {-1} \paren {-1 + 1} + R\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \paren {-1}^{n - j - 1} \paren {-1}^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \paren {-1}^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} 1\)





as $n$ is odd














\(\ds \)

\(=\)







\(\ds n\)









Hence we have $x^m = \paren {y + 1} \paren {\map Q y \paren {y + 1} + n}$.
Since $x$ is a prime, we have:

$x \divides y + 1$
$x \divides \map Q y \paren {y + 1} + n$
Hence $x \divides n$.
Since $x > 1$ and $n$ is a prime, we must have $x = n$.

Now we write $y + 1 = x^\alpha$.
Then we have:














\(\ds x^m\)

\(=\)







\(\ds \paren {y + 1} \paren {\map Q y \paren {y + 1} + n}\)




















\(\ds \)

\(=\)







\(\ds x^\alpha \paren {\map Q y x^\alpha + x}\)




















\(\ds \)

\(=\)







\(\ds x^{\alpha + 1} \paren {\map Q y x^{\alpha - 1} + 1}\)









For $\alpha > 1$, $x \nmid \map Q y x^{\alpha - 1} + 1$.
Hence $\alpha = 1$.
This gives $y + 1 = x = n$.
The equation now simplifies to:

$\paren {y + 1}^m = y^n + 1$

Expanding:














\(\ds \paren {y + 1}^m\)

\(=\)







\(\ds \sum_{j \mathop = 0}^m \binom m j y^j 1^{m - j}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1 + \sum_{j \mathop = 1}^m \binom m j y^j\)




















\(\ds \)

\(=\)







\(\ds y^n + 1\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{j \mathop = 1}^m \binom m j y^{j - 1}\)

\(=\)







\(\ds y^{n - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \binom m 1 y^0\)

\(=\)







\(\ds 0\)

\(\ds \pmod y\)



as $y > 1$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds 0\)

\(\ds \pmod y\)



Binomial Coefficient with One



hence we must have $y \divides m$.
By Absolute Value of Integer is not less than Divisors, $y \le m$.
Moreover, from $\ds \sum_{j \mathop = 1}^m \binom m j y^{j - 1} = y^{n - 1}$ we also have:

$y^{n - 1} > \dbinom m m y^{m - 1} = y^{m - 1}$
Therefore we also have $n > m$.
This gives $y = n - 1 \ge m$.
The two inequalities forces $y = m$.

Now our original equation is further simplified to:














\(\ds \paren {y + 1}^y\)

\(=\)







\(\ds y^{y + 1} + 1\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac 1 y}^y\)

\(=\)







\(\ds y + \frac 1 {y^y}\)





Dividing both sides by $y^y$



From Real Sequence (1 + x over n)^n is Convergent:

$\paren {1 + \dfrac 1 y}^y$ is increasing and has limit $e$.
Then we have for all $y \in \N$:

$y + \dfrac 1 {y^y} < e < 3$
Since $\dfrac 1 {y^y} > 0$ and $y > 1$, we can only have $y = 2$.
This gives the solution $3^2 = 2^3 + 1$, and there are no others.
$\blacksquare$


Also see
Cube which is One Less than a Square


Sources
1870: G.C. Gerono: Note sur la résolution en nombres entiers et positifs de l’équation $x^m = y^n + 1$ (Nouv. Ann. Math. Ser. 2 Vol. 9: pp. 469 – 471)





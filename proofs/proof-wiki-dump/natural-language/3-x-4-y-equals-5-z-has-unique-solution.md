# 

Source: https://proofwiki.org/wiki/3%5Ex_%2B_4%5Ey_equals_5%5Ez_has_Unique_Solution

Theorem
The Diophantine equation:

$3^x + 4^y = 5^z$
has exactly one solution in (strictly) positive integers:

$3^2 + 4^2 = 5^2$


Proof
Rewriting our Diophantine equation modulo $4$ we have:

$\paren {-1}^x + 0^y \equiv 1^z \pmod 4$
Therefore $x$ is even.
Rewriting our Diophantine equation modulo 3 we have:

$0^x + 1^y \equiv \paren {-1}^z \pmod 3$
Therefore $z$ is even.

Since $x$ and $z$ must both be even, we will rewrite $x$ as $2 r$, $z$ as $2 s$ and notice that $4$ is $2^2$.
We now have:














\(\ds 3^{2 r} + 2^{2 y}\)

\(=\)







\(\ds 5^{2 s}\)




















\(\ds 5^{2 s} - 3^{2 r}\)

\(=\)







\(\ds 2^{2 y}\)





rewriting the equation














\(\ds \paren {5^s + 3^r} \paren {5^s - 3^r}\)

\(=\)







\(\ds 2^{2 y}\)





factoring the left hand side: Difference of Two Squares




We can see that the right hand side is a product consisting entirely of instances of $2$.
Therefore:

$\paren {5^s + 3^r} = 2^u$
and:

$\paren {5^s - 3^r} = 2^v$
where $u > v$ and $u + v = 2 y$.

Solving for $5^s$, we add the two equations and get:














\(\ds \paren {5^s + 3^r} + \paren {5^s - 3^r}\)

\(=\)







\(\ds 2^u + 2^v\)




















\(\ds 5^s\)

\(=\)







\(\ds 2^{u - 1} + 2^{v - 1}\)





Dividing both sides by $2$














\(\ds \)

\(=\)







\(\ds 2^{v - 1} \paren {2^{u - v} + 1}\)





Factoring out $2^{v - 1}$




Solving for $3^r$, we subtract the two equations and get:














\(\ds \paren {5^s + 3^r} - \paren {5^s - 3^r}\)

\(=\)







\(\ds 2^u - 2^v\)




















\(\ds 3^r\)

\(=\)







\(\ds 2^{u - 1} - 2^{v - 1}\)





dividing both sides by $2$














\(\ds \)

\(=\)







\(\ds 2^{v - 1} \paren {2^{u - v} - 1}\)





factoring out $2^{v - 1}$




Since both $5^s$ and $3^r$ are odd, $v$ must be equal to $1$.
Let $t = u - v$.
We now have:

$5^s = \paren {2^t + 1}$
$3^r = \paren {2^t - 1}$

Let us now consider the second equation Modulo 3:

$0 \equiv \paren{-1}^t - 1 \pmod 3$
Therefore t must be even. 
We will rewrite the second equation above with $t$ as $2 w$:














\(\ds 3^r\)

\(=\)







\(\ds \paren {2^{2w} - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2^w + 1} \paren {2^w - 1}\)





Difference of Two Squares




We can see that the left hand side is a product consisting entirely of instances of $3$.
Therefore:

$ 3^m = \paren {2^w + 1}$
and:

$ 3^n = \paren {2^w - 1}$
where $m > n$ and $m + n = r$.

Subtracting the $2$ equations above we get:














\(\ds 3^m - 3^n\)

\(=\)







\(\ds \paren{2^w + 1} - \paren{2^w - 1}\)




















\(\ds \)

\(=\)







\(\ds 2\)









Therefore $m = 1$ and $n = 0$.

From above:

$3^m = \paren {2^w + 1}$
therefore:

$w = 1$

Recall that $t = 2w$.
Therefore:

$t = 2$
and:

$5^s = \paren {2^t + 1}$
$3^r = \paren {2^t - 1}$
Therefore $r = 1$ and $s = 1$.

Finally recall that $x = 2 r$ and $z = 2 s$.
Therefore we arrive at the only possible solution in (strictly) positive integers:

$x = 2$, $y = 2$ and $z = 2$
$\blacksquare$


Sources
1993: Nobuhiro Terai: The Diophantine equation $x^2 + q^m = p^n$ (Acta Arithmetica Vol. 63: pp. 351 – 358)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2$





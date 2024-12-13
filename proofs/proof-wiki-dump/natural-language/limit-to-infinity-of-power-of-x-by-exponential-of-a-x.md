# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Power_of_x_by_Exponential_of_-a_x

Theorem
Let $k$ and $a$ be positive real numbers. 
Then: 

$\ds \lim_{x \mathop \to \infty} x^k e^{-a x} = 0$


Proof
By Power Series Expansion for Exponential Function, we have: 

$\ds e^{a x} = \sum_{n \mathop = 0}^\infty \frac {\paren {a x}^n} {n!}$
Since for $x > 0$ each term in this sum is non-negative, we have: 

$\ds e^{a x} \ge \frac {\paren {a x}^{\floor k + 1} } {\paren {\floor k + 1}!}$
for each $k$.
So, for each $x > 0$ we have: 

$\ds 0 < e^{-a x} \le \frac {\paren {\floor k + 1}!} {\paren {a x}^{\floor k + 1} }$
So that: 

$\ds 0 \le x^k e^{-a x} \le \frac 1 {a^{\floor k + 1} } x^{k - \floor k - 1} \paren {\floor k + 1}!$
From the definition of the floor function, we have: 

$0 \le k - \floor k < 1$
so:

$k - \floor k - 1 < 0$
Hence by Limit to Infinity of Power:

$\ds \lim_{x \mathop \to \infty} \frac 1 {a^{\floor k + 1} } x^{k - \floor k - 1} \paren {\floor k + 1}! = 0$
So, by the Squeeze Theorem, we have: 

$\ds \lim_{x \mathop \to \infty} x^k e^{-a x} = 0$
$\blacksquare$






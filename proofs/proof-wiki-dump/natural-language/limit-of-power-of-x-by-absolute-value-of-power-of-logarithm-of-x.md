# 

Source: https://proofwiki.org/wiki/Limit_of_Power_of_x_by_Absolute_Value_of_Power_of_Logarithm_of_x

Theorem
Let $\alpha$ and $\beta$ be positive real numbers. 
Then: 

$\ds \lim_{x \mathop \to 0^+} x^\alpha \size {\ln x}^\beta = 0$


Corollary
Let $k$ be a positive real number. 
Let $n$ be a positive integer. 

Then: 

$\ds \lim_{x \mathop \to 0^+} x^k \paren {\ln x}^n = 0$


Proof
From Order of Natural Logarithm Function, we have: 

$\ln x = \map \OO {x^{-\frac \alpha {2 \beta} } }$ as $x \to 0^+$
That is, by the definition of big-O notation there exists positive real numbers $x_0$ and $C$ such that: 

$0 \le \size {\ln x} \le C x^{-\frac \alpha {2 \beta} }$
for $0 < x \le x_0$.
So:

$0 \le \size {\ln x}^\beta \le C^\beta x^{-\alpha/2}$
for $0 < x \le x_0$. 
That is: 

$0 \le x^\alpha \size {\ln x}^\beta \le C^\beta x^{\alpha/2}$
We have that: 

$\ds \lim_{x \mathop \to 0^+} C^\beta x^{\alpha/2} = 0$
so by the Squeeze Theorem for Functions:

$\ds \lim_{x \mathop \to 0^+} x^\alpha \size {\ln x}^\beta = 0$
$\blacksquare$






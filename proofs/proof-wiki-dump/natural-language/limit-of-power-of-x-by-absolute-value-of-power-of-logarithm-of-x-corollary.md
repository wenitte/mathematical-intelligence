# 

Source: https://proofwiki.org/wiki/Limit_of_Power_of_x_by_Absolute_Value_of_Power_of_Logarithm_of_x/Corollary

Corollary to Limit of Power of x by Absolute Value of Power of Logarithm of x
Let $k$ be a positive real number. 
Let $n$ be a positive integer. 

Then: 

$\ds \lim_{x \mathop \to 0^+} x^k \paren {\ln x}^n = 0$


Proof
From Limit of $x^\alpha \size {\ln x}^\beta$, we have: 

$\ds \lim_{x \mathop \to 0^+} x^k \size {\ln x}^n = 0$
For $0 < x \le 1$, we have: 

$\ln x \le 0$
so by the definition of the absolute value, we have: 

$\size {\ln x} = -\ln x$
so:

$\ds \lim_{x \mathop \to 0^+} x^k \paren {-\ln x}^n = 0$
That is, from the Multiple Rule for Limits of Real Functions:

$\ds \paren {-1}^n \lim_{x \mathop \to 0^+} x^k \paren {\ln x}^n = 0$
giving:

$\ds \lim_{x \mathop \to 0^+} x^k \paren {\ln x}^n = 0$
$\blacksquare$






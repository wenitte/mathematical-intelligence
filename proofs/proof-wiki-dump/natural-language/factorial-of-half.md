# 

Source: https://proofwiki.org/wiki/Factorial_of_Half



Theorem
$\left({\dfrac 1 2}\right)! = \dfrac {\sqrt \pi} 2$
where $x!$ denotes the extension of the factorial function to the real numbers.


Proof 1













\(\ds \paren {\dfrac 1 2}!\)

\(=\)







\(\ds \map \Gamma {1 + \dfrac 1 2}\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \Gamma {\dfrac 1 2}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\pi}\)





Gamma Function of One Half



$\blacksquare$


Proof 2
From Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta:

$\ds \prod_{n \mathop \ge 1} \dfrac {\paren {n + \alpha_1} \cdots \paren {n + \alpha_k} } {\paren {n + \beta_1} \cdots \paren {n + \beta_k} } = \dfrac {\map \Gamma {1 + \beta_1} \cdots \map \Gamma {1 + \beta_k} } {\map \Gamma {1 + \alpha_1} \cdots \map \Gamma {1 + \alpha_k} }$
where:

$\alpha_1 + \cdots + \alpha_k = \beta_1 + \cdots + \beta_k$
none of the $\beta$s is a negative integer.

Setting:

$k = 2$
$\alpha_1 = \alpha_2 = 0$
$\beta_1 = -\dfrac 1 2, \beta_2 = \dfrac 1 2$
we see that:

$\alpha_1 + \alpha_2 = \beta_1 + \beta_2$

So this reduces to:














\(\ds \prod_{n \mathop \ge 1} \dfrac n {n - \frac 1 2} \dfrac n {n + \frac 1 2}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 - \frac 1 2} \map \Gamma {1 + \frac 1 2} } {\map \Gamma 1 \map \Gamma 1}\)




















\(\ds \)

\(=\)







\(\ds \map \Gamma {\frac 1 2} \map \Gamma {1 + \frac 1 2}\)





as $\map \Gamma 1 = 0! = 1$














\(\ds \)

\(=\)







\(\ds 2 \map \Gamma {1 + \frac 1 2}^2\)





Gamma Difference Equation



We then note that by Wallis's Product:

$\ds \prod_{n \mathop \ge 1} \dfrac n {n - \frac 1 2} \dfrac n {n + \frac 1 2} = \frac \pi 2$
Thus:














\(\ds \frac \pi 2\)

\(=\)







\(\ds 2 \map \Gamma {1 + \frac 1 2}^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac \pi 4\)

\(=\)







\(\ds \paren {\paren {\frac 1 2}!}^2\)





Gamma Function Extends Factorial








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac 1 2}!\)

\(=\)







\(\ds \frac {\sqrt \pi} 2\)









$\blacksquare$


Historical Note
The factorial of $\dfrac 1 2$ was deduced by James Stirling during the course of his attempt to extend the factorial to the real numbers.
However he was not able to prove that such an extension defined $n!$ for a general non-integer $n$.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials





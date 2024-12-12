# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_with_Self_minus_One



Theorem
$\forall n \in \N_{>0}: \dbinom n {n - 1} = n$


Proof 1
The case where $n = 1$ can be taken separately.
From Binomial Coefficient with Zero:

$\dbinom 1 0 = 1$
demonstrating that the result holds for $n = 1$.

Let $n \in \N: n > 1$.
From the definition of binomial coefficients:

$\dbinom n {n - 1} = \dfrac {n!} {\paren {n - 1}! \paren {n - \paren {n - 1} }!} = \dfrac {n!} {\paren {n - 1}! \ 1!}$
the result following directly from the definition of the factorial.
$\blacksquare$


Proof 2
From Cardinality of Set of Subsets, $\dbinom n {n - 1}$ is the number of combination of things taken $n - 1$ at a time.
Choosing $n - 1$ things from $n$ is the same thing as choosing which $1$ of the elements to be left out.
There are $n$ different choices for that $1$ element.
Therefore there are $n$ ways to choose $n - 1$ things from $n$.
$\blacksquare$


Also see
Particular Values of Binomial Coefficients for other similar results.


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients: $1.28$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $1$





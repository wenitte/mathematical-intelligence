# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_of_Cosine_of_x/Proof_2


This article needs to be tidied.In particular: You probably want to review our house style if you want to contribute widely.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem













\(\ds e^{\cos x}\)

\(=\)







\(\ds e \paren {e^{\cos x - 1} }\)




















\(\ds \)

\(=\)







\(\ds e \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^m \map {P_2} {2 m} } {2 m!} x^{2 m} }\)





where $\map {P_2} {2 m}$ is the partition of the set of size $2 m$ into even blocks














\(\ds \)

\(=\)







\(\ds e \paren {1 - \dfrac {x^2} 2 + \dfrac {x^4} 6 - \dfrac {31 x^6} {720} + \cdots}\)









for all $x \in \R$.


Proof
A result in combinatorics known as the Exponential formula states that if 

$\ds \map f x = \sum_{n \mathop = 1}^\infty \frac {c_n} {n!} x^n $
then:

$\ds e^{\map f x} = \sum_{k \mathop = 0}^\infty \frac {\map {B_k} {c_1, c_2, \ldots, c_k} } {k!} x^k$
where $\map {B_k} {c_1, c_2, \ldots, c_k}$ is the $k$th complete Bell Polynomial.
From the Power Series Expansion for Cosine Function, we get:

$\ds \cos x - 1 = \sum_{p \mathop = 1}^\infty \frac {\paren {-1}^p} {2 p!} x^{2 p}$
Using this we may plug the sequence $\tuple {0, -1, 0, 1, 0, -1}$ into the first $6$ complete Bell Polynomials.
An arbitrary even Complete Bell Polynomial, will take the form:

$\ds \map {B_n} {x_1, x_2, x_3, \ldots, x_n} = \sum \frac {n!} {k_1! k_2! \dotsm k_n!} \paren {\frac {x_1} {1!} }^{c_1} \paren {\frac {x_2} {2!} }^{c_2} \dotsm \paren {\frac {x_n} {n!} }^{c_n}$
where the sum is taken over all n-tuples $\tuple {c_1, \ldots, c_n}$ such that $c_1 + 2 c_2 + \dotsb + n c_n = n$
In other words, it is taken over every integer partition of $n$.
Here we have it that

$x_{4 n + 0} = 1$
$x_{4 n + 1} = 0$
$x_{4 n + 2} = -1$
$x_{4 n + 3} = 0$
Because there is no way to form a partition of an odd number without using an odd number, all the summands in the odd Complete Bell polynomials contain a $0$, thus they equal $0$.
Explicitly calculating the first $6$ even complete Bell Polynomials we get:

$\map {B_0} 0 = 1$
$\map {B_2} {0, -1} = 0^2 - 1 = -1$
$\map {B_4} {0, -1, 0, 1} = 0^4 + 6 \paren 0^2 \paren {-1} + 4 \paren 0 \paren 0 + 3 \paren {-1}^2 + 1 = 4$
$\map {B_6} {0, -1, 0, 1, 0, -1} = 0^6 + 6 \paren {-1} \paren 0 + 15 \paren {-1} (1) + 10 \paren 0^2 + 15 \paren 0^2 (1) + 15 \paren {-1}^3 + 60 \paren 0 \paren {-1} \paren 0 + 20 \paren 0^3 \paren 0 + 45 \paren 0^2 \paren {-1}^2 + 15 \paren 0^4 \paren {-1} + \paren {-1} = -31$
Note that in all the summands for the above polynomials, they are either $0$ or of the same sign.
This is provable to always be the case, as if $n \equiv 2 \pmod 4$, then an odd number of integers congruent to $2 \pmod 4$ must be chosen for every partition.
Thus all summands will be a negative.
A similar argument holds for the case $n \equiv 0 \pmod 4$.
Thus for our given values of $x_k$, we are only summing over the partitions of $2 m$ such that all summands in the partition are even, and because all the summands in the polynomial are the same sign we have:

$\map {B_{2 m} } {0, -1, 0, \ldots, \pm 1} = \paren {-1}^m \map {B_{2 m} } {0, 1, 0, 1, \ldots, 1}$
Thus from the definition of Bell Polynomials as a sum over all incomplete Bell polynomials we have:

$\map {B_{2 m} } {0, -1, 0, \ldots , \pm x_{2 m} } = \paren {-1}^m \map {P_2} {2 m}$
where $\map {P_2} {2 m}$ is all partitions of a set of size $2 m$ into even blocks.
Thus we have:

$\ds e^{\cos x} = e \paren {e^{\cos x - 1} } = e \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^m P_2 \paren {2 m} } {2m!} x^{2 m} }$
where $P_2 \paren {2 m}$ is the partition of the set of size $2 m$ into even blocks.
$\blacksquare$


Also see
Definition:Bell Number
Definition:Bell Polynomial


Sources
Bell polynomial. E.K. Lloyd (originator),Encyclopedia of Mathematics. URL: https://www.encyclopediaofmath.org/index.php?title=Bell_polynomial&oldid=17635





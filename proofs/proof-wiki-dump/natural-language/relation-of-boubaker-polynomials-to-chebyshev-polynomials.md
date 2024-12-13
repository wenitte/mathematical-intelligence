# 

Source: https://proofwiki.org/wiki/Relation_of_Boubaker_Polynomials_to_Chebyshev_Polynomials

Theorem
The Boubaker polynomials are related to Chebyshev polynomials through the equations:

$\map {B_n} {2 x} = \dfrac {4 x} n \dfrac \d {\d x} \map {T_n} x - 2 \map {T_n} x$
$\map {B_n} {2 x} = -2 \map {T_n} x + 4 x \map {U_{n - 1} } x$
where:

$T_n$ denotes the Chebyshev polynomials of the first kind
$U_n$ denotes the Chebyshev polynomials of the second kind.


Proof
(Using Riordan Matrix)
The ordinary generating function of the Boubaker Polynomials can be expressed in terms of Riordan matrices:

$\ds \sum_{n \geqslant 0} \map {B_n} t x^n = \frac {1 + 3x^2} {1 - x t + x^2} = \paren {1 + 3 x^2 \mid 1 + x^2} \paren {\dfrac 1 {1 - x t} }$
By considering the Riordan matrices of Chebyshev Polynomials of the first and second kind $T_n$ and $U_n$, respectively:

$\map T {\dfrac 1 4 - \dfrac {x^2} 4 \mid \dfrac 1 2 + \dfrac 1 2 x^2}$
and:

$\map T {\dfrac 1 2 \mid\dfrac 1 2 + \dfrac 1 2 x^2}$
and by setting:

$\map T {1 + 3x^2 \mid 1 + x^2} = \map T {1 + 3x^2 \mid 1} \map T {\dfrac 1 2 \mid \dfrac 1 2 + \dfrac 1 2 x^2}$
we obtain finally:

$\map {B_n} x = \map {U_n} {\dfrac x 2} + 3 \map {U_{n - 2} } {\dfrac x 2}$
which gives, due the relation between Chebyshev Polynomials of the first and second kind $T_n$ and $U_n$ and their derivatives:


This article, or a section of it, needs explaining.In particular: What is that relation between the CPFK and CPSK?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\map {B_n} {2 x} = -2 \map {T_n} x + 4 x \map {U_{n - 1} } x$
$\map {B_n} {2 x} = \dfrac {4 x} n \dfrac \d {\d x} \map {T_n} x - 2 \map {T_n} x$
$\blacksquare$


Also see
Relation of Boubaker Polynomials to Dickson Polynomials
Relation of Boubaker Polynomials to Fermat Polynomials





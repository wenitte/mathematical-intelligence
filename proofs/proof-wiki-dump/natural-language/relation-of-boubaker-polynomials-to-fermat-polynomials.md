# 

Source: https://proofwiki.org/wiki/Relation_of_Boubaker_Polynomials_to_Fermat_Polynomials


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
The Boubaker polynomials are related to Fermat polynomials by:

$\forall n \in \N: \map {B_n} x = \dfrac 1 {\paren {\sqrt 2}^n} \map {F_n} {\dfrac {2 \sqrt 2 x} 3} + \dfrac 3 {\paren {\sqrt 2}^{n - 2} } \map {F_{n - 2} } {\dfrac {2 \sqrt 2 x} 3}$


Proof
(Using Riordan Matrix)
Since the ordinary generating function of the Boubaker Polynomials can be expressed in terms of Riordan matrices:

$\ds \sum_{n \mathop \geqslant 0}^{} \map {B_n} t x^n = \frac {1 + 3x^2 }{1 - x t + x^2} = \paren {1 + 3 x^2 \biggl\lvert 1 + x^2} \paren {\frac 1 {1 - x t} }$
then, by writing differently:

$\ds \map T {1 + 3x^2 \biggl\lvert 1 + x^2} = \map T {1 + 3x^2 \biggl \lvert 1} \map T {\frac 1 2 \biggl\lvert \frac 1 2 + \frac 1 2 x^2} \map T {2 \biggl\lvert 2}$
and:

$\ds \map T {1 + 3x^2 \biggl\lvert 1 + x^2} = \map T {1 + 3x^2 \biggl\lvert 1} \map T {1 \biggl\lvert \sqrt 2} \map T {\frac 1 3 \biggl\lvert \frac 1 3 + \frac 2 3 x^2} \map T {3 \biggl\lvert \frac 3 {\sqrt 2} }$
and taking into account the Riordan matrix of Fermat polynomials:

$\ds \map T {\frac 1 3 \biggl\lvert \frac 1 3 + \frac 1 3 x^2}$
we obtain finally:

$\forall n \in \N: \map {B_n} x = \dfrac 1 {\paren {\sqrt 2}^n} \map {F_n} {\dfrac {2 \sqrt 2 x} 3} + \dfrac 3 {\paren {\sqrt 2}^{n - 2} } \map {F_{n - 2} } {\dfrac {2 \sqrt 2 x} 3}$
$\blacksquare$


Also see
Relation of Boubaker Polynomials to Dickson Polynomials
Relation of Boubaker Polynomials to Chebyshev Polynomials


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
A. Luzon et al.: Recurrence Relations for Polynomial Sequences via Riordan Matrices





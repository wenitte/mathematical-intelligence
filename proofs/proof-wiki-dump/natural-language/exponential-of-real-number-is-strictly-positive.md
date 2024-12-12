# 

Source: https://proofwiki.org/wiki/Exponential_of_Real_Number_is_Strictly_Positive



Theorem
Let $x$ be a real number.
Let $\exp$ denote the (real) exponential function.

Then:

$\forall x \in \R : \exp x > 0$


Proof 1
This proof assumes the series definition of $\exp$.
That is, let:

$\ds \exp x = \sum_{n \mathop = 0}^\infty \dfrac {x^n} {n!}$

First, suppose $0 < x$.

Then:














\(\ds 0\)

\(<\)







\(\ds x^n\)





Power Function is Strictly Increasing over Positive Reals: Natural Exponent








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac {x^n} {n!}\)





Real Number Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)





Ordering of Series of Ordered Sequences








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \exp x\)





Definition of $\exp$




So $\exp$ is strictly positive on $\R_{>0}$.

From Exponential of Zero, $\exp 0 = 1$.

Finally, suppose that $x < 0$.

Then:














\(\ds 0\)

\(<\)







\(\ds -x\)





Order of Real Numbers is Dual of Order of their Negatives








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \map \exp {-x}\)





from above








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac 1 {\exp x}\)





Reciprocal of Real Exponential








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \exp x\)





Ordering of Reciprocals




So $\exp$ is strictly positive on $\R_{<0}$.

Hence the result.
$\blacksquare$


Proof 2
This proof assumes the limit definition of $\exp$.
That is, let:

$\ds \exp x = \lim_{n \mathop \to \infty} \map {f_n} x$
where $\map {f_n} x = \paren {1 + \dfrac x n}^n$

First, fix $x \in \R$.
Let $N = \ceiling {\size x}$, where $\ceiling {\, \cdot \,}$ denotes the ceiling function.

Then:














\(\ds \exp x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_{n + N} } x\)





Tail of Convergent Sequence














\(\ds \)

\(\ge\)







\(\ds \map {f_{n + N} } x\)





Exponential Sequence is Eventually Increasing and Limit of Bounded Convergent Sequence is Bounded














\(\ds \)

\(>\)







\(\ds 0\)





Corollary to Exponential Sequence is Eventually Increasing




This article needs to be linked to other articles.In particular: Corollary to Exponential Sequence is Eventually Increasing does not actually exist. The page it gets sent to does not give that result.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
$\blacksquare$


Proof 3
This proof assumes the definition of $\exp x$ as the unique continuous extension of $e^x$.

Since $e > 0$, the result follows immediately from Power of Positive Real Number is Positive over Rationals.
$\blacksquare$


Proof 4
This proof assumes the definition of $\exp$ as the inverse mapping of extension of $\ln$, where $\ln$ denotes the natural logarithm.

Recall that the domain of $\ln$ is $\R_{>0}$.
From the definition of inverse mapping, the image of $\exp$ is the domain of $\ln$.
That is, the image of $\exp$ is $\R_{>0}$.

Hence the result.
$\blacksquare$


Proof 5
This proof assumes the definition of $\exp$ as the solution to an initial value problem.
That is, suppose $\exp$ satisfies:

$ (1): \quad D_x \exp x = \exp x$
$ (2): \quad \map \exp 0 = 1$
on $\R$.


Lemma
$\forall x \in \R: \exp x \ne 0$
$\Box$

Aiming for a contradiction, suppose that $\exists \alpha \in \R: \exp \alpha < 0$.

Then $0 \in \openint {\exp \alpha} 1$.
From Intermediate Value Theorem:

$\exists \zeta \in \openint \alpha 0: \map f \zeta = 0$

This contradicts the lemma.
$\blacksquare$


Also see
Image of Complex Exponential Function





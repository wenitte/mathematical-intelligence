# 

Source: https://proofwiki.org/wiki/Ces%C3%A0ro_Mean



Theorem
Let $\sequence {a_n}$ be a sequence of complex numbers.
Suppose that $\sequence {a_n}$ converges to $\ell$ in $\C$:

$\ds \lim_{n \mathop \to \infty} a_n = \ell$

Then also:

$\ds \lim_{n \mathop \to \infty} \frac {a_1 + \dotsb + a_n} n = \ell$


Proof
For every fixed integer $n_0$, we write:

$\ds \cmod {\frac {a_1 + \dotsb + a_n} n - \ell} \le \frac {\cmod {a_1 - \ell} + \dotsb + \cmod {a_n - \ell} } n \le \frac {n_0 \ds \sup_{k \mathop \le n_0} \cmod {a_k - \ell} } n + \sup_{n_0 \mathop < k \mathop \le n} \cmod {a_k - \ell}$
As $n$ tends to $+\infty$, we get:

$\ds \limsup_{n \mathop \to \infty} \cmod {\frac {a_1 + \dotsb + a_n} n - \ell} \le \sup_{k \mathop > n_0} \cmod {a_k - \ell}$
As $n_0$ tends to $+\infty$, we finally conclude:

$\ds \limsup_{n \mathop \to \infty} \cmod {\frac {a_1 + \dotsb + a_n} n - \ell} = 0$
$\blacksquare$


This article, or a section of it, needs explaining.In particular: More detailed justification and explanation of all the stepsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Remarks

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Need to split off the case for normed vector spacesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The theorem and its proof hold in any normed vector space.
When working with an arbitrary sequence $\sequence {a_n}$ of real numbers, the same truncation trick leads to:
$\ds \liminf_{n \mathop \to \infty} a_n \le \liminf_{n \mathop \to \infty} \frac {a_1 + \dotsb + a_n} n \le \limsup_{n \mathop \to \infty} \frac {a_1 + \dotsb + a_n} n \le \limsup_{n \mathop \to \infty} a_n$
As a corollary, the conclusion of the theorem holds in the real case when $\ell = \pm \infty$.


Source of Name
This entry was named for Ernesto Cesàro.






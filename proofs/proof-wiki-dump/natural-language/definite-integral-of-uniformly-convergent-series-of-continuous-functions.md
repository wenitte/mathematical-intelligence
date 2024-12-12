# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Uniformly_Convergent_Series_of_Continuous_Functions

Theorem
Let $\sequence {f_n}$ be a sequence of real functions.
Let each of $\sequence {f_n}$ be continuous on the interval $\hointr a b$.


This article, or a section of it, needs explaining.In particular: Investigation needed as to whether there is a mistake in 1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) -- should it actually be a closed interval?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let the series:

$\ds \map f x := \sum_{n \mathop = 1}^\infty \map {f_n} x$
be uniformly convergent for all $x \in \closedint a b$.

Then:

$\ds \int_a^b \map f x \rd x = \sum_{n \mathop = 1}^\infty \int_a^b \map {f_n} x \rd x$


Proof
Define $\map {S_N} x = \ds \sum_{n \mathop = 1}^N \map {f_n} x$.
We have:














\(\ds \size {\int_a^b \map f x \rd x - \sum_{n \mathop = 1}^N \int_a^b \map {f_n} x \rd x}\)

\(=\)







\(\ds \size {\int_a^b \paren {\map f x - \map {S_N} x} \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \paren {b - a} \sup_{x \mathop \in \closedint a b} \size {\map f x - \map {S_N} x}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $N \to +\infty$



$\blacksquare$


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.1$: Properties of uniformly convergent series: Theorem $1.9 \ \text{(b)}$





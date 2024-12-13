# 

Source: https://proofwiki.org/wiki/Reverse_Young%27s_Inequality_for_Products


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $p, q \in \R_{> 0}$ be strictly positive real numbers satisfying:

$\dfrac 1 p - \dfrac 1 q = 1$
Let $a \in \R_{\ge 0}$ be a positive real number.
Let $b \in \R_{> 0}$ be a strictly positive real number.

Then:

$a b \ge \dfrac {a^p} p - \dfrac {b^{-q} } q$


Proof
Define:




\(\text {(1)}: \quad\)









\(\ds u\)

\(=\)







\(\ds \frac 1 p\)




















\(\ds v\)

\(=\)







\(\ds \frac q p\)




















\(\ds x\)

\(=\)







\(\ds \paren {a b}^p\)




















\(\ds y\)

\(=\)







\(\ds b^{-p}\)










Then:














\(\ds \frac 1 u + \frac 1 v\)

\(=\)







\(\ds p + \frac p q\)




















\(\ds \)

\(=\)







\(\ds p \paren {1 + \frac 1 q}\)




















\(\ds \)

\(=\)







\(\ds p \paren {\frac 1 p}\)





because $\dfrac 1 p - \dfrac 1 q = 1$, by hypothesis














\(\ds \)

\(=\)







\(\ds 1\)










Thus Young's Inequality for Products can be applied:














\(\ds x y\)

\(\le\)







\(\ds \frac {x^u} u + \frac {y^v} v\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a b}^p b^{-p}\)

\(\le\)







\(\ds \frac {\paren {\paren {a b}^p}^{1/p} } {1/p} + \frac {\paren {b^{-p} }^{q/p} } {q/p}\)





substituting for $u, v, x, y$ from $(1)$ above








\(\ds \leadsto \ \ \)





\(\ds a^p\)

\(\le\)







\(\ds p a b + p \frac {b^{-q} } q\)





algebraic simplification








\(\ds \leadsto \ \ \)





\(\ds \frac {a^p} p\)

\(\le\)







\(\ds a b + \frac {b^{-q} } q\)














\(\ds \leadsto \ \ \)





\(\ds a b\)

\(\ge\)







\(\ds \frac {a^p} p - \frac {b^{-q} } q\)









$\blacksquare$

Geometric Proof
Since

$\dfrac 1 p - \dfrac 1 q = 1$
we have $ p - 1 = \dfrac 1 {-q-1}$.


A graph $ y = x^{p - 1} $ on the $ xy $-plane is thus also a graph $ x = y^{-q - 1}$.


The above region corresponds to $\ds \int_0^a x^{p - 1} \rd x$


The above region corresponds to $\ds \int_b^\infty y^{-q - 1} \rd y$.


The above region corresponds to $\ds \int_0^a x^{p - 1} \rd x - \int_b^\infty y^{-q - 1} \rd y$.
Since

$\dfrac 1 p = \dfrac 1 q + 1 > 1$
we have $0 < p < 1$.
Let $a, b$ be any positive real numbers.
Since $a b$ is the area of the rectangle in the given figure, we have:

$\ds a b \ge \int_0^a x^{p - 1} \rd x - \int_b^\infty y^{-q - 1} \rd y = \frac {a^p} p - \frac {b^{-q}} q$
$\blacksquare$


Source of Name
This entry was named for William Henry Young.






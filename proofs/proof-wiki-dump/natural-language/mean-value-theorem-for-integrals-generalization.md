# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem_for_Integrals/Generalization


This article needs to be linked to other articles.In particular: Several results quoted but not linked toYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $f$ and $g$ be continuous real functions on the closed interval $\closedint a b$ such that:

$\forall x \in \closedint a b: \map g x \ge 0$
Then there exists a real number $k \in \closedint a b$ such that:

$\ds \int_a^b \map f x \map g x \rd x = \map f k \int_a^b \map g x \rd x$


Proof
Let:

$\ds \int_a^b \map g x \rd x = 0$
We are given that:

$\forall x \in \closedint a b: \map g x \ge 0$
Hence by Continuous Non-Negative Real Function with Zero Integral is Zero Function:

$\forall x \in \closedint a b: \map g x = 0$

Hence:

$\ds \int_a^b \map f x \cdot 0 \rd x = \map f k \cdot 0$
and so the result holds for any choice of $k$.
$\Box$

Let:

$\ds \int_a^b \map g x \rd x \ne 0$
From Continuous Real Function is Darboux Integrable, $f$ is Darboux integrable on $\closedint a b$.
By the Extreme Value Theorem, there exist $m, M \in \closedint a b$ such that:

$\ds \map f m = \min_{x \mathop \in \closedint a b} \map f x$
$\ds \map f M = \max_{x \mathop \in \closedint a b} \map f x$
Then the following inequality holds for all $x$ in $\closedint a b$:

$\map f m \le \map f x \le \map f M$

Multiplying by $\map g x$, and using that:

$\forall x \in \closedint a b: \map g x \ge 0$
we get:

$\map f m \map g x \le \map f x \map g x \le \map f M \map g x$
Integrating from $a$ to $b$ gives:

$\ds \int_a^b \map f m \map g x \rd x \le \int_a^b \map f x \map g x \rd x \le \int_a^b \map f M \map g x \rd x$
By Linear Combination of Definite Integrals:

$\ds \map f m \int_a^b \map g x \rd x \le \int_a^b \map f x \map g x \rd x \le \map f M \int_a^b \map g x \rd x$
Dividing by $\ds \int_a^b \map g x \rd x$ gives:

$\ds \map f m \le \dfrac {\int_a^b \map f x \map g x \rd x} {\int_a^b \map g x \rd x} \le \map f M $
By the Intermediate Value Theorem, there exists some $k \in \openint a b$ such that:














\(\ds \dfrac {\int_a^b \map f x \map g x \rd x} {\int_a^b  \map g x \rd x}\)

\(=\)







\(\ds \map f k\)














\(\ds \leadsto \ \ \)





\(\ds \int_a^b \map f x \map g x \rd x\)

\(=\)







\(\ds \map f k \int_a^b \map g x \rd x\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: General Formulas involving Definite Integrals: $15.13$





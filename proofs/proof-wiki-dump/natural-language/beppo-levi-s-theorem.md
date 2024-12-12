# 

Source: https://proofwiki.org/wiki/Beppo_Levi%27s_Theorem



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\sequence {f_n}_{n \mathop \in \N} \in \MM_{\overline \R}^+$ be an increasing sequence of positive $\Sigma$-measurable functions.

Let $\ds \sup_{n \mathop \in \N} f_n: X \to \overline \R$ be the pointwise supremum of $\sequence {f_n}_{n \mathop \in \N}$, where $\overline \R$ denotes the extended real numbers.

Then:

$\ds \int \sup_{n \mathop \in \N} f_n \rd \mu = \sup_{n \mathop \in \N} \int f_n \rd \mu$
where the supremum on the right hand side is in the ordering on $\overline \R$.


Proof

This article needs to be tidied.In particular: Break down some of the long complex sentences into simple onesPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Since by definition $\ds \sup _{n \mathop \in \N} f_n \ge f_m$ for all $m$, we have:

$\ds \int \sup_{n \mathop \in \N} f_n \rd \mu \ge \int f_m \rd \mu$
and hence the inequality holds for the supremum as well:

$\ds \int \sup_{n \mathop \in \N} f_n \rd \mu \ge \sup_{m \mathop \in \N} \int f_m \rd \mu$
$\Box$

It remains to show the reverse inequality.

We have that the integral of $\sup \limits_{n \mathop \in \N}f_n$ is defined as the supremum of the integrals of positive simple functions:

$s \le \sup \limits_{n \mathop \in \N} f_n$
Let $s$ be a simple function:

$\ds s = \sum_{i \mathop = 1}^k \lambda_i \chi_{E_i} \le \sup_{n \mathop \in \N} f_n$
where $\lambda_i \in \closedint 0 {+\infty}$ and $E_i \in \Sigma$.
We are to show that:

$\ds \sup_{m \mathop \in \N} \int f_m \rd \mu \ge \int s \rd \mu$
To show this, we use the fact that $\nu_s: \Sigma \to \closedint 0 {+\infty}$ defined by $\map {\nu_s} E = \ds \int \chi_Es \rd \mu$ clearly defines a measure over $X$, because it is simply a linear combination (with positive coefficients) of the measures $\bigvalueat \mu {E_i}$.
Now, if we fix $1 > \epsilon > 0$, we have that the sets:

$A_m = \set {x \in X: \map {f_m} x \ge \paren {1 - \epsilon} \map s x}$
form a cover of $X$ ($X = \ds \bigcup_{m \mathop \in \N} A_m$) by definition of the supremum, because $\ds s \le \sup_{n \mathop \in \N} f_n$.
Furthermore, the increasing sequence $\sequence {A_m}$ has the limit $A_m \uparrow X$ ($m \to \infty$).
By definition of the $A_m$ we have that:

$\ds \int f_m \rd \mu \ge \int \chi_{A_m} f_m \rd \mu \ge \paren {1 - \epsilon} \int \chi_{A_m} s \rd \mu = \paren {1 - \epsilon} \map {\nu_s} {A_m}$
where the first inequality follows from the fact that the $f_m$ are positive.

We have that the sequence $\sequence {f_n}_{n \mathop \in \N}$ increases monotonically.
By Measure of Limit of Increasing Sequence of Measurable Sets given in any measure space, we have that taking the supremum of both sides yields:














\(\ds \sup_{m \mathop \in \N} \int f_m \rd \mu\)

\(=\)







\(\ds \lim_{m \mathop \to +\infty} \int f_m \rd \mu\)




















\(\ds \)

\(\ge\)







\(\ds \lim_{m \mathop \to +\infty} \paren {1 - \epsilon} \map {\nu_s} {A_m}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \epsilon} \map {\nu_s} X\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \epsilon} \int s \rd \mu\)









Since $\epsilon$ was selected arbitrarily, we have that the desired inequality holds:

$\ds \sup_{m \mathop \in \N} \int f_m \rd \mu \ge \int s \rd \mu$
$\blacksquare$


Also known as
Some authors refer to this result as Beppo Levi's lemma, while others call it the monotone convergence theorem.
On $\mathsf{Pr} \infty \mathsf{fWiki}$ the latter name is reserved for the general result: Monotone Convergence Theorem (Measure Theory).


Source of Name
This entry was named for Beppo Levi.


Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.6$





# 

Source: https://proofwiki.org/wiki/Condition_for_Rational_to_be_Convergent

Theorem
Let $x$ be an irrational number.
Let the rational number $\dfrac a b$ satisfy the inequality:

$\size {x - \dfrac a b} < \dfrac 1 {2 b^2}$
Then $\dfrac a b$ is a convergent of $x$.


Proof
Aiming for a contradiction, suppose $\size {x - \dfrac a b} < \dfrac 1 {2 b^2}$, but that $\dfrac a b$ is not one of the convergents $\dfrac {p_n} {q_n}$ of $x$.
Let $r$ be the unique integer for which $q_r \le b \le q_{r + 1}$.


This article, or a section of it, needs explaining.In particular: Why does such a unique $r$ exist? Maybe related to Denominators of Simple Continued Fraction are Strictly Increasing?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:














\(\ds \size {q_r x - p_r}\)

\(\le\)







\(\ds \size {b x - a}\)





Convergents are Best Approximations














\(\ds \)

\(=\)







\(\ds b \size {x - \frac a b}\)




















\(\ds \)

\(<\)







\(\ds b \times \frac 1 {2 b^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 b}\)









Therefore:

$q_r \size {x - \dfrac {p_r} {q_r} }< \dfrac 1 {2 b}$
and so:

$\size {x - \dfrac {p_r} {q_r} } < \dfrac 1 {2 q_r b}$

Hence:














\(\ds \size {\frac a b - \frac {p_r} {q_r} }\)

\(\le\)







\(\ds \size {x - \frac {p_r} {q_r} } + \size {x - \frac a b}\)





Triangle Inequality




\(\text {(1)}: \quad\)









\(\ds \)

\(<\)







\(\ds \frac 1 {2 q_r b} + \frac 1 {2b^2}\)










Now note that $q_r a - p_r b$ is a integer.
However, by hypothesis $\dfrac a b$ is not one of the convergents $\dfrac {p_n} {q_n}$ of $x$.
Thus $\dfrac a b \ne \dfrac {p_r} {q_r}$.
But we have:














\(\ds \size {\frac a b - \frac {p_r} {q_r} }\)

\(=\)







\(\ds \size {\frac {q_r a - p_r b} {q_r b} }\)










\(\text {(2)}: \quad\)









\(\ds \)

\(\ge\)







\(\ds \frac 1 {q_r b}\)









So, combining results $(1)$ and $(2)$, we get:

$\dfrac 1 {q_r b} < \dfrac 1 {2 q_r b} + \dfrac 1 {2 b^2}$
This simplifies to $q_r > b$.
But by hypothesis $r$ be the unique integer for which $q_r \le b \le q_{r + 1}$.

From this contradiction it follows that $\dfrac a b$ is one of the convergents of $x$
$\blacksquare$






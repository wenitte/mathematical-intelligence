# 

Source: https://proofwiki.org/wiki/Cumulative_Distribution_Function_is_Right-Continuous

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be a real-valued random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $F_X$ be the cumulative distribution function of $X$. 

Then:

$F_X$ is right-continuous.


Proof
Let $x \in \R$. 
We show that $F_X$ is right-continuous at $x$. 
We use Monotonic Sequential Right-Continuity is Equivalent to Right-Continuity in the Reals, and will show that: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, that converge to $x$ we have:
$\map {F_X} {x_n} \to \map {F_X} x$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a monotone sequences with $x_n > x$ for each $n$ that converges to $x$.
Then $\sequence {x_n}_{n \mathop \in \N}$ is a decreasing sequence. 
So: 

$\sequence {\hointl {-\infty} {x_n} }_{n \mathop \in \N}$ is a decreasing sequence of sets.
From Limit of Decreasing Sequence of Unbounded Below Closed Intervals: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \hointl {-\infty} x$
Let $P_X$ be the probability distribution of $X$. 
Note that $P_X$ is a finite measure. 
So, from Measure of Limit of Decreasing Sequence of Measurable Sets, we therefore have: 

$\ds \map {P_X} {\hointl {-\infty} x} = \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x_n} }$
So we obtain: 














\(\ds \map {F_X} x\)

\(=\)







\(\ds \map \Pr {X \le x}\)





Definition of Cumulative Distribution Function














\(\ds \)

\(=\)







\(\ds \map {P_X} {\hointl {-\infty} x}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \Pr {X \le x_n}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {F_X} {x_n}\)





Definition of Cumulative Distribution Function



So, since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, that converge to $x$ we have:
$\map {F_X} {x_n} \to \map {F_X} x$
So, from Monotonic Sequential Right-Continuity is Equivalent to Right-Continuity in the Reals:

$F_X$ is right-continuous at $x$.
$\blacksquare$






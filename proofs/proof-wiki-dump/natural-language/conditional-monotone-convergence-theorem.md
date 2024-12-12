# 

Source: https://proofwiki.org/wiki/Conditional_Monotone_Convergence_Theorem

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an non-negative integrable random variable.
Let $\sequence {X_n}_{n \in \N}$ be an sequence of non-negative integrable random variables converging almost surely to $X$, such that: 

$X_n \le X_{n + 1}$ almost everywhere for each $n \in \N$.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra. 
For each $n \in \N$, let $\expect {X_n \mid \GG}$ be a version of the conditional expectation of $X_n$ conditioned on $\GG$.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ conditioned on $\GG$.

Then:

$\ds \lim_{n \mathop \to \infty} \expect {X_n \mid \GG} = \expect {X \mid \GG}$ almost everywhere.


Proof
Note that for almost all $\omega \in \Omega$, $\sequence {\map {X_n} \omega}_{n \mathop \in \N}$ is an increasing real sequence with $\map {X_n} \omega \to \map X \omega$. 
From Monotone Convergence Theorem (Real Analysis), we then have that: 

$\map {X_n} \omega \le \map X \omega$
for almost all $\omega \in \Omega$.
From Conditional Expectation is Monotone, we then have: 

$\expect {X_n \mid \GG} \le \expect {X \mid \GG}$
Also: 

$X_n \le X_{n + 1}$ almost everywhere
by hypothesis, so again applying Conditional Expectation is Monotone we have: 

$\expect {X_n \mid \GG} \le \expect {X_{n + 1} \mid \GG}$
So for each $\omega \in \Omega$, $\sequence {\map {\paren {\expect {X_n \mid \GG} } } \omega}_{n \mathop \in \N}$ is an increasing real sequence bounded above by $\map {\paren {\expect {X \mid \GG} } } \omega$.
So by Monotone Convergence Theorem (Real Analysis):

$\ds \lim_{n \mathop \to \infty} \map {\paren {\expect {X_n \mid \GG} } } \omega$ exists for all $\omega \in \Omega$.
So define: 

$\ds Y = \lim_{n \mathop \to \infty} \expect {X_n \mid \GG}$
Then from Pointwise Limit of Measurable Functions is Measurable, $Y$ is a real-valued random variable. 
We want to show that $Y$ is a version of the conditional expectation of $X$ conditioned on $\GG$.
We just need to check that: 

$\ds \int_A Y \rd \Pr = \int_A X \rd \Pr$
for each $A \in \GG$.
We have: 














\(\ds \int_A Y \rd \Pr\)

\(=\)







\(\ds \int_A \paren {\lim_{n \mathop \to \infty} \expect {X_n \mid \GG} } \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_A \expect {X_n \mid \GG} \rd \Pr\)





Monotone Convergence Theorem (Measure Theory)














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_A X_n \rd \Pr\)





Definition of Conditional Expectation on Sigma-Algebra














\(\ds \)

\(=\)







\(\ds \int_A X \rd \Pr\)





Monotone Convergence Theorem (Measure Theory)



and hence $Y$ is a version of the conditional expectation of $X$ conditioned on $\GG$ and hence we have: 

$\ds Y = \lim_{n \mathop \to \infty} \expect {X_n \mid \GG} = \expect {X \mid \GG}$ almost everywhere.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list





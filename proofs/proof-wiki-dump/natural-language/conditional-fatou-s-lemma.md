# 

Source: https://proofwiki.org/wiki/Conditional_Fatou%27s_Lemma



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an non-negative integrable random variable.
Let $\sequence {X_n}_{n \in \N}$ be an sequence of non-negative integrable random variables.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
For each $n \in \N$, let $\expect {X_n \mid \GG}$ be a version of the conditional expectation of $X_n$ conditioned on $\GG$.
Let $\ds \expect {\liminf_{n \mathop \to \infty} X_n \mid \GG}$ be a version of the conditional expectation of $X$ conditioned on $\GG$.

Then we have: 

$\ds \expect {\liminf_{n \mathop \to \infty} X_n \mid \GG} \le \liminf_{n \mathop \to \infty} \expect {X_n \mid \GG}$ almost everywhere.


Proof
From Conditional Expectation of Measurable Random Variable, we have:

$\expect {X_n \mid \GG} = \expect {\expect {X_n \mid \GG} \mid \GG}$
It therefore suffices to show, from Conditional Expectation is Linear:

$\ds \expect {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} - \liminf_{n \mathop \to \infty} X_n \mid \GG} \ge 0$ almost everywhere.
From Condition for Conditional Expectation to be Almost Surely Non-Negative, we can show that:

$\ds \expect {\paren {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} - \liminf_{n \mathop \to \infty} X_n} \cdot 1_A} \ge 0$
for $A \in \GG$.
We indeed have, for each $A \in \GG$: 














\(\ds \expect {\paren {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} - \liminf_{n \mathop \to \infty} X_n} \cdot 1_A}\)

\(=\)







\(\ds \int_A \paren {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} - \liminf_{n \mathop \to \infty} X_n} \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_A \paren {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} } \rd \Pr - \int_A \liminf_{n \mathop \to \infty} X_n \rd \Pr\)





Integral of Integrable Function is Additive: Corollary 2














\(\ds \)

\(\ge\)







\(\ds \int_A \paren {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} } \rd \Pr - \liminf_{n \mathop \to \infty} \int_A X_n \rd \Pr\)





Fatou's Lemma for Integrals














\(\ds \)

\(=\)







\(\ds \int_A \paren {\liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} } \rd \Pr - \liminf_{n \mathop \to \infty} \int_A \expect {X_n \mid \GG} \rd \Pr\)





Definition of Conditional Expectation on Sigma-Algebra














\(\ds \)

\(\ge\)







\(\ds 0\)





Fatou's Lemma for Integrals



$\blacksquare$


Source of Name
This entry was named for Pierre Joseph Louis Fatou.


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list





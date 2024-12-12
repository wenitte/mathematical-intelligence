# 

Source: https://proofwiki.org/wiki/Conditional_Dominated_Convergence_Theorem

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable.
Let $\sequence {X_n}_{n \in \N}$ be an sequence of non-negative integrable random variables converging almost surely to $X$, such that: 

there exists an integrable random variable $Y$ such that:
$\size {X_n} \le Y$ almost surely.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
For each $n \in \N$, let $\expect {X_n \mid \GG}$ be a version of the conditional expectation of $X_n$ conditioned on $\GG$.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ conditioned on $\GG$.

Then, we have: 

$\ds \lim_{n \mathop \to \infty} \expect {X_n \mid \GG} = \expect {X \mid \GG}$ almost surely.


Proof
Let $\expect {Y \mid \GG}$ be a version of the conditional expectation of $Y$ conditioned on $\GG$.
For each $n \in \N$, let $\expect {X_n \mid \GG}$ be a version of the conditional expectation of $X_n$ conditioned on $\GG$.
Since we have: 

$\size {X_n} \le Y$ almost surely.
and $Y$ is integrable, we have: 

$\ds \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG} \le \expect {\limsup_{n \mathop \to \infty} X_n \mid \GG} = \expect {X \mid \GG}$ almost surely
by Conditional Reverse Fatou's Lemma. 
From Conditional Fatou's Lemma, we have: 

$\ds \expect {X \mid \GG} = \expect {\liminf_{n \mathop \to \infty} X_n \mid \GG} \le \liminf_{n \mathop \to \infty} \expect {X_n \mid \GG}$ almost surely.
So almost surely, we have: 

$\ds \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG} \le \expect {X \mid \GG} \le \liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} \le \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG}$
So almost surely, we have:

$\ds \liminf_{n \mathop \to \infty} \expect {X_n \mid \GG} = \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG} = \expect {X \mid \GG}$
So, from Convergence of Limsup and Liminf, we have: 

$\ds \lim_{n \mathop \to \infty} \expect {X_n \mid \GG}$ exists almost surely
and further:

$\ds \expect {X \mid \GG} = \lim_{n \mathop \to \infty} \expect {X_n \mid \GG}$ almost surely.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list





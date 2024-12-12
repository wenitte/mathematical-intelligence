# 

Source: https://proofwiki.org/wiki/Conditional_Reverse_Fatou%27s_Lemma

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable.
Let $\sequence {X_n}_{n \mathop \in \N}$ be an sequence of non-negative integrable random variables such that:

there exists an integrable random variable $Y$ such that:
$\size {X_n} \le Y$ almost surely.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
For each $n \in \N$, let $\expect {X_n \mid \GG}$ be a version of the conditional expectation of $X_n$ conditioned on $\GG$.
Let $\expect {X_n \mid \GG}$ be a version of the conditional expectation of $X_n$ conditioned on $\GG$.
Let $\ds \expect {\limsup_{n \mathop \to \infty} X_n \mid \GG}$ be a version of the conditional expectation of $\ds \limsup_{n \mathop \to \infty} X_n$ conditioned on $\GG$.

Then: 

$\ds \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG} \le \expect {\limsup_{n \mathop \to \infty} X_n \mid \GG}$ almost surely.


Proof
We should first verify that a version of the conditional expectation of $\ds \limsup_{n \mathop \to \infty} X_n$ conditioned on $\GG$ exists.
We have:

$-Y \le X_n \le Y$
and so:

$\ds -Y \le \limsup_{n \mathop \to \infty} X_n \le Y$ almost surely
so that: 

$\ds -\infty < -\expect Y \le \expect {\limsup_{n \mathop \to \infty} X_n} \le \expect Y < \infty$
from Expectation is Monotone.
So:

$\ds \limsup_{n \mathop \to \infty} X_n$ is integrable
and we have that conditional expectation of $\ds \limsup_{n \mathop \to \infty} X_n$ conditioned on $\GG$ exists.
Now, we have that:

$Y - X_n \ge 0$
So, we can apply Conditional Fatou's Lemma to obtain:

$\ds \expect {\liminf_{n \mathop \to \infty} \paren {Y - X_n} \mid \GG} \le \liminf_{n \mathop \to \infty} \expect {Y - X_n \mid \GG}$ almost surely.
We have, by Conditional Expectation is Linear:

$\ds \expect {Y - X_n \mid \GG} = \expect {Y \mid \GG} - \expect {X_n \mid \GG}$
So we have:














\(\ds \liminf_{n \mathop \to \infty} \expect {Y - X_n \mid \GG}\)

\(=\)







\(\ds \liminf_{n \mathop \to \infty} \paren {\expect {Y \mid \GG} - \expect {X_n \mid \GG} }\)




















\(\ds \)

\(=\)







\(\ds \expect {Y \mid \GG} + \liminf_{n \mathop \to \infty} \paren {-\expect {X_n \mid \GG} }\)





Infimum Plus Constant














\(\ds \)

\(=\)







\(\ds \expect {Y \mid \GG} - \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG}\)





Negative of Supremum is Infimum of Negatives



Similarly:














\(\ds \expect {\liminf_{n \mathop \to \infty} \paren {Y - X_n} \mid \GG}\)

\(=\)







\(\ds \expect {Y + \liminf_{n \mathop \to \infty} \paren {-X_n} \mid \GG}\)





Infimum Plus Constant














\(\ds \)

\(=\)







\(\ds \expect {Y - \limsup_{n \mathop \to \infty} X_n \mid \GG}\)





Negative of Supremum is Infimum of Negatives














\(\ds \)

\(=\)







\(\ds \expect {Y \mid \GG} - \expect {\limsup_{n \mathop \to \infty} X_n \mid \GG}\)





Conditional Expectation is Linear



So we have:

$\ds \expect {Y \mid \GG} - \expect {\limsup_{n \mathop \to \infty} X_n \mid \GG} \le \expect {Y \mid \GG} - \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG}$ almost surely.
So:

$\ds \limsup_{n \mathop \to \infty} \expect {X_n \mid \GG} \le \expect {\limsup_{n \mathop \to \infty} X_n \mid \GG}$ almost surely.
$\blacksquare$


Source of Name
This entry was named for Pierre Joseph Louis Fatou.






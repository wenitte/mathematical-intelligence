# 

Source: https://proofwiki.org/wiki/Khinchin%27s_Law



Theorem
Let $P$ be a population.
Let $P$ have mean $\mu$ and finite variance. 
Let $\sequence {X_n}_{n \mathop \ge 1}$ be a sequence of random variables forming a random sample from $P$.
Let: 

$\ds {\overline X}_n = \frac 1 n \sum_{i \mathop = 1}^n X_i$

Then:

${\overline X}_n \xrightarrow p \mu$
where $\xrightarrow p$ denotes convergence in probability.


Proof
Let $\sigma$ be the standard deviation of $P$.
By the definition of convergence in probability, we aim to show that: 

$\ds \lim_{n \mathop \to \infty} \map \Pr {\size { {\overline X}_n - \mu} < \epsilon} = 1$
for all real $\epsilon > 0$.

Let $\epsilon > 0$ be a real number.
By Variance of Sample Mean:

$\var {{\overline X}_n} = \dfrac {\sigma^2} n$
By the Bienaymé-Chebyshev Inequality, we have for real $k > 0$: 

$\map \Pr {\size { {\overline X}_n - \mu} \ge \dfrac {k \sigma} {\sqrt n}} \le \dfrac 1 {k^2}$
As $\sigma > 0$ and $n > 0$, we can set: 

$k = \dfrac {\sqrt n} {\sigma} \epsilon$
This gives: 

$\map \Pr {\size {{\overline X}_n - \mu} \ge \epsilon} \le \dfrac {\sigma^2} {n \epsilon^2}$
We therefore have: 














\(\ds \map \Pr {\size { {\overline X}_n - \mu} < \epsilon}\)

\(=\)







\(\ds 1 - \map \Pr {\size { {\overline X}_n - \mu} \ge \epsilon}\)




















\(\ds \)

\(\ge\)







\(\ds 1 - \frac {\sigma^2} {n \epsilon^2}\)









So: 

$1 - \dfrac {\sigma^2} {n \epsilon^2} \le \map \Pr {\size { {\overline X}_n - \mu} < \epsilon} \le 1$
We have: 

$\ds \lim_{n \mathop \to \infty} \paren {1 - \dfrac {\sigma^2} {n \epsilon^2} } = 1$
and: 

$\ds \lim_{n \mathop \to \infty} 1 = 1$
So by the Squeeze Theorem: 

$\ds \lim_{n \mathop \to \infty} \map \Pr {\size { {\overline X}_n - \mu} < \epsilon} = 1$
for all real $\epsilon > 0$.
$\blacksquare$


Also known as
Khinchin's Law is also known as the Weak Law of Large Numbers.


Also see
Bernoulli's Theorem, also known as the  Law of Large Numbers
Kolmogorov's Law, also known as the  Strong Law of Large Numbers


Source of Name
This entry was named for Aleksandr Yakovlevich Khinchin.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): laws of large numbers
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): weak law of large numbers
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): weak law of large numbers





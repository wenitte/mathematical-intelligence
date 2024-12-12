# 

Source: https://proofwiki.org/wiki/Bienaym%C3%A9-Chebyshev_Inequality/Proof_2

Theorem
Let $X$ be a random variable. 
Let $\expect X = \mu$ for some $\mu \in \R$. 
Let $\var X = \sigma^2$ for some $\sigma^2 \in \R_{> 0}$.

Then, for all $k > 0$: 

$\map \Pr {\size {X - \mu} \ge k \sigma} \le \dfrac 1 {k^2}$


Proof
Note that as $k > 0$ and $\sigma > 0$, we have $k \sigma > 0$.
We therefore have:














\(\ds \map \Pr {\size {X - \mu} \ge k \sigma}\)

\(=\)







\(\ds \map \Pr {\paren {X - \mu}^2 \ge \paren {k \sigma}^2}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\expect {\paren {X - \mu}^2} } {\paren {k \sigma}^2}\)





as $k \sigma > 0$, we can apply Markov's Inequality: Corollary














\(\ds \)

\(=\)







\(\ds \frac {\sigma^2} {k^2 \sigma^2}\)





Definition of Variance














\(\ds \)

\(=\)







\(\ds \frac 1 {k^2}\)









$\blacksquare$






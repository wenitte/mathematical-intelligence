# 

Source: https://proofwiki.org/wiki/Bienaym%C3%A9-Chebyshev_Inequality/Proof_1

Theorem
Let $X$ be a random variable. 
Let $\expect X = \mu$ for some $\mu \in \R$. 
Let $\var X = \sigma^2$ for some $\sigma^2 \in \R_{> 0}$.

Then, for all $k > 0$: 

$\map \Pr {\size {X - \mu} \ge k \sigma} \le \dfrac 1 {k^2}$


Proof
Let $f$ be the function:

$\map f x = \begin{cases} k^2 \sigma^2 & : \size {x - \mu} \ge k \sigma \\
0 & : \text{otherwise} \end{cases}$
By construction:

$\forall x \in \Dom f: \map f x \le \size {x - \mu}^2 = \paren {x - \mu}^2$

Hence from Expectation Preserves Inequality:

$\expect {\map f X} \le \expect {\paren {X - \mu}^2}$
By definition of variance:

$\expect {\paren {X - \mu}^2} = \var X = \sigma^2$
By definition of expectation of discrete random variable, we can show that:














\(\ds \expect {\map f X}\)

\(=\)







\(\ds k^2 \sigma^2 \map \Pr {\size {X - \mu} \ge k \sigma} + 0 \cdot \map \Pr {\size {X - \mu} \le k \sigma}\)




















\(\ds \)

\(=\)







\(\ds k^2 \sigma^2 \map \Pr {\size {X - \mu} \ge k \sigma}\)









Putting this together, we have:














\(\ds \expect {\map f X}\)

\(\le\)







\(\ds \expect {\paren {X - \mu}^2}\)














\(\ds \leadsto \ \ \)





\(\ds k^2 \sigma^2 \map \Pr {\size {X - \mu} \ge k \sigma}\)

\(\le\)







\(\ds \sigma^2\)









By dividing both sides by $k^2 \sigma^2$, we get: 

$\map \Pr {\size {X - \mu} \ge k \sigma} \le \dfrac 1 {k^2}$
$\blacksquare$






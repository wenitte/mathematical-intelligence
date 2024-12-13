# 

Source: https://proofwiki.org/wiki/Markov%27s_Inequality/Corollary

Corollary
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a real-valued random variable on $\struct {\Omega, \Sigma, \Pr}$.

Then: 

$\map \Pr {\size X \ge t} \le \dfrac {\expect {\size X} } t$
for each real $t > 0$.


Proof
From Markov's Inequality, we have: 

$\ds \map \Pr {\set {\omega \in \Omega : \size {\map X \omega} \ge t} } \le \frac 1 t \int \size X \rd \Pr$
From the definition of expectation, we then have: 

$\map \Pr {\set {\omega \in \Omega : \size {\map X \omega} \ge t} } \le \dfrac {\expect {\size X} } t$
So:

$\map \Pr {\size X \ge t} \le \dfrac {\expect {\size X} } t$
$\blacksquare$






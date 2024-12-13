# 

Source: https://proofwiki.org/wiki/Mode_of_Normal_Distribution

Theorem
Let $\mu$ be a real number. 
Let $\sigma$ be a strictly positive real number. 
Let $X \sim \Gaussian \mu {\sigma^2}$ where $\Gaussian \mu {\sigma^2}$ is the normal distribution with parameters $\mu$ and $\sigma^2$. 
Then the mode $M$ of $X$ is equal to $\mu$. 


Proof
By the definition of the normal distribution, $X$ has probability density function: 

$\map {f_X} x = \dfrac 1 {\sigma \sqrt {2 \pi} } \, \map \exp {-\dfrac {\paren {x - \mu}^2} {2 \sigma^2} }$
By the definition of a mode, $f_X$ attains its global maximum at $M$.  
From Exponential is Strictly Increasing, we have that $\exp x$ is strictly increasing for all real $x$.
Therefore, to maximise $f_X$, we must pick to $x$ to maximise: 

$-\dfrac {\paren {x - \mu}^2} {2 \sigma^2}$
That is, to minimise:

$\dfrac {\paren {x - \mu}^2} {2 \sigma^2}$
We have: 

$\dfrac {\paren {x - \mu}^2} {2 \sigma^2} \ge 0$
with equality occurring at $x = \mu$.
Therefore, $\mu$ is a mode of $X$.
As this is the only value of $x$ for which equality occurs, we have that $\mu$ is the unique mode of $X$. 
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Normal_Random_Variable

Theorem
Let $\mu$, $\alpha$ and $\beta$ be real numbers. 
Let $\sigma$ be a positive real number. 
Let $X \sim \Gaussian \mu {\sigma^2}$ where $\Gaussian \mu {\sigma^2}$ is the normal distribution with parameters $\mu$ and $\sigma^2$. 

Then: 

$\alpha X + \beta \sim \Gaussian {\alpha \mu + \beta} {\alpha^2 \sigma^2}$


Proof
Let $Z = \alpha X + \beta$. 
Let $M_Z$ be the moment generating function of $Z$. 
We aim to show that: 

$Z \sim \Gaussian {\alpha \mu + \beta} {\alpha^2 \sigma^2}$
By Moment Generating Function of Normal Distribution and Moment Generating Function is Unique, it is sufficient to show that:

$\map {M_Z} t = \map \exp {\paren {\alpha \mu + \beta} t + \dfrac 1 2 \alpha^2 \sigma^2 t^2}$
We also have, by Moment Generating Function of Normal Distribution, that the moment generating function of $X$, $M_X$, is given by: 

$\map {M_X} t = \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$
We have:














\(\ds \map {M_Z} t\)

\(=\)







\(\ds e^{\beta t} \map {M_X} {\alpha t}\)





Moment Generating Function of Linear Combination of Independent Random Variables














\(\ds \)

\(=\)







\(\ds e^{\beta t} \map \exp {\alpha \mu t + \frac 1 2 \sigma^2 \paren {\alpha t}^2}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\paren {\alpha \mu + \beta} t + \frac 1 2 \sigma^2 \alpha^2 t^2}\)





Exponential of Sum



$\blacksquare$






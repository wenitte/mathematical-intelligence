# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Bernoulli_Distribution

Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$.
Let $n$ be a strictly positive integer. 

Then the $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = p$


Proof 1
From the definition of expectation:

$\ds \expect {X^n} = \sum_{x \mathop \in \Img X} x^n \map \Pr {X = x}$
From the definition of the Bernoulli distribution:

$\ds \expect {X^n} = 1^n \times p + 0^n \times \paren {1 - p} = p$
$\blacksquare$


Proof 2
By Moment Generating Function of Bernoulli Distribution, the moment generating function $M_X$ is given by: 

$\map {M_X} t = q + p e^t$
By Moment in terms of Moment Generating Function:

$\expect {X^n} = \map {M^{\paren n}_X} 0$
By Derivative of Exponential Function:

$\map {M^{\paren n}_X} t = p e^t$
Setting $t = 0$: 














\(\ds \expect {X^n}\)

\(=\)







\(\ds p e^0\)




















\(\ds \)

\(=\)







\(\ds p\)





Exponential of Zero



$\blacksquare$





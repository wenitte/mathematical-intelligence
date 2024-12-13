# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Bernoulli_Distribution/Proof_1

Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$.
Let $n$ be a strictly positive integer. 

Then the $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = p$


Proof
From the definition of expectation:

$\ds \expect {X^n} = \sum_{x \mathop \in \Img X} x^n \map \Pr {X = x}$
From the definition of the Bernoulli distribution:

$\ds \expect {X^n} = 1^n \times p + 0^n \times \paren {1 - p} = p$
$\blacksquare$






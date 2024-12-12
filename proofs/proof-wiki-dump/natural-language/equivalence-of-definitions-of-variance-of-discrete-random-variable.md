# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Variance_of_Discrete_Random_Variable



Theorem
Let $X$ be a discrete random variable.
Let $\mu = \expect X$ be the expectation of $X$.
The following definitions of the concept of Variance of Discrete Random Variable are equivalent:

Definition 1
$\var X := \expect {\paren {X - \expect X}^2}$
That is: it is the expectation of the squares of the deviations from the expectation.

Definition 2
$\ds \var X := \sum_{x \mathop \in \Omega_X} \paren {x - \mu^2} \map \Pr {X = x}$
where:

$\mu := \expect X$ is the expectation of $X$
$\Omega_X$ is the image of $X$
$\map \Pr {X = x}$ is the probability mass function of $X$.
Definition 3
$\var X := \expect {X^2} - \paren {\expect X}^2$


Proof
Definition 1 equivalent to Definition 2
Let $\var X$ be defined as:

$\var X := \expect {\paren {X - \expect X}^2}$
Let $\mu = \expect X$.
Let $\map f X = \paren {X - \mu}^2$ be considered as a function of $X$.
Then by applying Expectation of Function of Discrete Random Variable:

$\ds \expect {\map f X} = \sum_{x \mathop \in \Omega_X} \map f x \, \map \Pr {X = x}$
which leads to:

$\ds \expect {\paren {X - \mu}^2} = \sum_{x \mathop \in \Omega_X} \paren {\paren {X - \mu}^2} \map \Pr {X = x}$
thus demonstrating the equality of Definition 1 to Definition 2.
$\Box$


Definition 2 equivalent to Definition 3
Let $\mu = \expect X$, and take the expression for variance:

$\ds \var X := \sum_{x \mathop \in \Img X} \paren {x - \mu}^2 \map \Pr {X = x}$

Then from Variance as Expectation of Square minus Square of Expectation:

$\var X = \expect {X^2} - \paren {\expect X}^2$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.4$: Expectation





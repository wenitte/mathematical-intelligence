# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Natural_Numbers/Corollary

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: a_n = n - 1$
That is:

$\sequence {a_n} = 1, 2, 3, 4, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$H \paren z = \dfrac z {\paren {1 - z}^2}$


Proof
From Generating Function for Natural Numbers:

$\sequence {a_n} = 0, 1, 2, 3, 4, \ldots$
has the generating function:

$G \paren z = \dfrac 1 {\paren {1 - z}^2}$
Then by Generating Function by Power of Parameter:

$z G \paren z = \dfrac z {\paren {1 - z}^2}$
is the generating function for the sequence defined as:

$\forall n \in \N_{> 0}: a_{n - 1} = n - 1$
that is:

$0, a_1, a_2, \ldots$
where:

$a_1 = 1, a_2 = 2, \ldots$
That is:

$\sequence {a_n} = 1, 2, 3, 4, \ldots$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $1$





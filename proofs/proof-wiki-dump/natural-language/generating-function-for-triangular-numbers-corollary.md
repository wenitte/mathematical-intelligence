# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Triangular_Numbers/Corollary

Theorem
Let $\sequence {b_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: b_n = \dfrac {\paren {n + 1} \paren {n + 2} } 2$
That is:

$\sequence {b_n}_{n \mathop \ge 0} = 1, 3, 6, 10, \ldots, \dbinom {n + 2} 2, \ldots$

Then the generating function for $\sequence {b_n}$ is given as:

$H \paren z = \dfrac 1 {\paren {1 - z}^3}$


Proof
From Generating Function for Triangular Numbers:

$H \paren z = \dfrac z {\paren {1 - z}^3}$
is the generating function for $\sequence {a_n}$ as given by:

$\sequence {a_n} = 1, 3, 6, 10, \ldots, \dbinom {n + 1} 2, \ldots$
that is, such that:

$a_1 = 1, a_2 = 3, a_3 = 6, \ldots$
The result follows from Generating Function Divided by Power of Parameter.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $4$





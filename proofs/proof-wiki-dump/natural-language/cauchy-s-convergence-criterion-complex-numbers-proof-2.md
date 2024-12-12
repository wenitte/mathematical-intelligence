# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Complex_Numbers/Proof_2

Theorem
Let $\sequence {z_n}$ be a complex sequence.

Then $\sequence {z_n}$ is a Cauchy sequence if and only if it is convergent.


Proof
Lemma
Let $\sequence {z_n}$ be a complex sequence.
Let $\NN$ be the domain of $\sequence {z_n}$.
Let $x_n = \map \Re {z_n}$ for every $n \in \NN$.
Let $y_n = \map \Im {z_n}$ for every $n \in \NN$.

Then $\sequence {z_n}$ is a (complex) Cauchy sequence if and only if $\sequence {x_n}$ and $\sequence {y_n}$ are (real) Cauchy sequences.
$\Box$

Let $\sequence {x_n}$ be a real sequence where:

$x_n = \map \Re {z_n}$ for every $n$
$\map \Re {z_n}$ is the real part of $z_n$
Let $\sequence {y_n}$ be a real sequence where

$y_n = \map \Im {z_n}$ for every $n$
$\map \Im {z_n}$ is the imaginary part of $z_n$

We find:

$\sequence {z_n}$ is a Cauchy sequence
$\leadstoandfrom \sequence {x_n}$ and $\sequence {y_n}$ are Cauchy sequences by Lemma
$\leadstoandfrom \sequence {x_n}$ and $\sequence {y_n}$ are convergent by Cauchy's Convergence Criterion on Real Numbers
$\leadstoandfrom \sequence {z_n}$ is convergent by definition of convergent complex sequence
$\blacksquare$






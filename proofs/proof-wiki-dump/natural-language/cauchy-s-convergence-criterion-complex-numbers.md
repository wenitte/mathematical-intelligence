# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Complex_Numbers


This page has been identified as a candidate for refactoring of medium complexity.In particular: These proofs are exactly the same, and can be merged. Recommend that one of them be replaced by a proof based on the metric space nature of $\C$, in the same way as the quick proofs of this for $\R$.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\sequence {z_n}$ be a complex sequence.

Then $\sequence {z_n}$ is a Cauchy sequence if and only if it is convergent.


Proof 1
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
Let $\sequence {y_n}$ be a real sequence where:

$y_n = \map \Im {z_n}$ for every $n$
$\map \Im {z_n}$ is the imaginary part of $z_n$


Necessary Condition
Let $\sequence {z_n}$ be a Cauchy sequence.
We aim to prove that $\sequence {z_n}$ is convergent.

We find:

$\sequence {z_n}$ is a Cauchy sequence
$\leadsto \sequence {x_n}$ and $\sequence {y_n}$ are Cauchy sequences by Lemma
$\leadsto \sequence {x_n}$ and $\sequence {y_n}$ are convergent by Cauchy's Convergence Criterion on Real Numbers
$\leadsto \sequence {z_n}$ is convergent by definition of convergent complex sequence.
$\Box$


Sufficient Condition
Let $\sequence {z_n}$ be convergent.
We aim to prove that $\sequence {z_n}$ is a Cauchy sequence.

We find:

$\sequence {z_n}$ is convergent
$\leadsto \sequence {x_n}$ and $\sequence {y_n} $ are convergent by definition of convergent complex sequence
$\leadsto \sequence {x_n}$ and $\sequence {y_n}$ are Cauchy sequences by Cauchy's Convergence Criterion on Real Numbers
$\leadsto \sequence {z_n}$ is a Cauchy sequence by Lemma
$\blacksquare$


Proof 2
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


Also see
Cauchy's Convergence Criterion on Real Numbers





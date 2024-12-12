# 

Source: https://proofwiki.org/wiki/Eigenvalue_of_Matrix_Powers



Theorem
Let $A$ be a square matrix.
Let $\lambda$ be an eigenvalue of $A$ and $\mathbf v$ be the corresponding eigenvector.

Then:

$A^n \mathbf v = \lambda^n \mathbf v$
holds for each positive integer $n$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$A^n \mathbf v = \lambda^n \mathbf v$


Basis for the Induction
$\map P 1$ is true, as this just says:

$A \mathbf v = \lambda \mathbf v$
which follows by definition of eigenvector.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$A^k \mathbf v = \lambda^k \mathbf v$

Then we need to show:

$A^{k + 1} \mathbf v = \lambda^{k + 1} \mathbf v$


Induction Step
This is our induction step:














\(\ds \lambda^{k + 1} \mathbf v\)

\(=\)







\(\ds \lambda \cdot \lambda^k \mathbf v\)




















\(\ds \)

\(=\)







\(\ds \lambda A^k \mathbf v\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds A^k \lambda \mathbf v\)




















\(\ds \)

\(=\)







\(\ds A^k A \mathbf v\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds A^{k + 1} {\mathbf v}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{> 0}: A^n \mathbf v = \lambda^n \mathbf v$
$\blacksquare$






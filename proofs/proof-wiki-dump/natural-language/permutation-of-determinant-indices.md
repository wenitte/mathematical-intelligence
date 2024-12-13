# 

Source: https://proofwiki.org/wiki/Permutation_of_Determinant_Indices

Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$ over a field.
Let $\lambda: \N_{> 0} \to \N_{> 0}$ be any fixed permutation on $\N_{> 0}$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\struct {S_n, \circ}$ be the symmetric group of $n$ letters. 

Then:

$\ds \map \det {\mathbf A} = \sum_{\mu \mathop \in S_n} \paren {\map \sgn \mu \map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \lambda k, \map \mu k} }$
$\ds \map \det {\mathbf A} = \sum_{\mu \mathop \in S_n} \paren {\map \sgn \mu \map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \mu k, \map \lambda k} }$
where:

the summation $\ds \sum_{\mu \mathop \in S_n}$ ranges over all the $n!$ permutations of $\set {1, 2, \ldots, n}$
$\map \sgn \mu$ is the sign of the permutation $\mu$.


Proof
First it is shown that:

$\ds \map \det {\mathbf A} = \sum_{\mu \mathop \in S_n} \paren {\map \sgn \mu \map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \lambda k, \map \mu k} }$
Let $\nu: \N_{> 0} \to \N_{> 0}$ be a permutation on $\N_{> 0}$ such that $\nu \circ \lambda = \mu$.
The product can be rearranged as:

$\ds \prod_{k \mathop = 1}^n a_{\map \lambda k, \map \mu k} = a_{\map \lambda 1, \map \mu 1} a_{\map \lambda 2, \map \mu 2} \cdots a_{\map \lambda n, \map \mu n} = a_{1, \map \nu 1} a_{2, \map \nu 2} \cdots a_{n, \map \nu n} = \prod_{k \mathop = 1}^n a_{k, \map \nu k}$
from Field Axiom $\text M2$: Commutativity of Product.

By Parity Function is Homomorphism:

$\map \sgn \mu \map \sgn \lambda = \map \sgn \lambda \map \sgn \nu \map \sgn \lambda = \map {\sgn^2} \lambda \map \sgn \nu = \map \sgn \nu$

and so:

$\ds \map \det {\mathbf A} = \sum_{\nu \mathop \in S_n} \paren {\map \sgn \nu \prod_{k \mathop = 1}^n a_{k, \map \nu k} }$
which is the usual definition for the determinant.

Next it is to be shown:

$\ds \map \det {\mathbf A} = \sum_{\mu \mathop \in S_n} \paren {\map \sgn \mu \map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \mu k, \map \lambda k} }$
Let $\nu: \N_{> 0} \to \N_{> 0}$ be a permutation on $\N_{> 0}$ such that $\nu \circ \mu = \lambda$.
The result follows via a similar argument.
$\blacksquare$






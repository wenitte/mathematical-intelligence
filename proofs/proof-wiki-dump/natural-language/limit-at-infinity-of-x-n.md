# 

Source: https://proofwiki.org/wiki/Limit_at_Infinity_of_x%5En

Theorem
Let $x \mapsto x^n$, $n \in \R$ be a real function which is continuous on the open interval $\openint 1 {+\infty}$.
Let $n > 0$.

Then $x^n \to +\infty$ as $x \to +\infty$.


Proof
From Upper Bound of Natural Logarithm:

$\forall n > 0: n \ln x < x^n$
which, by Multiple Rule for Continuous Real Functions, implies:














\(\ds \lim_{x \mathop \to +\infty} n \ln x\)

\(=\)







\(\ds n \lim_{x \mathop \to +\infty} \ln x\)









From Logarithm Tends to Infinity:

$n \ln x \to +\infty$ as $x \to +\infty$
The result follows from the Push Theorem.
$\blacksquare$


Also see
Sequence of Powers of Reciprocals is Null Sequence
Limit at Infinity of Identity Function





# 

Source: https://proofwiki.org/wiki/Cotangent_Additive_Formula

Theorem
Let $n \in \N_{>0}$ where $\N_{>0}$ denotes the non-zero natural numbers.
Let $z \in \C$ such that $\map \sin {n z} \ne 0$

Then: 

$\ds \map \cot {n z} = \frac 1 n \sum_{k \mathop = 0}^{n - 1} \map \cot {z + \frac {k \pi} n}$
where $\cot$ denotes the cotangent function.


Proof













\(\ds \map \sin {n z}\)

\(=\)







\(\ds 2^{n - 1} \prod_{k \mathop = 0}^{n - 1} \map \sin {z + \frac {k \pi} n}\)





Product Formula for Sine








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \sin {n z} }\)

\(=\)







\(\ds \paren {n - 1} \ln 2 + \sum_{k \mathop = 0}^{n - 1} \map \ln {\map \sin {z + \frac {k \pi} n} }\)





taking the natural logarithm of both sides, Sum of Logarithms/Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds n \map \cot {n z}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map \cot {z + \frac {k \pi} n}\)





taking the derivative of both sides, Derivative of Natural Logarithm Function, Derivative of Sine Function








\(\ds \leadsto \ \ \)





\(\ds \map \cot {n z}\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \map \cot {z + \frac {k \pi} n}\)





dividing by $n$



$\blacksquare$


Also see
Digamma Additive Formula
General Harmonic Number Additive Formula
Product Formula for Sine





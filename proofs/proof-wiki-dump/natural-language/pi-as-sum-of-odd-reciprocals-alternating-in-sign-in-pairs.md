# 

Source: https://proofwiki.org/wiki/Pi_as_Sum_of_Odd_Reciprocals_Alternating_in_Sign_in_Pairs

Theorem
$\dfrac {\pi \sqrt 2} 4 = 1 + \dfrac 1 3 - \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 + \dfrac 1 {11} - \dfrac 1 {13} - \dfrac 1 {15} \cdots$


Proof
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \dfrac {x^1} 1 + \dfrac {x^3} 3 - \dfrac {x^5} 5 - \dfrac {x^7} 7 + \dfrac {x^9} 9 + \dfrac {x^{11} } {11} - \dfrac {x^{13} } {13} - \dfrac {x^{15} } {15} \cdots$

We first confirm that the series will converge at $x = 1$.
By grouping the series two terms at a time, we are guaranteed convergence by the Alternating Series Test:

$ \map f 1 = \paren {1 + \dfrac 1 3 } - \paren { \dfrac 1 5 + \dfrac 1 7 } + \paren { \dfrac 1 9 + \dfrac 1 {11} } - \cdots + \paren {-1}^{\floor {\frac {k - 1} 2} } \paren {\dfrac 1 {2k - 1 } + \dfrac 1 {2k + 1 } } $

We now move on to determining the sum of $\map f 1$.
We have:














\(\ds \map f x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\frac {x^{4 n + 1} } {4 n + 1} + \frac {x^{4 n + 3} } {4 n + 3} }\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {x^{4 n} + x^{4 n + 2} }\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {1 + x^2} \paren {x^{4 n} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \paren {1 + x^2} \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {x^{4 n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x^2} \sum_{n \mathop = 0}^\infty \paren {-x^4 }^n\)





Power of Power and Power of Product














\(\ds \)

\(=\)







\(\ds \dfrac {1 + x^2} {1 - \paren{-x^4 } }\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {1 + x^2} {1 + x^4}\)














\(\ds \leadsto \ \ \)





\(\ds \map f 1\)

\(=\)







\(\ds \int_0^1 \dfrac {1 + x^2} {1 + x^4} \rd x\)





Fundamental Theorem of Calculus/Second Part














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac 1 {\sqrt 2} \map \arctan {\dfrac 1 {\sqrt 2} \paren {x - \dfrac 1 x} } } 0 1\)





Primitive of One plus x Squared over One plus Fourth Power of x














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 2} \map \arctan {\dfrac 1 {\sqrt 2} \paren {1 - \dfrac 1 1} } - \dfrac 1 {\sqrt 2} \map \arctan {\dfrac 1 {\sqrt 2} \paren {0 - \dfrac 1 0} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 2} \paren {\map \arctan 0 - \map \arctan {-\infty} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 2} \paren {0 - \paren {-\dfrac \pi 2} }\)





Definition of Real Arctangent














\(\ds \)

\(=\)







\(\ds \dfrac {\pi \sqrt 2} 4\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$





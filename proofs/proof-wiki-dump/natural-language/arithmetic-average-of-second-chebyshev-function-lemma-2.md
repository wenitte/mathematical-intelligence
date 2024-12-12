# 

Source: https://proofwiki.org/wiki/Arithmetic_Average_of_Second_Chebyshev_Function/Lemma_2

Lemma
Let $x \ge 3$ be a real number.
Then: 

$-2 \map \ln {x + 1} \le \paren {x - 1} \map \ln {x - 1} - x \ln x$


Proof
Define a function $g : \openint 1 \infty \to \R$ by:

$\map g x = \paren {x - 1} \map \ln {x - 1} - x \ln x + 2 \map \ln {x + 1}$
We have that $g$ is differentiable with: 














\(\ds \map {g'} x\)

\(=\)







\(\ds \frac {x - 1} {x - 1} + \map \ln {x - 1} - \frac x x - \ln x + \frac 2 {x + 1}\)





Product Rule for Derivatives, Derivative of Logarithm Function














\(\ds \)

\(=\)







\(\ds \map \ln {x - 1} - \ln x + \frac 2 {x + 1}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {1 - \frac 1 x} + \frac 2 {x + 1}\)




















\(\ds \)

\(\ge\)







\(\ds \frac 2 {x + 1} + 1 - \frac 1 {1 - \frac 1 x}\)





Bounds of Natural Logarithm














\(\ds \)

\(=\)







\(\ds 1 - \frac x {x - 1} + \frac 2 {x + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2 - 1 - x \paren {x + 1} + 2 \paren {x - 1} } {\paren {x + 1} \paren {x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {x - 3} {\paren {x + 1} \paren {x - 1} }\)









We can see that $\map {g'} x \ge 0$ for $x \ge 3$. 
So from Real Function with Positive Derivative is Increasing:

$g$ is increasing.
So for $x \ge 3$ we have: 














\(\ds \paren {x - 1} \map \ln {x - 1} - x \ln x + 2 \map \ln {x + 1}\)

\(\ge\)







\(\ds \map g 3\)




















\(\ds \)

\(=\)







\(\ds 2 \ln 2 - 3 \ln 3 + 2 \ln 4\)




















\(\ds \)

\(=\)







\(\ds 6 \ln 2 - 3 \ln 3\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \map \ln {\frac {64} {27} }\)





Logarithm of Power



so for $x \ge 3$ we have: 














\(\ds \paren {x - 1} \map \ln {x - 1} - x \ln x\)

\(\ge\)







\(\ds -2 \map \ln {x + 1} + \map \ln {\frac {64} {27} }\)




















\(\ds \)

\(>\)







\(\ds -2 \map \ln {x + 1}\)









$\blacksquare$






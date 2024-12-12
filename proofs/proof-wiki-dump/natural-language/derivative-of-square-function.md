# 

Source: https://proofwiki.org/wiki/Derivative_of_Square_Function

Theorem
Let $f: \R \to \R$ be the square function:

$\forall x \in \R: \map f x = x^2$

Then the derivative of $f$ is given by:

$\map {f'} x = 2 x$


Proof 1













\(\ds \map {f'} x\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {x + h} - \map f x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {x + h}^2 - x^2} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {x^2 + 2 x h + h^2 - x^2} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 x h + h^2} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} 2 x + h\)




















\(\ds \)

\(=\)







\(\ds 2 x\)









$\blacksquare$


Proof 2
From Power Rule for Derivatives:

$\map {\dfrac \d {\d x} } {x^n} = n x^{n - 1}$
The result follows by setting $n = 2$.
$\blacksquare$






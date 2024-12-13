# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/v_%2B_ln_u_%3D_x_y,_u_%2B_ln_v_%3D_x_-_y/Second_Partial_Derivative

Example of Partial Derivative
Consider the simultaneous equations:

$\begin {cases} v + \ln u = x y \\ u + \ln v = x - y \end {cases}$

Then:

$\dfrac {\partial^2 u} {\partial x^2} = \dfrac {u \paren {\paren {y - v}^2 - v \paren {\paren {1 - y u} + u \dfrac {y - v} {1 - u v} \paren {1 + y - v - y u} } } } {\paren {1 - u v}^2}$



This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Proof
We have from Partial Derivatives of $v + \ln u = x y$, $u + \ln v = x - y$ that:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {u \paren {y - v} } {1 - u v}\)




















\(\ds \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \dfrac {v \paren {1 - y u} } {1 - u v}\)










Hence:














\(\ds \dfrac {\partial^2 u} {\partial x^2}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {\dfrac {u \paren {y - v} } {1 - u v} }\)





Definition of Second Partial Derivative














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - u v} \map {\dfrac \partial {\partial x} } {u \paren {y - v} } - \paren {u \paren {y - v} } \map {\dfrac \partial {\partial x} } {1 - u v} } {\paren {1 - u v}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - u v} \paren {\dfrac {\partial u} {\partial x} \paren {y - v} + u \map {\dfrac \partial {\partial x} } {y - v} } - \paren {u \paren {y - v} } \paren {-\paren {\dfrac {\partial u} {\partial x} v + u \dfrac {\partial v} {\partial x} } } } {\paren {1 - u v}^2}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - u v} \paren {\dfrac {\partial u} {\partial x} \paren {y - v} - u \dfrac {\partial v} {\partial x} } + \paren {u \paren {y - v} } \paren {\dfrac {\partial u} {\partial x} v + u \dfrac {\partial v} {\partial x} } } {\paren {1 - u v}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - u v} \paren {\paren {\dfrac {u \paren {y - v} } {1 - u v} } \paren {y - v} - u \paren {\dfrac {v \paren {1 - y u} } {1 - u v} } } + \paren {u \paren {y - v} } \paren {\paren {\dfrac {u \paren {y - v} } {1 - u v} } v + u \paren {\dfrac {v \paren {1 - y u} } {1 - u v} } } } {\paren {1 - u v}^2}\)





substituting for $\dfrac {\partial u} {\partial x}$ and $\dfrac {\partial v} {\partial x}$














\(\ds \)

\(=\)







\(\ds \dfrac {u \paren {y - v}^2 - u v \paren {1 - y u} + u \paren {y - v} \paren {\paren {\dfrac {u v \paren {y - v} } {1 - u v} } + \paren {\dfrac {u v \paren {1 - y u} } {1 - u v} } } } {\paren {1 - u v}^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {u \paren {\paren {y - v}^2 - v \paren {\paren {1 - y u} + u \dfrac {y - v} {1 - u v} \paren {1 + y - v - y u} } } } {\paren {1 - u v}^2}\)





simplifying



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $13$





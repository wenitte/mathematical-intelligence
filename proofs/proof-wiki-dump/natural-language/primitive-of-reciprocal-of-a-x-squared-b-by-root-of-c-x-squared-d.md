# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_%2B_b_by_Root_of_c_x_squared_%2B_d



Theorem
Let $a, b, c, d \in \R$ be real numbers such that $a d \ne b c$.
Then:

$\ds \int \dfrac {\d x} {\paren {a x^2 + b} \sqrt {c x^2 + d} } = \begin {cases}
\dfrac 1 {\sqrt {b \paren {a d - b c} } } \arctan \dfrac {x \sqrt {a d - b c} } {\sqrt {b \paren {c x^2 + d} } } + C & : a d > b c \\
\dfrac 1 {2 \sqrt {b \paren {a d - b c} } } \ln \size {\dfrac {\sqrt {b \paren {c x^2 + d} } + x \sqrt {b c - a d} } {\sqrt {b \paren {c x^2 + d} } - x \sqrt {b c - a d} } } + C & : b c > a d
\end {cases}$


Proof
Case $1$: $a d > b c$
$\ds \int \dfrac {\d x} {\paren {a x^2 + b} \sqrt {c x^2 + d} } = \dfrac 1 {\sqrt {b \paren {a d - b c} } } \arctan \dfrac {x \sqrt {a d - b c} } {\sqrt {b \paren {c x^2 + d} } } + C$
$\Box$


Case $2$: $b c > a d$
$\ds \int \dfrac {\d x} {\paren {a x^2 + b} \sqrt {c x^2 + d} } = \dfrac 1 {2 \sqrt {b \paren {a d - b c} } } \ln \size {\dfrac {\sqrt {b \paren {c x^2 + d} } + x \sqrt {b c - a d} } {\sqrt {b \paren {c x^2 + d} } - x \sqrt {b c - a d} } } + C$
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions





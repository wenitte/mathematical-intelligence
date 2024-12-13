# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Logarithm_Form/Lemma

Lemma
Let $a \in \R_{>0}$ be a strictly positive real constant.
Then:

$\map \ln {\dfrac {x - a} {x + a} }$ is defined if and only if $\size x > a$
$\map \ln {\dfrac {a - x} {a + x} }$ is defined if and only if $\size x < a$


Proof
We have that the real natural logarithm is defined only on the strictly positive real numbers.
Hence:

$\map \ln {\dfrac {x - a} {x + a} }$ is defined if and only if $\dfrac {x - a} {x + a} > 0$
$\map \ln {\dfrac {a - x} {a + x} }$ is defined if and only if $\dfrac {a - x} {a + x} > 0$

First we note that if $\size x = a$, then either the numerator or denominator of the arguments of the logarithm functions in question are either $0$ or undefined.
Hence the expressions have no meaning unless $\size x \ne a$.

The following table indicates whether each of $x + a$, $a - x$ and $x - a$ are positive $(+)$ or negative $(-)$ on the domains in question.
$\begin {array} {c|ccc|cc}
& x + a & a - x & x - a & \dfrac {x - a} {x + a} & \dfrac {a - x} {a + x} \\
\hline 
a < x      & + & - & + & + & - \\
0 < x < a  & + & + & - & - & + \\
-a < x < 0 & + & + & - & - & + \\
x < -a     & - & + & - & + & - \\
\end {array}$

Hence:

$\map \ln {\dfrac {x - a} {x + a} }$ is defined if and only if $x > a$ or $x < -a$
$\map \ln {\dfrac {a - x} {a + x} }$ is defined if and only if $-a < x < a$
as we were required to show.
$\blacksquare$






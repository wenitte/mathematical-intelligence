# 

Source: https://proofwiki.org/wiki/Linearity_of_Function_with_Translation_Property



Theorem
Let $f$ be a real function.
Let $c$ be a real number.

Then:

$f$ has the translation property
$\map {f'} c$ exists
if and only if:

$f$ is linear


Proof
Sufficient Condition
Let:

$f$ have the translation property
$\map {f'} c$ exist
We need to show that:

$f$ is linear

The fact that $f$ has the translation property means:

$\forall x_1, x_2, t \in \R: \map f {x_1 + t} - \map f {x_2 + t} = \map f {x_1} - \map f {x_2}$
$f$ being linear means:

$\forall x \in \R: \map f x = ax + b$
where $a$ and $b$ are real numbers.

We have that $f'$ exists by Differentiability of Function with Translation Property.
Also, $f'$ is a constant function by the same theorem.
Accordingly:

$\map {f'} x = \map {f'} c$ for every real number $x$

Let $x$ be a real number.
We have:














\(\ds \map f x\)

\(=\)







\(\ds \map f x - \map f 0 + \map f 0\)




















\(\ds \)

\(=\)







\(\ds \int_0^x \map {f'} y \rd y  + \map f 0\)





$f'$ is integrable by Integral of Constant














\(\ds \)

\(=\)







\(\ds \int_0^x \map {f'} c \rd y  + \map f 0\)





$\map {f'} y = \map {f'} c$














\(\ds \)

\(=\)







\(\ds \map {f'} c x  + \map f 0\)





Integral of Constant



So, $f$ is linear.
$\Box$


Necessary Condition
Let:

$f$ be linear
We need to show that:

$f$ has the translation property
$\map {f'} c$ exist

The linearity of $f$  means that:

$\forall x \in \R: \map f x = ax + b$
where $a$ and $b$ are real numbers.
$f$ having the translation property means that:

$\forall x_1, x_2, t \in \R: \map f {x_1 + t} - \map f {x_2 + t} = \map f {x_1} - \map f {x_2}$

Let $x_1, x_2, t$ be real numbers.
We have:














\(\ds \map f {x_1 + t} - \map f {x_2 + t}\)

\(=\)







\(\ds a \paren {x_1 + t} + b - \paren {a \paren {x_2 + t} + b}\)





Definition of Linear Real Function














\(\ds \)

\(=\)







\(\ds a x_1 + a t + b - \paren {a x_2 + a t + b}\)




















\(\ds \)

\(=\)







\(\ds a x_1 + a t + b - \paren {a x_2 + b} - a t\)




















\(\ds \)

\(=\)







\(\ds a x_1 + b - \paren {a x_2 + b}\)




















\(\ds \)

\(=\)







\(\ds \map f {x_1} - \map f {x_2}\)





Definition of Linear Real Function



So, $f$ has the translation property.

It remains to prove that $\map {f'} c$ exists.
We have:














\(\ds \map {f'} c\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {c + h} - \map f c} h\)





Definition 2 of Differentiable Mapping














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {a (c + h) + b - (a c + b)} h\)





Definition of Linear Real Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {a c + a h + b - a c - b} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {a h} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} a\)




















\(\ds \)

\(=\)







\(\ds a\)









This successful calculation of $\map {f'} c$ demonstrates the existence of $\map {f'} c$.
$\blacksquare$






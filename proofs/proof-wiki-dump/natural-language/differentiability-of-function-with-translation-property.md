# 

Source: https://proofwiki.org/wiki/Differentiability_of_Function_with_Translation_Property

Theorem
Let $f$ be a real function.
Let $f$ have the translation property.
Let $c$ be a real number.
Let $\map {f'} c$ exist.

Then:

$f'$ exists
$f'$ is a constant function


Proof
Let $x$ be a real number.

We have:














\(\ds \map {f'} x\)

\(=\)







\(\ds \lim_{y \mathop \to x} \frac {\map f y - \map f x} {y - x}\)





Definition 1 of Differentiable Mapping














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to x} \frac {\map f {y - x + x - c + c} - \map f {x - c + c} } {y - x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to x} \frac {\map f {y - x + c + x - c} - \map f {c + x - c} } {y - x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to x} \frac {\map f {y - x + c + t} - \map f {c + t} } {y - x}\)





$t = x - c$














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop + x \mathop \to x} \frac {\map f {z + c + t} - \map f {c + t} } z\)





$z = y - x$














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to 0} \frac {\map f {z + c + t} - \map f {c + t} } z\)




















\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to 0} \frac {\map f {z + c} - \map f c} z\)





Definition of Translation Property














\(\ds \)

\(=\)







\(\ds \map {f'} c\)





Definition 2 of Differentiable Mapping




We conclude that $\map {f'} x$ exists as $\map {f'} c$ exists.
Also, $\map {f'} x$ exists everywhere as $x$ is arbitrary.
In other words, $f'$ exists.

Also, $f'$ is a constant function as $\map {f'} x$ equals $\map {f'} c$ for every real number $x$.
$\blacksquare$






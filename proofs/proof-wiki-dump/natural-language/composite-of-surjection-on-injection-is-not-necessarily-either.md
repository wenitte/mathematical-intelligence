# 

Source: https://proofwiki.org/wiki/Composite_of_Surjection_on_Injection_is_not_necessarily_Either

Theorem
Let $f$ be an injection.
Let $g$ be a surjection.
Let $g \circ f$ denote the composition of $g$ with $f$.

Then it is not necessarily the case that $g \circ f$ is either a surjection or an injection.


Proof
Let $X, Y, Z$ be sets defined as:















\(\ds X\)

\(=\)







\(\ds \set {a, b, c}\)




















\(\ds Y\)

\(=\)







\(\ds \set {1, 2, 3, 4}\)




















\(\ds Z\)

\(=\)







\(\ds \set {z, y, z}\)










Let $f: X \to Y$ be defined in two-row notation as:

$\dbinom {a \ b \ c } {1 \ 2 \ 3}$
which is seen by inspection to be an injection.

Let $g: Y \to Z$ be defined in two-row notation as:

$\dbinom {1 \ 2 \ 3 \ 4} {x \ y \ y \ z}$
which is seen by inspection to be a surjection.

The composition $f \circ g$ is seen to be:

$\dbinom {a \ b \ c} {x \ y \ y}$
which is:

not an injection (both $b$ and $c$ map to $y$)
not a surjection (nothing maps to $z$).
Hence the result.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Composite_of_Injection_on_Surjection_is_not_necessarily_Either

Theorem
Let $f$ be an injection.
Let $g$ be a surjection.
Let $f \circ g$ denote the composition of $f$ with $g$.

Then it is not necessarily the case that $f \circ g$ is either a surjection or an injection.


Proof
Let $X, Y, Z$ be sets defined as:















\(\ds X\)

\(=\)







\(\ds \set {a, b, c}\)




















\(\ds Y\)

\(=\)







\(\ds \set {1, 2}\)




















\(\ds Z\)

\(=\)







\(\ds \set {z, y, z}\)










Let $g: X \to Y$ be defined in two-row notation as:

$\dbinom {a \ b \ c } {1 \ 2 \ 2}$
which is seen by inspection to be a surjection.

Let $f: Y \to Z$ be defined in two-row notation as:

$\dbinom {1 \ 2} {x \ y}$
which is seen by inspection to be an injection.

The composition $f \circ g$ is seen to be:

$\dbinom {a \ b \ c} {x \ y \ y}$
which is:

not an injection (both $b$ and $c$ map to $y$)
not a surjection (nothing maps to $z$).
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Exercise $2$





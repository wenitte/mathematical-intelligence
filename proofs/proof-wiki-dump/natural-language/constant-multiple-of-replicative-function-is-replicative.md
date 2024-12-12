# 

Source: https://proofwiki.org/wiki/Constant_Multiple_of_Replicative_Function_is_Replicative

Theorem
Let $f: \R \to \R$ be a real function.
Let $f$ be a replicative function.
Let $c \in \R$ be a constant.
Let $g: \R \to \R$ be the real function defined as:

$\map g x = c \map f x$

Then $g$ is also a replicative function.


Proof













\(\ds \sum_{k \mathop = 0}^{n - 1} \map g {x + \frac k n}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} c \map f {x + \frac k n}\)




















\(\ds \)

\(=\)







\(\ds c \sum_{k \mathop = 0}^{n - 1} \map f {x + \frac k n}\)




















\(\ds \)

\(=\)







\(\ds c \map f {n x}\)





Definition of Replicative Function














\(\ds \)

\(=\)







\(\ds \map g {n x}\)









Hence the result by definition of replicative function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $39 \ \text{h)}$





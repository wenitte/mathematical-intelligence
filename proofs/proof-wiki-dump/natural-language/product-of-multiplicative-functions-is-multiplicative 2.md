# 

Source: https://proofwiki.org/wiki/Product_of_Multiplicative_Functions_is_Multiplicative

Theorem
Let $f: \N \to \C$ and $g: \N \to \C$ be multiplicative functions.
Then their pointwise product:

$f \times g: \Z \to \Z: \forall s \in S: \map {\paren {f \times g} } s := \map f s \times \map g s$
is also multiplicative.


Proof
Let $f$ and $g$ be multiplicative.
Let $m \perp n$.
Then:














\(\ds \map {f \times g} {m \times n}\)

\(=\)







\(\ds \map f {m \times n} \times \map g {m \times n}\)





Definition of Pointwise Multiplication of Integer-Valued Functions














\(\ds \)

\(=\)







\(\ds \map f m \times \map f n \times \map g m \times \map g n\)





Definition of Multiplicative Arithmetic Function














\(\ds \)

\(=\)







\(\ds \map f m \times \map g m \times \map f n \times \map g n\)





Integer Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \paren {\map {f \times g} m} \times \paren {\map {f \times g} n}\)





Definition of Pointwise Multiplication of Integer-Valued Functions



Hence the result by definition of multiplicative function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $29 \ \text{(d)}$





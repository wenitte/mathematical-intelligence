# 

Source: https://proofwiki.org/wiki/Logarithm_of_Absolute_Value_of_2_times_Sine_of_pi_x_is_Replicative_Function

Theorem
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \log \, \size {2 \sin \pi x}$
Then $f$ is a replicative function.


Proof
We have that:














\(\ds \sum_{k \mathop = 0}^{n - 1} \map f {x + \frac k n}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \log \, \size {2 \sin \pi \paren {x + \frac k n} }\)




















\(\ds \)

\(=\)







\(\ds \log \prod_{k \mathop = 0}^{n - 1} \size {2 \sin \pi \paren {x + \frac k n} }\)





Sum of Logarithms




Thus to demonstrate that $f$ is replicative, it is sufficient to demonstrate that:

$\ds \prod_{k \mathop = 0}^{n - 1} \paren {2 \sin \pi \paren {x + \frac k n} } = 2 \sin \pi n x$

By Product Formula for Sine:














\(\ds 2 \sin \pi n x\)

\(=\)







\(\ds 2^n \prod_{k \mathop = 0}^{n - 1} \paren {\map \sin {\pi x + \frac {k \pi} n} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^{n - 1} \paren {2 \sin \pi \paren {x + \frac k n} }\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $39 \ \text{f)}$





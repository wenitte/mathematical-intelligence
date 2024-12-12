# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Fibonacci_Numbers

Theorem
Let $\map G z$ be the function defined as:

$\map G z = \dfrac z {1 - z - z^2}$

Then $\map G z$ is a generating function for the Fibonacci numbers.


Proof
Let the form of $\map G z$ be assumed as:














\(\ds \map G z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} F_k z^k\)




















\(\ds \)

\(=\)







\(\ds F_0 + F_1 z + F_2 z^2 + F_3 z^3 + F_4 z^4 + \cdots\)




















\(\ds \)

\(=\)







\(\ds 0 + z + z^2 + 2 z^3 + 3 z^4 + \cdots\)









where $F_n$ denotes the $n$th Fibonacci number.

Then:














\(\ds z \map G z\)

\(=\)







\(\ds F_0 z + F_1 z^2 + F_2 z^3 + F_3 z^4 + F_4 z^5 + \cdots\)




















\(\ds z^2 \map G z\)

\(=\)







\(\ds F_0 z^2 + F_1 z^3 + F_2 z^4 + F_3 z^5 + F_4 z^6 + \cdots\)










and so:














\(\ds \paren {1 - z - z^2} \map G z\)

\(=\)







\(\ds F_0 + \paren {F_1 - F_0} z + \paren {F_2 - F_1 - F_0} z^2 + \paren {F_3 - F_2 - F_1} z^3 + \cdots\)




















\(\ds \)

\(=\)







\(\ds F_0 + \paren {F_1 - F_0} z\)





Definition of Fibonacci Number: $F_n = F_{n - 1} + F_{n - 2}$














\(\ds \)

\(=\)







\(\ds z\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$



Hence the result:

$\map G z = \dfrac z {1 - z - z^2}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $5$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(11)$





# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_plus_Arbitrary_Function_in_terms_of_Fibonacci_Numbers



Theorem
Let $\map f n$ and $\map g n$ be arbitrary arithmetic functions.
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \begin{cases}
0 & : n = 0 \\
1 & : n = 1 \\
a_{n - 1} + a_{n - 2} + \map f {n - 2} & : n > 1
\end{cases}$

Let $\sequence {b_n}$ be the sequence defined as:

$b_n = \begin{cases}
0 & : n = 0 \\
1 & : n = 1 \\
b_{n - 1} + b_{n - 2} + \map g {n - 2} & : n > 1
\end{cases}$

Let $\sequence {c_n}$ be the sequence defined as:

$c_n = \begin{cases}
0 & : n = 0 \\
1 & : n = 1 \\
c_{n - 1} + c_{n - 2} + x \map f {n - 2} + y \map g {n - 2} & : n > 1
\end{cases}$
where $x$ and $y$ are arbitrary.

Then $\sequence {c_n}$ can be expressed in Fibonacci numbers as:

$c_n = x a_n + y b_n + \paren {1 - x - y} F_n$


Proof
Lemma
Let $\map f n$ be an arbitrary arithmetic function.
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \begin{cases}
0 & : n = 0 \\
1 & : n = 1 \\
a_{n - 1} + a_{n - 2} + \map f {n - 2} & : n > 1
\end{cases}$
Then:

$a_n = F_n + \ds \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \map f k$
$\Box$

Hence also:

$b_n = F_n + \ds \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \map g k$

Thus:














\(\ds c_n\)

\(=\)







\(\ds F_n + \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \paren {x \map f k + y \map g k}\)




















\(\ds \)

\(=\)







\(\ds F_n + x \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \map f k + y \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \map g k\)




















\(\ds \)

\(=\)







\(\ds F_n + x \paren {a_n - F_n} + y \paren {b_n - F_n}\)




















\(\ds \)

\(=\)







\(\ds x a_n + y b_n + \paren {1 - x - y} F_n\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $15$





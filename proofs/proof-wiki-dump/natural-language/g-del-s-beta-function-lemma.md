# 

Source: https://proofwiki.org/wiki/G%C3%B6del%27s_Beta_Function_Lemma

Theorem
Let $\beta: \N^3 \to \N$ be Gödel's $\beta$ function.
Let $\sequence {x_0, x_1, \dotsc, x_n }$ be a finite sequence of natural numbers.
Then there exist some $a, b \in \N$ such that, for every $i \le n$:

$\map \beta {a, b, i} = x_i$


Proof
Let $M = \map \max {n, x_0, x_1, \dotsc, x_n}$.
Define $b = M!$, the factorial of $M$.
Let $\sequence {y_1, y_2, \dotsc, y_{n + 1} }$ be the finite sequence defined by:

$y_i = 1 + \paren {i \times b}$
As $M \ge n$, by definition:

$M \ge \paren {n + 1} - 1$
Therefore, by Multiples of Factorial Plus One are Coprime, the $\sequence {y_1, \dotsc, y_{n + 1} }$ are pairwise coprime.
Thus, by the Chinese Remainder Theorem, there exists some $a \in \N$ such that:














\(\ds a\)

\(\equiv\)







\(\ds x_0\)

\(\ds \pmod {y_1}\)


















\(\ds a\)

\(\equiv\)







\(\ds x_1\)

\(\ds \pmod {y_2}\)


















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds a\)

\(\equiv\)







\(\ds x_n\)

\(\ds \pmod {y_{n + 1} }\)







But then, for each $0 \le i \le n$:














\(\ds y_{i + 1}\)

\(>\)







\(\ds \paren {i + 1} \times b\)





Definition of $y_{i + 1}$














\(\ds \)

\(\ge\)







\(\ds b\)





$i \ge 1$














\(\ds \)

\(=\)







\(\ds M!\)





Definition of $b$














\(\ds \)

\(\ge\)







\(\ds M\)




















\(\ds \)

\(\ge\)







\(\ds x_i\)





Definition of $M$




Therefore, by the congruence:

$\map \rem {a, y_{i + 1} } = x_i$
But:

$y_{i + 1} = 1 + \paren {\paren {i + 1} \times b}$
Thus:

$\map \rem {a, 1 + \paren {\paren {i + 1} \times b} } = x_i$
But that is the definition of the $\beta$ function.
Hence the result.
$\blacksquare$






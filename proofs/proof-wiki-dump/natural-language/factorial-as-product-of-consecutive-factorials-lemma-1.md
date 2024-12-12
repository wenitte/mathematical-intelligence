# 

Source: https://proofwiki.org/wiki/Factorial_as_Product_of_Consecutive_Factorials/Lemma_1

Theorem
Let $n \in \N$.
Then $\paren {2 n - 1}! \, \paren {2 n}! > \paren {3 n - 1}!$ for all $n > 1$.


Proof
Let $n, k \in \N_{> 0}$.
Suppose $n > 1$ and $n > k$.
We show that $\paren {k + 1} \paren {2 n - k} > 2 n + k$.

For $k = 1$:

$2 \paren {2 n - 1} = 4 n - 2 \ge 2 n + 2 > 2 n + 1$
For $k > 1$:














\(\ds \paren {k + 1} \paren {2 n - k}\)

\(=\)







\(\ds 2 n k + 2 n - k^2 - k\)




















\(\ds \)

\(>\)







\(\ds 2 k^2 + 2 n - k^2 - k\)





because $n > k$














\(\ds \)

\(=\)







\(\ds k^2 + 2 n - k\)




















\(\ds \)

\(>\)







\(\ds 2 k + 2 n - k\)





because $k \ge 2$














\(\ds \)

\(=\)







\(\ds 2 n + k\)










Therefore we have:














\(\ds \paren {2 n - 1}! \, \paren {2 n}!\)

\(=\)







\(\ds \paren {2 n}! \prod_{k \mathop = 1}^{2 n - 1} k\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \paren {2 n}! \paren {\prod_{k \mathop = 1}^n k} \paren {\prod_{k \mathop = n + 1}^{2 n - 1} k}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 n}! \paren {\prod_{k \mathop = 0}^{n - 1} \paren {k + 1} } \paren {\prod_{k \mathop = 1}^{n - 1} \paren {2 n - k} }\)




















\(\ds \)

\(=\)







\(\ds \paren {2 n}! \prod_{k \mathop = 1}^{n - 1} \paren {k + 1} \paren {2 n - k}\)





$0 + 1 = 1$














\(\ds \)

\(>\)







\(\ds \paren {2 n}! \prod_{k \mathop = 1}^{n - 1} \paren {2 n + k}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 n - 1}!\)









$\blacksquare$






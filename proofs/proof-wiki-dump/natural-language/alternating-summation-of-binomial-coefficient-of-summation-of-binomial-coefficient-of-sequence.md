# 

Source: https://proofwiki.org/wiki/Alternating_Summation_of_Binomial_Coefficient_of_Summation_of_Binomial_Coefficient_of_Sequence

Theorem
Let $\sequence a, \sequence b$ be real sequences which satisfy the condition:

$a_n = \ds \sum_{r \mathop = 0}^n \binom n r b_r$

Then:

$\ds \paren {-1}^n b_n = \sum_{s \mathop = 0}^n \binom n s \paren {-1}^s a_s$


Proof













\(\ds \sum_{s \mathop = 0}^n \binom n s \paren {-1}^s a_s\)

\(=\)







\(\ds \sum_{s \mathop = 0}^n \binom n s \paren {-1}^s \paren {\sum_{r \mathop = 0}^s \binom s r b_r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{s \mathop = 0}^n \sum_{\substack {r \mathop \le 0 \mathop \le n \\ s \mathop \ge r} } \binom n s \binom s r \paren {-1}^s b_r\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^n b_r \sum_{s \mathop = r}^n \dfrac {n!} {s! \, \paren{n - s}!} \dfrac {s!} {r! \, \paren{s - r}!} \paren {-1}^s\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^n \dfrac {n!} {r! \, \paren{n - r}!} b_r \sum_{s \mathop = r}^n \dfrac {\paren{n - r}! \paren {-1}^s} {\paren{n - s}! \paren{s - r}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^n \binom n r b_r \sum_{s \mathop = r}^n \binom {n - r} {s - r} \paren {-1}^s\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^n \binom n r b_r \sum_{s \mathop = 0}^{n - r} \binom {n - r} s \paren {-1}^{s + r}\)









For $n - r > 1$ we can use the Binomial Theorem with $x = 1$ and $y = -1$:

$0 = \paren {1 - 1}^{n - r} = \ds \sum_{s \mathop = 0}^{n \mathop - r} \binom {n - r} s \paren {-1}^s$
Hence all terms of $(1)$ vanish except for where $n - r$.
That term is:

$\paren {-1}^n b_n$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $12$





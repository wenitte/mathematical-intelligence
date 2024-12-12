# 

Source: https://proofwiki.org/wiki/Difference_between_Two_Squares_equal_to_Repunit/Corollary_2

Theorem
The sequence of differences of two squares that each make a repunit begins:














\(\ds 6^2 - 5^2\)

\(=\)







\(\ds 11\)




















\(\ds 56^2 - 45^2\)

\(=\)







\(\ds 1111\)




















\(\ds 5056^2 - 5045^2\)

\(=\)







\(\ds 111 \, 111\)




















\(\ds \)

\(:\)







\(\ds \)









and in general for integer $n$:

$R_{2 n} = {\underbrace{5050 \ldots 56}_{n - 1 \ 5 \text{'s} } }^2 - {\underbrace{5050 \ldots 45}_{n - 1 \ 5 \text{'s} } }^2$
that is:

$\ds \sum_{k \mathop = 0}^{2 n - 1} 10^k = \left({\sum_{k \mathop = 1}^{n - 1} 5 \times 10^{2 k - 1} + 6}\right)^2 - \left({\sum_{k \mathop = 1}^{n - 1} 5 \times 10^{2 k - 1} - 5}\right)^2$


Proof
From Difference between Two Squares equal to Repunit, $R_{2n} = x^2 - y^2$ exactly when $R_{2n} = a b$ where $x = \dfrac {a + b} 2$ and $y = \dfrac {a - b} 2$.
By the Basis Representation Theorem














\(\ds R_{2n}\)

\(=\)







\(\ds \sum_{0 \mathop \le k \mathop < 2 n} 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le k \mathop < 2 n \\ k \text { even} } } 10^k + \sum_{\substack {0 \mathop \le k \mathop < 2 n \\ k \text { odd} } } 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {0 \mathop \le k \mathop < 2 n \\ k \text { even} } } 10^k + 10 \times \sum_{\substack {0 \mathop \le k \mathop < 2 n \\ k \text { even} } } 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 10^{2 k} + 10 \times \sum_{k \mathop = 0}^n 10^{2 k}\)





change of indices














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 11 \times 10^{2 k}\)




















\(\ds \)

\(=\)







\(\ds 11 \sum_{k \mathop = 0}^{n - 1} 10^{2 k}\)




















\(\ds \)

\(=\)







\(\ds 11 \times \underbrace {10101 \ldots 01}_{n \ 1 \text{'s} }\)










Thus, let:

$a = \ds \sum_{k \mathop = 0}^{n - 1} \times 10^{2 k}$
$b = 11$
So:














\(\ds a + b\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 10^{2 k} + 11\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} 10^{2 k} + 12\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a + b} 2\)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} \frac {10^{2 k} } 2 + 6\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} 5 \times 10^{2 k - 1} + 6\)




















\(\ds \)

\(=\)







\(\ds \underbrace {5050 \ldots 50}_{n - 1 \ 5 \text{'s} } + 6\)




















\(\ds \)

\(=\)







\(\ds \underbrace {5050 \ldots 56}_{n - 1 \ 5 \text{'s} }\)










Similarly:














\(\ds a - b\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \times 10^{2 k} - 11\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} 10^{2 k} - 10\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a - b} 2\)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} \frac {10^{2 k} } 2 - 5\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} 5 \times 10^{2 k - 1} - 5\)




















\(\ds \)

\(=\)







\(\ds \underbrace {5050 \ldots 50}_{n - 1 \ 5 \text{'s} } - 5\)




















\(\ds \)

\(=\)







\(\ds \underbrace {5050 \ldots 45}_{n - 1 \ 5 \text{'s} }\)









Hence the result.
$\blacksquare$






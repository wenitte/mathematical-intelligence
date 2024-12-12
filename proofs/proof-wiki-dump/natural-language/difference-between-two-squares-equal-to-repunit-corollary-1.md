# 

Source: https://proofwiki.org/wiki/Difference_between_Two_Squares_equal_to_Repunit/Corollary_1

Theorem
The sequence of differences of two squares that each make a repunit begins:














\(\ds 6^2 - 5^2\)

\(=\)







\(\ds 11\)




















\(\ds 56^2 - 45^2\)

\(=\)







\(\ds 1111\)




















\(\ds 556^2 - 445^2\)

\(=\)







\(\ds 111 \, 111\)




















\(\ds \)

\(:\)







\(\ds \)









and in general for integer $n$:

$R_{2 n} = {\underbrace {55 \ldots 56}_{\text {$n - 1$ $5$'s} } }^2 - {\underbrace {44 \ldots 45}_{\text {$n - 1$ $4$'s} } }^2$
that is:

$\ds \sum_{k \mathop = 0}^{2 n - 1} 10^k = \paren {\sum_{k \mathop = 1}^{n - 1} 5 \times 10^k + 6}^2 - \paren {\sum_{k \mathop = 1}^{n - 1} 4 \times 10^k + 5}^2$


Proof
From Difference between Two Squares equal to Repunit, $R_{2 n} = x^2 - y^2$ exactly when $R_{2 n} = a b$ where $x = \dfrac {a + b} 2$ and $y = \dfrac {a - b} 2$.
By the Basis Representation Theorem














\(\ds R_{2n}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n - 1} 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 10^k + \sum_{k \mathop = n}^{2 n - 1} 10^k\)





splitting the summation into two














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 10^k + 10^n \sum_{k \mathop = 0}^{n - 1} 10^k\)





factoring $10^n$ out of the second part














\(\ds \)

\(=\)







\(\ds \paren {10^n + 1} \sum_{k \mathop = 0}^{n - 1} 10^k\)




















\(\ds \)

\(=\)







\(\ds \underbrace {100 \ldots 01}_{\text {$n - 1$ $0$'s} } \times \underbrace {111 \ldots 1}_{\text {$n$ $1$'s} }\)










Thus, let:

$a = \paren {10^n + 1}$
$b = \ds \sum_{k \mathop = 0}^{n - 1}$
So:














\(\ds a + b\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n 10^k + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n 10^k + 2\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a + b} 2\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \frac {10^k} 2 + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n 5 \times 10^{k - 1} + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 5 \times 10^k + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} 5 \times 10^k + 6\)




















\(\ds \)

\(=\)







\(\ds \underbrace {55 \ldots 50}_{\text {$n - 1$ $5$'s} } + 6\)




















\(\ds \)

\(=\)







\(\ds \underbrace {55 \ldots 56}_{\text {$n - 1$ $5$'s} }\)










Similarly:














\(\ds a - b\)

\(=\)







\(\ds \paren {10^n + 1} - \sum_{k \mathop = 0}^{n - 1} 10^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^{n - 1} 9 \times 10^k + 1} + 1 - \sum_{k \mathop = 0}^{n - 1} 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 8 \times 10^k + 2\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a - b} 2\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 4 \times 10^k + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} 4 \times 10^k + 5\)




















\(\ds \)

\(=\)







\(\ds \underbrace {44 \ldots 45}_{\text {$n - 1$ $4$'s} }\)









Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1111$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1111$





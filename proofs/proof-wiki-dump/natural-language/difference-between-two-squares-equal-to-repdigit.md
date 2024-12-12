# 

Source: https://proofwiki.org/wiki/Difference_between_Two_Squares_equal_to_Repdigit

Theorem
Some differences of two squares that each make a repdigit number include:














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
























\(\ds 7^2 - 4^2\)

\(=\)







\(\ds 33\)




















\(\ds 67^2 - 34^2\)

\(=\)







\(\ds 3333\)




















\(\ds 667^2 - 334^2\)

\(=\)







\(\ds 333 \, 333\)




















\(\ds \)

\(:\)







\(\ds \)
























\(\ds 8^2 - 3^2\)

\(=\)







\(\ds 55\)




















\(\ds 78^2 - 23^2\)

\(=\)







\(\ds 5555\)




















\(\ds 778^2 - 223^2\)

\(=\)







\(\ds 555 \, 555\)




















\(\ds \)

\(:\)







\(\ds \)
























\(\ds 9^2 - 2^2\)

\(=\)







\(\ds 77\)




















\(\ds 89^2 - 12^2\)

\(=\)







\(\ds 7777\)




















\(\ds 889^2 - 112^2\)

\(=\)







\(\ds 777 \, 777\)




















\(\ds \)

\(:\)







\(\ds \)











Proof
Let $a, b$ be integers with $1 \le b < a \le 8$ and $a + b = 9$.
Then:














\(\ds \paren {1 + \sum_{k \mathop = 0}^n a 10^k}^2 - \paren {1 + \sum_{k \mathop = 0}^n b 10^k}^2\)

\(=\)







\(\ds \paren {1 + \sum_{k \mathop = 0}^n a 10^k - 1 - \sum_{k \mathop = 0}^n b 10^k} \paren {1 + \sum_{k \mathop = 0}^n a 10^k + 1 + \sum_{k \mathop = 0}^n b 10^k}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^n \paren {a - b} 10^k} \paren {2 + \sum_{k \mathop = 0}^n 9 \times 10^k}\)





$a + b = 9$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^n \paren {a - b} 10^k} \paren {1 + 10^{n + 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {a - b} 10^k + \sum_{k \mathop = 0}^n \paren {a - b} 10^{k + n + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {a - b} 10^k + \sum_{k \mathop = n + 1}^{2 n + 1} \paren {a - b} 10^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n + 1} \paren {a - b} 10^k\)









which is a repdigit number.

The examples above are instances with $\tuple {a, b} = \tuple {5, 4}, \tuple {6, 3}, \tuple {7, 2}, \tuple {8, 1}$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1111$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1111$





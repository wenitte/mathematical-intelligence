# 

Source: https://proofwiki.org/wiki/No_4_Fibonacci_Numbers_can_be_in_Arithmetic_Sequence

Theorem
Let $a, b, c, d$ be distinct Fibonacci numbers.

Then, except for the trivial case:

$a = 0, b = 1, c = 2, d = 3$
it is not possible that $a, b, c, d$ are in arithmetic sequence.


Proof
Let:

$a = F_i, b = F_j, c = F_k, d = F_l$
where $F_n$ denotes the $n$th Fibonacci number.

Without loss of generality, further suppose that;

$a < b < c < d$
or equivalently:

$i < j < k < l$

Since $i, j, k, l$ are integers, the inequality could be written as:

$i \le j - 1 \le k - 2 \le l - 3$

Now consider:














\(\ds d - c\)

\(=\)







\(\ds F_l - F_k\)




















\(\ds \)

\(\ge\)







\(\ds F_l - F_{l - 1}\)





By assumption, $k - 2 \le l - 3$














\(\ds \)

\(=\)







\(\ds F_{l - 2}\)





Definition of Fibonacci Number














\(\ds \)

\(\ge\)







\(\ds F_j\)





By assumption, $j - 1 \le l - 3$














\(\ds \)

\(\ge\)







\(\ds F_j - F_i\)




















\(\ds \)

\(=\)







\(\ds b - a\)










For $a, b, c, d$ be in arithmetic sequence:

$d - c = b - a$
This means that the all the inequalities above must be equalities:

$F_l - F_k = F_l - F_{l - 1}$
$F_{l - 2} = F_j$
$F_j = F_j - F_i$

So:

$F_i = 0$
and:

$F_k = F_{l - 1}$
$F_j = F_{l - 2}$
The only Fibonacci numbers having different index but have the same value is $F_1 = F_2 = 1$.
So one of the following is true:

$F_k = F_{l - 1} = 1$
$F_j = F_{l - 2} = 1$
$j - 1 = k - 2 = l - 3$

Suppose the third statement is true.
Write $k = j + 1$, $l = j + 2$.
Then:














\(\ds F_{j + 2} - F_{j + 1}\)

\(=\)







\(\ds F_{j + 1} - F_j\)





$F_j, F_{j + 1}, F_{j + 2}$ form an arithmetic sequence








\(\ds \leadsto \ \ \)





\(\ds F_j\)

\(=\)







\(\ds F_{j - 1}\)





Definition of Fibonacci Number








\(\ds \leadsto \ \ \)





\(\ds F_j - F_{j - 1}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds F_{j - 2}\)

\(=\)







\(\ds 0\)





Definition of Fibonacci Number



The only zero term of the Fibonacci numbers is $F_0$.
This gives $j = 2$.

Therefore the only arithmetic sequence among Fibonacci numbers satisfying the condition above is:

$F_0, F_2, F_3, F_4$
which corresponds to:

$0, 1, 2, 3$

Now suppose $F_j = 1$.
Since $F_i, F_j, F_k, F_l$ form an arithmetic sequence:

$F_k = F_j + \paren {F_j - F_i} = 2$
$F_l = F_k + \paren {F_j - F_i} = 3$
Which again gives the arithmetic sequence $0, 1, 2, 3$.

Finally suppose $F_k = 1$. 
Since $F_i, F_j, F_k$ form an arithmetic sequence:

$F_j = \dfrac 1 2 \paren {F_i + F_k} = \dfrac 1 2$
which is not an integer.
So $F_k \ne 1$.

All cases have been accounted for, and the only arithmetic sequence that can be formed is $0, 1, 2, 3$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$





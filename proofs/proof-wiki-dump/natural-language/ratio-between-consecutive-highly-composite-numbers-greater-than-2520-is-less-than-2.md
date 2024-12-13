# 

Source: https://proofwiki.org/wiki/Ratio_between_Consecutive_Highly_Composite_Numbers_Greater_than_2520_is_Less_than_2

Theorem
The ratio between $2$ consecutive highly composite numbers both greater than $2520$ is less than $2$.


Proof
Aiming for a contradiction, suppose $n$ and $m$ are consecutive highly composite numbers such that:

$2520 < n < m$
$m / n \ge 2$
By definition of highly composite:

$\map \tau m > \map \tau n$
and, by hypothesis, $m$ is the smallest such integer.
We have that:

$\map \tau {2 n} > \map \tau n$
so it follows that $m \le 2 n$, otherwise $m$ would not be the smallest such integer.
So from $m / n \ge 2$ and $m \le 2 n$, it follows that $m = 2 n$.

We have that $2520$ is a special highly composite number.
The prime decomposition of $2520$ s given by:

$2520 = 2^3 \times 3^2 \times 5 \times 7$
We have that $n$ is a highly composite number such that $n > 2520$.
As $2520$ is a special highly composite number, $2520$ is a divisor of $n$.
Thus $n$ can be expressed as:

$n = 2^a \times 3^b \times 5^c \times 7^d \times 11^e \times 13^f \times r$
where:

$a \ge 3$
$b \ge 2$
$c \ge 1$
$d \ge 1$
$r$ is a possibly vacuous product of prime numbers strictly greater than $13$.

We have that $n$ and $m = 2 n$ are consecutive highly composite numbers.
Hence it follows that:

$\map \tau {3 n / 2} \le \map \tau n$
and:

$\map \tau {4 n / 3} \le \map \tau n$
otherwise $3 n / 2$ or $4 n / 3$ would be highly composite numbers between $n$ and $2 n$.

Then:














\(\ds \map \tau {3 n / 2}\)

\(\le\)







\(\ds \map \tau n\)














\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^{a - 1} \times 3^{b + 1} \times 5^c \times 7^d \times 11^e \times 13^f \times r}\)

\(\le\)







\(\ds \map \tau {2^a \times 3^b \times 5^c \times 7^d \times 11^e \times 13^f \times r}\)














\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^{a - 1} \times 3^{b + 1} } \times \map \tau {5^c \times 7^d \times 11^e \times 13^f \times r}\)

\(\le\)







\(\ds \map \tau {2^a \times 3^b} \times \map \tau {5^c \times 7^d \times 11^e \times 13^f \times r}\)





Divisor Count Function is Multiplicative








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^{a - 1} \times 3^{b + 1} }\)

\(\le\)







\(\ds \map \tau {2^a \times 3^b}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {a - 1} + 1} \paren {\paren {b + 1} + 1}\)

\(\le\)







\(\ds \paren {a + 1} \paren {b + 1}\)





Definition of Divisor Count Function








\(\ds \leadsto \ \ \)





\(\ds a \paren {b + 2}\)

\(\le\)







\(\ds \paren {a + 1} \paren {b + 1}\)





simplifying




and:














\(\ds \map \tau {4 n / 3}\)

\(\le\)







\(\ds \map \tau n\)














\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^{a + 2} \times 3^{b - 1} \times 5^c \times 7^d \times 11^e \times 13^f \times r}\)

\(\le\)







\(\ds \map \tau {2^a \times 3^b \times 5^c \times 7^d \times 11^e \times 13^f \times r}\)














\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^{a + 2} \times 3^{b - 1} } \times \map \tau {5^c \times 7^d \times 11^e \times 13^f \times r}\)

\(\le\)







\(\ds \map \tau {2^a \times 3^b} \times \map \tau {5^c \times 7^d \times 11^e \times 13^f \times r}\)





Divisor Count Function is Multiplicative








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^{a + 2} \times 3^{b - 1} }\)

\(\le\)







\(\ds \map \tau {2^a \times 3^b}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {a + 2} + 1} \paren {\paren {b - 1} + 1}\)

\(\le\)







\(\ds \paren {a + 1} \paren {b + 1}\)





Definition of Divisor Count Function








\(\ds \leadsto \ \ \)





\(\ds \paren {a + 3} b\)

\(\le\)







\(\ds \paren {a + 1} \paren {b + 1}\)





simplifying



This leads to:














\(\ds a\)

\(\le\)







\(\ds b + 1\)




















\(\ds 2 b - 1\)

\(\le\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds 2 b - 1\)

\(\le\)







\(\ds b + 1\)














\(\ds \leadsto \ \ \)





\(\ds b\)

\(\le\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\le\)







\(\ds 3\)










It has already been established that:

$a \ge 3$
$b \ge 2$













\(\ds a\)

\(\ge\)







\(\ds 3\)




















\(\ds b\)

\(\le\)







\(\ds 2\)









so it is now possible to state:














\(\ds a\)

\(=\)







\(\ds 3\)




















\(\ds b\)

\(=\)







\(\ds 2\)










Suppose:

$(1): \quad f \ge 1$
Then:














\(\ds 2^5 \times 3^3 \times 5^c \times 7^d \times 11^e \times 13^{f - 1} \times r\)

\(<\)







\(\ds 2^3 \times 3^2 \times 5^c \times 7^d \times 11^e \times 13^f \times r\)





because $12 = 2^2 \times 3 < 13$








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^5 \times 3^3 \times 5^c \times 7^d \times 11^e \times 13^{f - 1} \times r}\)

\(<\)







\(\ds \map \tau {2^3 \times 3^2 \times 5^c \times 7^d \times 11^e \times 13^f \times r}\)





as $2^3 \times 3^2 \times 5^c \times 7^d \times 11^e \times 13^f \times r$ is highly composite








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^5 \times 3^3 \times 13^{f - 1} } \times \map \tau {5^c \times 7^d \times 11^e \times r}\)

\(<\)







\(\ds \map \tau {2^3 \times 3^2 \times 13^f} \times \map \tau {5^c \times 7^d \times 11^e \times r}\)





Divisor Count Function is Multiplicative








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^5 \times 3^3 \times 13^{f - 1} }\)

\(<\)







\(\ds \map \tau {2^3 \times 3^2 \times 13^f}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {5 + 1} \paren {3 + 1} \paren {\paren {f - 1} + 1}\)

\(<\)







\(\ds \paren {3 + 1} \paren {2 + 1} \paren {f + 1}\)





Definition of Divisor Count Function








\(\ds \leadsto \ \ \)





\(\ds 24 f\)

\(<\)







\(\ds 12 \paren {f + 1}\)





Definition of Divisor Count Function








\(\ds \leadsto \ \ \)





\(\ds f\)

\(<\)







\(\ds 1\)





which is a contradiction of $(1)$



So $f = 0$ and so by Prime Decomposition of Highly Composite Number $r = 1$.
Thus:

$n = 2^3 \times 3^2 \times 5^c \times 7^d \times 11^e$
where $c = 1$ or $c = 2$.

Suppose $c = 2$.
Then:














\(\ds 2^5 \times 3^2 \times 5 \times 7^d \times 11^e\)

\(<\)







\(\ds 2^3 \times 3^2 \times 5^2 \times 7^d \times 11^e\)





because $4 = 2^2 < 5$








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^5 \times 3^2 \times 5 \times 7^d \times 11^e}\)

\(<\)







\(\ds \map \tau {2^3 \times 3^2 \times 5^2 \times 7^d \times 11^e}\)





as $2^3 \times 3^2 \times 5^2 \times 7^d \times 11^e$ is highly composite








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^5 \times 5} \times \map \tau {3^2 \times 7^d \times 11^e}\)

\(<\)







\(\ds \map \tau {2^3 \times 5^2} \times \map \tau {3^2 \times 7^d \times 11^e}\)





Divisor Count Function is Multiplicative








\(\ds \leadsto \ \ \)





\(\ds \map \tau {2^5 \times 5}\)

\(<\)







\(\ds \map \tau {2^3 \times 5^2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {5 + 1} \paren {1 + 1}\)

\(<\)







\(\ds \paren {3 + 1} \paren {2 + 1}\)





Definition of Divisor Count Function








\(\ds \leadsto \ \ \)





\(\ds 12\)

\(<\)







\(\ds 12\)





which is an absurdity




So $c = 1$ and so by Prime Decomposition of Highly Composite Number:

$n = 2^3 \times 3^2 \times 5 \times 7$
or:

$n = 2^3 \times 3^2 \times 5 \times 7 \times 11$

Thus it has been established that these are the only possible values of $n$ greater than $2520$ which may fit the criteria for $n$ and $2 n$ to be consecutive highly composite numbers.
But the first of these is $2^3 \times 3^2 \times 5 \times 7 = 2520$ which fails through not being greater than $2520$.

Thus we consider:

$n = 2^3 \times 3^2 \times 5 \times 7 \times 11 = 27 \, 720$
We have that:














\(\ds \map \tau {27 \, 720}\)

\(=\)







\(\ds \map \tau {2^3 \times 3^2 \times 5 \times 7 \times 11}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 96\)










It is now necessary to show that there are no highly composite numbers between $27 \, 720$ and $2 \times 27 \, 720 = 55 \, 440$.
That is, all numbers $n$ such that $27 \, 720 < n < 55 \, 440$ are to be shown to have $\map \tau n < 96$.

But:














\(\ds \map \tau {45 \, 360}\)

\(=\)







\(\ds \map \tau {2^4 \times 3^4 \times 5 \times 7}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 + 1} \paren {4 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 100\)









So $45 \, 360$ has a higher $\tau$ than $27 \, 720$ and so the next higher highly composite number than $27 \, 720$ is less than twice it.
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
Dec. 1991: Steven Ratering: An Interesting Subset of the Highly Composite Numbers (Math. Mag. Vol. 64, no. 5: pp. 343 – 346)  www.jstor.org/stable/2690653





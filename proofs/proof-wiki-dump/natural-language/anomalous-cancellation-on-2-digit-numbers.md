# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation_on_2-Digit_Numbers



Theorem
There are exactly four anomalously cancelling proper fractions having two-digit numerator and denominator when expressed in base $10$ notation:


$16 / 64$
$\dfrac 1 4 = \dfrac {16} {64} = \dfrac {166} {664} = \dfrac {1666} {6664} = \cdots$


$19 / 95$
$\dfrac 1 5 = \dfrac {19} {95} = \dfrac {199} {995} = \dfrac {1999} {9995} = \cdots$


$26 / 65$
$\dfrac 2 5 = \dfrac {26} {65} = \dfrac {266} {665} = \dfrac {2666} {6665} = \cdots$


$49 / 98$
$\dfrac 4 8 = \dfrac {49} {98} = \dfrac {499} {998} = \dfrac {4999} {9998} = \cdots$


Proof
Let $\dfrac {\sqbrk {a x} } {\sqbrk {x b} }$ be an anomalously cancelling proper fraction.

Then we have:




\(\text {(1)}: \quad\)









\(\ds a, b, x \le 9\)

\(\)







\(\ds \)





as they are digits in base $10$




\(\text {(2)}: \quad\)









\(\ds a < b\)

\(\)







\(\ds \)





this fraction is a proper fraction




\(\text {(3)}: \quad\)









\(\ds \dfrac a b = \dfrac {\sqbrk {a x} } {\sqbrk {x b} }\)

\(\)







\(\ds \)





this fraction is anomalously cancelling




From $(3)$:














\(\ds \dfrac a b\)

\(=\)







\(\ds \dfrac {10 a + x} {10 x + b}\)














\(\ds \leadsto \ \ \)





\(\ds a \paren {10 x + b}\)

\(=\)







\(\ds b \paren {10 a + x}\)














\(\ds \leadsto \ \ \)





\(\ds 10 a x + a b\)

\(=\)







\(\ds 10 a b + b x\)














\(\ds \leadsto \ \ \)





\(\ds 10 a x - b x\)

\(=\)







\(\ds 9 a b\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac {9 a b} {10 a - b}\)









Therefore $\dfrac {9 a b} {10 a - b}$ must be an integer.

Aiming for a contradiction, suppose $10 a - b$ is divisible by a prime $p$ such that $p > 9$.
We have that:

$\paren {10 a - b} \divides 9 a b$
and so:

$p \divides 9 a b$
where $\divides$ denotes divisibility.
By Euclid's Lemma for Prime Divisors, that means one of the elements of $\set {9, a, b}$ must be divisible by $p$.
Hence from Absolute Value of Integer is not less than Divisors, either $a$ or $b$ must be greater than $9$.
This contradicts $(1)$ above.
Hence by Proof by Contradiction it cannot be the case that $10 a - b$ is divisible by a prime greater than $9$.

We continue:














\(\ds \dfrac {9 a b} {10 a - b}\)

\(\le\)







\(\ds 9\)





from $(1)$: $x \le 9$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {a b} {10 a - b}\)

\(\le\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds a b\)

\(\le\)







\(\ds 10 a - b\)





as $10 a - b \ge 10 - b > 0$








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\le\)







\(\ds 10 a - a b\)





adding $b - a b$ to both sides








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\ge\)







\(\ds \dfrac b {10 - b}\)





as $10 - b > 0$




It remains for us to check whether $x = \dfrac {9 a b} {10 a - b}$ is an integer for $\dfrac b {10 - b} \le a < b$, when $b$ ranges from $2$ to $9$.
We note first that the following pairs $\tuple {a, b}$ are such that $\dfrac b {10 - b} > a$:












\(\, \ds b = 6: \, \)

\(\ds \dfrac b {10 - b}\)

\(=\)







\(\ds \dfrac 3 2 > 1\)





which eliminates $\tuple {1, 6}$












\(\, \ds b = 7: \, \)

\(\ds \dfrac b {10 - b}\)

\(=\)







\(\ds \dfrac 7 3 > 2\)





which eliminates $\tuple {1, 7}$ and $\tuple {2, 7}$












\(\, \ds b = 8: \, \)

\(\ds \dfrac b {10 - b}\)

\(=\)







\(\ds 4 > 3\)





which eliminates $\tuple {1, 8}$, $\tuple {2, 8}$ and $\tuple {3, 8}$












\(\, \ds b = 9: \, \)

\(\ds \dfrac b {10 - b}\)

\(=\)







\(\ds 9\)





which eliminates all possible such solutions such that $b = 9$




Then we eliminate the pairs $\tuple {a, b}$ where $10 a - b$ has a prime factor greater than $9$:












\(\, \ds \tuple {3, 4}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 26 = 13 \times 2\)


















\(\, \ds \tuple {4, 6}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 34 = 17 \times 2\)


















\(\, \ds \tuple {5, 6}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 44 = 11 \times 4\)


















\(\, \ds \tuple {3, 7}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 23\)


















\(\, \ds \tuple {4, 7}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 33 = 11 \times 3\)


















\(\, \ds \tuple {5, 7}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 43\)


















\(\, \ds \tuple {6, 7}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 53\)


















\(\, \ds \tuple {6, 8}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 52 = 13 \times 4\)


















\(\, \ds \tuple {7, 8}: \, \)

\(\ds 10 a - b\)

\(=\)







\(\ds 62 = 31 \times 2\)










Thus it remains to check whether $\dfrac {9 a b} {10 a - b}$ is an integer for the following pairs $\tuple {a, b}$:

$\tuple {1, 2}$, $\tuple {1, 3}$, $\tuple {2, 3}$, $\tuple {1, 4}$, $\tuple {2, 4}$, $\tuple {1, 5}$, $\tuple {2, 5}$, $\tuple {3, 5}$, $\tuple {4, 5}$, $\tuple {2, 6}$, $\tuple {3, 6}$, $\tuple {4, 8}$, $\tuple {5, 8}$













\(\, \ds \tuple {1, 2}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {18} 8\)





not an integer












\(\, \ds \tuple {1, 3}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {27} 7\)





not an integer












\(\, \ds \tuple {2, 3}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {54} {16}\)





not an integer












\(\, \ds \tuple {1, 4}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {36} 6 = 6\)





which leads to the solution $\dfrac {16} {64}$












\(\, \ds \tuple {2, 4}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {72} {16}\)





not an integer












\(\, \ds \tuple {1, 5}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {45} 5 = 9\)





which leads to the solution $\dfrac {19} {95}$












\(\, \ds \tuple {2, 5}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {90} {15} = 6\)





which leads to the solution $\dfrac {26} {65}$












\(\, \ds \tuple {3, 5}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {135} {25}\)





not an integer












\(\, \ds \tuple {4, 5}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {180} {35}\)





not an integer












\(\, \ds \tuple {2, 6}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {108} {14}\)





not an integer












\(\, \ds \tuple {3, 6}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {108} {14}\)





not an integer












\(\, \ds \tuple {4, 8}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {288} {32} = 9\)





which leads to the solution $\dfrac {49} {98}$












\(\, \ds \tuple {5, 8}: \, \)

\(\ds \dfrac {9 a b} {10 a - b}\)

\(=\)







\(\ds \dfrac {360} {42}\)





not an integer




So the only solutions for $\tuple {a, x, b}$ are:

$\tuple {1, 6, 4}$, $\tuple {1, 9, 5}$, $\tuple {2, 6, 5}$ and $\tuple {4, 9, 8}$
These correspond to the fractions:

$\dfrac {16} {64}$, $\dfrac {19} {95}$, $\dfrac {26} {65}$ and $\dfrac {49} {98}$
$\blacksquare$


Historical Note
According to David Wells in his $1986$ work Curious and Interesting Numbers, this result, as well as some others, was demonstrated by Alfred Moessner in Volumes 19 and 20 of Scripta Mathematica, but it has proven difficult to find an archived copy to consult directly.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 /64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16/64$




